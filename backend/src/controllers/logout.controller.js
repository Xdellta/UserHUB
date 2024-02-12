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

      // await JWTblacklist.create({
      //   user_id: decodedRT.userId,
      //   jwt: refreshToken,
      //   create_at: new Date()
      // });

    } else {
      return res.status(400).json({ error: 'Logout unsuccessful' });
    }

    return res.status(200).json({ message: 'Logout successful' });  

  } catch(error) {
    return res.status(401).json({ error: 'Unauthorized: User session expired or not authenticated' });
  }
};