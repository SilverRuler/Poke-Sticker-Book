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

app.use(cors());
app.use(bodyParser.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../dist')));

// Helper to read DB
const readDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    return { collection: {}, pending_collection: {} };
  }
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!data.pending_collection) data.pending_collection = {};
    return data;
  } catch (e) {
    return { collection: {}, pending_collection: {} };
  }
};

// Helper to write DB
const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// API: Get Collections
app.get('/api/collection', (req, res) => {
  res.json(readDB());
});

// API: Register Pokemon (Generic for both)
const addPokemon = (type, id, count, db) => {
  const target = type === 'main' ? 'collection' : 'pending_collection';
  db[target][id] = (db[target][id] || 0) + (count || 1);
};

app.post('/api/collection/add', (req, res) => {
  const { id, count } = req.body;
  const db = readDB();
  addPokemon('main', id, count, db);
  writeDB(db);
  res.json(db);
});

app.post('/api/pending/add', (req, res) => {
  const { id, count } = req.body;
  const db = readDB();
  addPokemon('pending', id, count, db);
  writeDB(db);
  res.json(db);
});

// API: Remove Pokemon (Generic for both, with count support)
const removePokemon = (type, id, count, db) => {
  const target = type === 'main' ? 'collection' : 'pending_collection';
  if (db[target][id]) {
    if (count === null || count === undefined || count >= db[target][id]) {
      delete db[target][id];
    } else {
      db[target][id] -= count;
    }
  }
};

app.post('/api/collection/remove', (req, res) => {
  const { id, count } = req.body;
  const db = readDB();
  removePokemon('main', id, count, db);
  writeDB(db);
  res.json(db);
});

app.post('/api/pending/remove', (req, res) => {
  const { id, count } = req.body;
  const db = readDB();
  removePokemon('pending', id, count, db);
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
