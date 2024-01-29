const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Importowanie tras do obsługi autoryzacji
const authRoutes = require('./src/routes/auth.router');

// Parsowanie JSON-a
app.use(express.json());

app.use(cors());

// Dodanie tras do obsługi autoryzacji
app.use('/auth', authRoutes);

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});