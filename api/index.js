import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Redis } from '@upstash/redis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Redis if env vars exist, otherwise fallback to local fs (for local dev)
let redis = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

// REDIS_PREFIX: 'poke_' to avoid key collision
const REDIS_KEY = 'poke_pokedex_db';
const DB_FILE = path.join(__dirname, '../server/data.json');
const USERS_FILE = path.join(__dirname, '../server/users.json');

// KST Date Helper (YYMMDD)
const getKSTDate = () => {
  const now = new Date();
  const kst = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  return kst.toISOString().slice(2, 10).replace(/-/g, '');
};

// Unified Data Access Layer
const getData = async () => {
  if (redis) {
    const data = await redis.get(REDIS_KEY);
    return data || { 
      collection: {}, 
      pending_collection: {}, 
      today_collection: [], 
      last_reset_date: getKSTDate(),
      visitor_stats: { total: 0, today: 0, last_date: getKSTDate(), today_ips: [] }
    };
  } else {
    if (!fs.existsSync(DB_FILE)) return { collection: {}, pending_collection: {}, today_collection: [], last_reset_date: getKSTDate(), visitor_stats: { total: 0, today: 0, last_date: getKSTDate(), today_ips: [] } };
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  }
};

const saveData = async (data) => {
  if (redis) {
    await redis.set(REDIS_KEY, data);
  } else {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  }
};

const getUsers = () => {
  if (process.env.ADMIN_USERS) {
    try {
      return JSON.parse(process.env.ADMIN_USERS);
    } catch (e) {
      console.error("ADMIN_USERS env var is not a valid JSON");
    }
  }
  if (fs.existsSync(USERS_FILE)) {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  }
  return [];
};

// Bot Detection Helper
const isBot = (ua) => {
  if (!ua) return false;
  const bots = ['bot', 'spider', 'crawl', 'vercel-screenshot', 'preview', 'slurp', 'facebookexternalhit', 'kakaotalk-scrap'];
  return bots.some(bot => ua.toLowerCase().includes(bots));
};

// Middleware: Auto-reset and Visitor Tracking
app.use(async (req, res, next) => {
  // Only process for /api requests
  if (!req.path.startsWith('/api')) return next();
  
  const db = await getData();
  const currentDate = getKSTDate();
  let changed = false;

  // Reset Today's Catch if date changed
  if (db.last_reset_date !== currentDate) {
    db.today_collection = [];
    db.last_reset_date = currentDate;
    changed = true;
  }

  // Ensure visitor_stats object exists
  if (!db.visitor_stats) db.visitor_stats = { total: 0, today: 0, last_date: currentDate, today_ips: [] };
  
  // Reset Today's Visitors if date changed
  if (db.visitor_stats.last_date !== currentDate) {
    db.visitor_stats.today = 0;
    db.visitor_stats.today_ips = [];
    db.visitor_stats.last_date = currentDate;
    changed = true;
  }

  // Count unique IP for today (exclude bots)
  const ua = req.headers['user-agent'];
  if (!isBot(ua)) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (!db.visitor_stats.today_ips.includes(ip)) {
      db.visitor_stats.today += 1;
      db.visitor_stats.total += 1;
      db.visitor_stats.today_ips.push(ip);
      changed = true;
    }
  }

  if (changed) await saveData(db);
  req.db = db; // Pass db to handlers
  next();
});

// API Routes
app.get('/api/collection', (req, res) => {
  const { today_ips, ...safeVisitorStats } = req.db.visitor_stats;
  const response = {
    ...req.db,
    visitor_stats: safeVisitorStats,
    server_date: getKSTDate() // Explicitly send the current server date
  };
  res.json(response);
});

app.post('/api/login', (req, res) => {
  const { id, pw } = req.body;
  const users = getUsers();
  const user = users.find(u => u.id === id && u.pw === pw);
  if (user) res.json({ success: true });
  else res.status(401).json({ success: false });
});

app.post('/api/collection/add', async (req, res) => {
  const { key, count } = req.body;
  req.db.collection[key] = (req.db.collection[key] || 0) + (count || 1);
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/pending/add', async (req, res) => {
  const { key, count } = req.body;
  req.db.pending_collection[key] = (req.db.pending_collection[key] || 0) + (count || 1);
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/collection/remove', async (req, res) => {
  const { key, count } = req.body;
  const val = req.db.collection[key];
  if (val) {
    if (count === null || count === undefined || count >= val) delete req.db.collection[key];
    else req.db.collection[key] -= count;
  }
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/pending/remove', async (req, res) => {
  const { key, count } = req.body;
  const val = req.db.pending_collection[key];
  if (val) {
    if (count === null || count === undefined || count >= val) delete req.db.pending_collection[key];
    else req.db.pending_collection[key] -= count;
  }
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/today/add', async (req, res) => {
  const { key } = req.body;
  if (!req.db.today_collection.includes(key)) {
    req.db.today_collection.push(key);
    await saveData(req.db);
  }
  res.json(req.db);
});

app.post('/api/today/remove', async (req, res) => {
  const { key } = req.body;
  req.db.today_collection = req.db.today_collection.filter(i => i !== key);
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/today/clear', async (req, res) => {
  req.db.today_collection = [];
  await saveData(req.db);
  res.json(req.db);
});

export default app;
