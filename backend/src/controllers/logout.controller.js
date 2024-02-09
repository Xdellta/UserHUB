const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');
const JWTblacklist = require('../models/jwtBlacklist.model');

exports.logout = async (req, res) => {
  try {
    const accessToken = req.cookies['accessToken'];
    const refreshToken = req.cookies['refreshToken'];

    if (accessToken) {
      res.clearCookie('accessToken');
    }

    if (refreshToken) {
      res.clearCookie('refreshToken');
    }

    const decodedToken = jwt.verify(refreshToken, jwtConfig.jwtSecretKey);

    if (decodedToken) {
      await JWTblacklist.create({
        user_id: decodedToken.userId,
        jwt: refreshToken,
        added_timestamp: new Date(),
      });
    }

    return res.status(200).json({ message: 'Logout successful' });  

  } catch(error) {
    return res.status(401).json({ error: 'Error during logout process' });
  }
};