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

// REDIS_KEYS: Separated for different purposes
const COLLECTION_KEY = 'poke_collection_db';
const STATS_KEY = 'poke_stats_db';
const ANNIVERSARY_KEY = 'poke_anniversary_db';
const OLD_REDIS_KEY = 'poke_pokedex_db';

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
  const defaultDB = { 
    collection: {}, 
    pending_collection: {}, 
    today_collection: [], // Legacy, for migration
    today_collection_main: [],
    today_collection_pending: [],
    history_main: {},
    history_pending: {},
    anniversary_collection: [], 
    pending_anniversary_collection: [],
    last_reset_date: getKSTDate(),
    visitor_stats: { total: 0, today: 0, last_date: getKSTDate(), today_ips: [] }
  };

  if (redis) {
    // Fetch all three keys in parallel
    const [collData, statsData, annivData] = await Promise.all([
      redis.get(COLLECTION_KEY),
      redis.get(STATS_KEY),
      redis.get(ANNIVERSARY_KEY)
    ]);

    // Migration logic: If new keys don't exist, check old key
    if (!collData && !statsData && !annivData) {
      const oldData = await redis.get(OLD_REDIS_KEY);
      if (oldData) {
        console.log("Migrating from old poke_pokedex_db...");
        return {
          ...defaultDB,
          collection: oldData.collection || {},
          pending_collection: oldData.pending_collection || {},
          today_collection_main: oldData.today_collection || [],
          anniversary_collection: oldData.anniversary_collection || [],
          pending_anniversary_collection: oldData.pending_anniversary_collection || [],
          last_reset_date: oldData.last_reset_date || getKSTDate(),
          visitor_stats: oldData.visitor_stats || defaultDB.visitor_stats
        };
      }
    }

    // Secondary migration: move shared today_collection to today_collection_main
    let todayMain = collData?.today_collection_main;
    let todayPending = collData?.today_collection_pending || [];
    if (!todayMain && collData?.today_collection) {
      todayMain = collData.today_collection;
    }

    return {
      collection: collData?.collection || {},
      pending_collection: collData?.pending_collection || {},
      today_collection_main: todayMain || [],
      today_collection_pending: todayPending || [],
      history_main: collData?.history_main || {},
      history_pending: collData?.history_pending || {},
      last_reset_date: statsData?.last_reset_date || getKSTDate(),
      visitor_stats: statsData?.visitor_stats || defaultDB.visitor_stats,
      anniversary_collection: annivData?.anniversary_collection || [],
      pending_anniversary_collection: annivData?.pending_anniversary_collection || []
    };
  } else {
    if (!fs.existsSync(DB_FILE)) return defaultDB;
    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    
    // Local migration
    if (!data.today_collection_main && data.today_collection) {
      data.today_collection_main = data.today_collection;
      delete data.today_collection;
    }
    
    return { ...defaultDB, ...data };
  }
};

const saveData = async (data) => {
  if (redis) {
    await Promise.all([
      redis.set(COLLECTION_KEY, {
        collection: data.collection,
        pending_collection: data.pending_collection,
        today_collection_main: data.today_collection_main,
        today_collection_pending: data.today_collection_pending,
        history_main: data.history_main,
        history_pending: data.history_pending
      }),
      redis.set(STATS_KEY, {
        last_reset_date: data.last_reset_date,
        visitor_stats: data.visitor_stats
      }),
      redis.set(ANNIVERSARY_KEY, {
        anniversary_collection: data.anniversary_collection,
        pending_anniversary_collection: data.pending_anniversary_collection
      })
    ]);
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
  const lowerUA = ua.toLowerCase();
  return bots.some(bot => lowerUA.includes(bot));
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
    // Archival to history
    if (!db.history_main) db.history_main = {};
    if (!db.history_pending) db.history_pending = {};
    
    if (db.today_collection_main && db.today_collection_main.length > 0) {
      db.history_main[db.last_reset_date] = db.today_collection_main;
    }
    if (db.today_collection_pending && db.today_collection_pending.length > 0) {
      db.history_pending[db.last_reset_date] = db.today_collection_pending;
    }

    db.today_collection_main = [];
    db.today_collection_pending = [];
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
    server_date: getKSTDate()
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
    if (count === null || count === undefined || count >= val) {
      delete req.db.collection[key];
      // Also remove anniversary mark if fully deleted
      req.db.anniversary_collection = req.db.anniversary_collection.filter(k => k !== key);
    } else {
      req.db.collection[key] -= count;
    }
  }
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/pending/remove', async (req, res) => {
  const { key, count } = req.body;
  const val = req.db.pending_collection[key];
  if (val) {
    if (count === null || count === undefined || count >= val) {
      delete req.db.pending_collection[key];
      // Also remove anniversary mark if fully deleted
      req.db.pending_anniversary_collection = req.db.pending_anniversary_collection.filter(k => k !== key);
    } else {
      req.db.pending_collection[key] -= count;
    }
  }
  await saveData(req.db);
  res.json(req.db);
});

app.post('/api/pending/move-to-main', async (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ error: 'Key required' });

  const pendingCount = req.db.pending_collection[key] || 0;
  if (pendingCount > 0) {
    // Add to main collection (increment by the pending count)
    req.db.collection[key] = (req.db.collection[key] || 0) + pendingCount;
    // Remove from pending collection
    delete req.db.pending_collection[key];

    // Move anniversary status if exists
    if (req.db.pending_anniversary_collection.includes(key)) {
      req.db.pending_anniversary_collection = req.db.pending_anniversary_collection.filter(k => k !== key);
      if (!req.db.anniversary_collection.includes(key)) {
        req.db.anniversary_collection.push(key);
      }
    }
    
    await saveData(req.db);
    res.json(req.db);
  } else {
    res.status(400).json({ error: 'Not in pending collection' });
  }
});

app.post('/api/today/add', async (req, res) => {
  const { key, isPending } = req.body;
  const target = isPending ? 'today_collection_pending' : 'today_collection_main';
  if (!req.db[target]) req.db[target] = [];
  if (!req.db[target].includes(key)) {
    req.db[target].push(key);
    await saveData(req.db);
  }
  res.json(req.db);
});

app.post('/api/today/remove', async (req, res) => {
  const { key, isPending } = req.body;
  const target = isPending ? 'today_collection_pending' : 'today_collection_main';
  if (req.db[target]) {
    req.db[target] = req.db[target].filter(i => i !== key);
    await saveData(req.db);
  }
  res.json(req.db);
});

app.post('/api/today/clear', async (req, res) => {
  const { isPending } = req.body;
  if (isPending) {
    req.db.today_collection_pending = [];
  } else {
    req.db.today_collection_main = [];
  }
  await saveData(req.db);
  res.json(req.db);
});

// 30th Anniversary Toggle
app.post('/api/anniversary/toggle', async (req, res) => {
  const { key, isPending } = req.body;
  if (!key) return res.status(400).json({ error: 'Key required' });
  
  if (isPending) {
    if (req.db.pending_anniversary_collection.includes(key)) {
      req.db.pending_anniversary_collection = req.db.pending_anniversary_collection.filter(k => k !== key);
    } else {
      req.db.pending_anniversary_collection.push(key);
    }
  } else {
    if (req.db.anniversary_collection.includes(key)) {
      req.db.anniversary_collection = req.db.anniversary_collection.filter(k => k !== key);
    } else {
      req.db.anniversary_collection.push(key);
    }
  }
  await saveData(req.db);
  res.json(req.db);
});

export default app;
