import app from '../api/index.js';

const PORT = 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Local server running on http://0.0.0.0:${PORT}`);
});
