const jwt = require('jsonwebtoken');
const { accessTokenConfig, refreshTokenConfig } = require('../config/jwt.config');

// Creating and sending tokens to the client
async function jwtCreator(userId, role, res) {
  try {
    if (!userId || !role) {
      throw new Error('Invalid input');
    }

    const accessToken = jwt.sign({userId, role }, accessTokenConfig.secretKey, { expiresIn: accessTokenConfig.duration });
    const refreshToken = jwt.sign({userId, role }, refreshTokenConfig.secretKey, { expiresIn: refreshTokenConfig.duration });

    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    return { success: true, message: 'Token generation successful' };

  } catch (error) {
    return { success: false, message: 'Token generation failed.' + error.message };
  }
}

module.exports = jwtCreator;