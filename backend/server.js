const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/index');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Dodanie tras do obsługi endpointów
app.use('/app', routes);

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer Express działa na http://localhost:${port}`);
});