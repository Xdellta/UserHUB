const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require('./src/routes/index');

// Parsowanie JSON-a
app.use(express.json());

app.use(cors());

// Dodanie tras do obsługi endpointów
app.use('/app', routes);

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});