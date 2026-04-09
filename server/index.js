import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;
const DB_FILE = path.join(__dirname, 'data.json');
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../dist')));

// KST Date Helper (YYMMDD)
const getKSTDate = () => {
  const now = new Date();
  const kst = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  return kst.toISOString().slice(2, 10).replace(/-/g, '');
};

// Helper to read DB
const readDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    return { 
      collection: {}, 
      pending_collection: {}, 
      today_collection: [], 
      last_reset_date: getKSTDate(),
      visitor_stats: { total: 0, today: 0, last_date: getKSTDate(), today_ips: [] }
    };
  }
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!data.pending_collection) data.pending_collection = {};
    if (!data.today_collection) data.today_collection = [];
    if (!data.visitor_stats) data.visitor_stats = { total: 0, today: 0, last_date: getKSTDate(), today_ips: [] };
    return data;
  } catch (e) {
    return { collection: {}, pending_collection: {}, today_collection: [] };
  }
};

// Helper to write DB
const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// Middleware: Auto-reset today's data & Track Visitors
const checkDateAndVisitors = (req, res, next) => {
  const db = readDB();
  const currentDate = getKSTDate();
  let changed = false;

  // Reset Today's Catch if date changed
  if (db.last_reset_date !== currentDate) {
    db.today_collection = [];
    db.last_reset_date = currentDate;
    changed = true;
  }

  // Reset Today's Visitors if date changed
  if (db.visitor_stats.last_date !== currentDate) {
    db.visitor_stats.today = 0;
    db.visitor_stats.today_ips = [];
    db.visitor_stats.last_date = currentDate;
    changed = true;
  }

  // Count unique IP for today
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (!db.visitor_stats.today_ips.includes(ip)) {
    db.visitor_stats.today += 1;
    db.visitor_stats.total += 1;
    db.visitor_stats.today_ips.push(ip);
    changed = true;
  }

  if (changed) writeDB(db);
  req.db = db; // Pass db to next handlers
  next();
};

app.use('/api', checkDateAndVisitors);

// API: Get Collections
app.get('/api/collection', (req, res) => {
  const db = req.db;
  // Don't send IP list to frontend
  const { today_ips, ...safeVisitorStats } = db.visitor_stats;
  res.json({ ...db, visitor_stats: safeVisitorStats, server_date: getKSTDate() });
});

// API: Login
app.post('/api/login', (req, res) => {
  const { id, pw } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  const user = users.find(u => u.id === id && u.pw === pw);
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// API: Register Pokemon
const addPokemon = (type, key, count, db) => {
  const target = type === 'main' ? 'collection' : 'pending_collection';
  db[target][key] = (db[target][key] || 0) + (count || 1);
};

app.post('/api/collection/add', (req, res) => {
  const { key, count } = req.body;
  const db = req.db;
  addPokemon('main', key, count, db);
  writeDB(db);
  res.json(db);
});

app.post('/api/pending/add', (req, res) => {
  const { key, count } = req.body;
  const db = req.db;
  addPokemon('pending', key, count, db);
  writeDB(db);
  res.json(db);
});

// API: Remove Pokemon
const removePokemon = (type, key, count, db) => {
  const target = type === 'main' ? 'collection' : 'pending_collection';
  if (db[target][key]) {
    if (count === null || count === undefined || count >= db[target][key]) {
      delete db[target][key];
    } else {
      db[target][key] -= count;
    }
  }
};

app.post('/api/collection/remove', (req, res) => {
  const { key, count } = req.body;
  const db = req.db;
  removePokemon('main', key, count, db);
  writeDB(db);
  res.json(db);
});

app.post('/api/pending/remove', (req, res) => {
  const { key, count } = req.body;
  const db = req.db;
  removePokemon('pending', key, count, db);
  writeDB(db);
  res.json(db);
});

// API: Today's Catch Manual
app.post('/api/today/add', (req, res) => {
  const { key } = req.body;
  const db = req.db;
  if (!db.today_collection.includes(key)) {
    db.today_collection.push(key);
    writeDB(db);
  }
  res.json(db);
});

app.post('/api/today/remove', (req, res) => {
  const { key } = req.body;
  const db = req.db;
  db.today_collection = db.today_collection.filter(item => item !== key);
  writeDB(db);
  res.json(db);
});

app.post('/api/today/clear', (req, res) => {
  const db = req.db;
  db.today_collection = [];
  writeDB(db);
  res.json(db);
});

// Catch-all to serve React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
