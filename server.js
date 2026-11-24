const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, 'data', 'data.json');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const read = () => {
  try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; }
};
const write = (d) => {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(d, null, 2));
};

app.get('/api/data', (req, res) => res.json(read()));

app.put('/api/data', (req, res) => {
  if (!Array.isArray(req.body)) return res.status(400).json({ error: 'Data harus berupa array' });
  write(req.body);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Data List Mechine berjalan di http://localhost:${PORT}`));
