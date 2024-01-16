const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importowanie tras do obsługi logowania
const authRoutes = require('./routes/auth');

// Parsowanie JSON-a
app.use(express.json());

// Dodanie tras do obsługi logowania
app.use('/auth', authRoutes);

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});