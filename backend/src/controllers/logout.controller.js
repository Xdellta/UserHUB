const jwt = require('jsonwebtoken');
const { refreshTokenConfig } = require('../config/jwt.config');
const JWTblacklist = require('../models/jwtBlacklist.model');

exports.logout = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.cookies;

    if (accessToken) res.clearCookie('accessToken');

    if (refreshToken) {
      res.clearCookie('refreshToken');

      const decodedRT = jwt.verify(refreshToken, refreshTokenConfig.secretKey);

      await JWTblacklist.create({
        user_id: decodedRT.userId,
        refresh_jwt: refreshToken,
        created_at: new Date()
      });

    } else {
      return res.status(400).json({ error: 'Logout failed: Insufficient input' });
    }

    return res.status(200).json({ message: 'Logout successful' });  

  } catch(error) {
    return res.status(401).json({ error: 'Logout failed: User session expired or not authenticated' });
  }
};