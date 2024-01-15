require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Witaj, świecie!');
});

app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});