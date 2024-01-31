require('dotenv').config();

const sessionConfig = {
  jwtSecretKey: process.env.JWT_KEY || 'jwtSecretKey',
  duration: '1h'
};

module.exports = sessionConfig;