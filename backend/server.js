const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const portFront = process.env.PORT_FRONT || 45173;
const portBack = process.env.PORT_BACK || 3000;
const domain = process.env.DOMAIN || 'localhost';

app.use(express.json());
app.use(cookieParser());

// Cors configuration
app.use(cors({
  origin: `http://${domain}:${portFront}`,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Adding routes to handle endpoints
app.use('/app', routes);

// Listening on a specified port
app.listen(portBack, () => {
  console.log(`Server is running at: http://${domain}:${portBack}`);
});