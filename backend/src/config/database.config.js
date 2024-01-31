const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'userhub',
});

// Checking the connection to the database
const checkDatabaseConnection = async () => {
  try {
    await db.authenticate();
    console.log(`Connected to the database`);
  } catch (error) {
    console.error(`Database connection error: ${error}`);
  }
};

checkDatabaseConnection();

module.exports = db;