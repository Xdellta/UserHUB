const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

// Creating jwt tokens
async function jwtCreator(email, role) {
  try {
    if (!email || !role) {
      return null;
    }

    return token = jwt.sign({ email, role }, jwtConfig.jwtSecretKey, { expiresIn: jwtConfig.duration });

  } catch (error) {
    return null;
  }
}

module.exports = jwtCreator;