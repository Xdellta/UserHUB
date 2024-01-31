const jwt = require('jsonwebtoken');
const sessionConfig = require('../config/session.config');
const Session = require('../models/session.model');

async function sessionGenerate(userId, email, role) {
  try {
    if (!userId || !email || !role) {
      return null;
    }

    // Generowanie tokenu JWT
    const token = jwt.sign({ email, role }, sessionConfig.jwtSecretKey, { expiresIn: sessionConfig.duration });

    // Zapis sesji do bazy danych
    await Session.create({
      user_id: userId,
      jwt_token: token,
      creation_datetime: new Date()
    });

    return token;

  } catch (error) {
    return null;
  }
}

module.exports = sessionGenerate;