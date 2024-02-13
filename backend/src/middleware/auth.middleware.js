const jwt = require('jsonwebtoken');
const JWTblacklist = require('../models/jwtBlacklist.model');
const { accessTokenConfig, refreshTokenConfig } = require('../config/jwt.config');

// Authorization middleware for endpoint access based on JWT
exports.authorization = async (requiredRoles, req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  try {
    if (!accessToken) throw new Error('No access token');

    const decodedAT = jwt.verify(accessToken, accessTokenConfig.secretKey);
    if (!decodedAT) throw new Error('Incorrect access token verification');

    if (!decodedAT.userId || !decodedAT.role)  { 
      return res.status(401).json({ error: 'Access denied. Invalid access token' });
    }

    const hasRequiredRole = requiredRoles.some(role => decodedAT.role.includes(role));
    if (!hasRequiredRole) return res.status(403).json({ error: 'Access denied. Insufficient permissions' });

    req.userId = decodedAT.userId;
    next();

  } catch(errorAccessToken) {
    // Refresh token logic
    try {
      if (!refreshToken) throw new Error('No refresh token');

      const decodedRT = jwt.verify(refreshToken, refreshTokenConfig.secretKey);
      if (!decodedRT) throw new Error('Incorrect refresh token verification');

      if (!decodedRT.userId || !decodedRT.role)  { 
        return res.status(401).json({ error: 'Access denied. Invalid refresh token' });
      }

      const accessToken = jwt.sign({userId: decodedRT.userId, role: decodedRT.role }, accessTokenConfig.secretKey, { expiresIn: accessTokenConfig.duration });
      res.cookie('accessToken', accessToken, { httpOnly: true });

      req.userId = decodedRT.userId;
      next();

    } catch(errorRefreshToken) {
      return res.status(401).json({ error: "" });
    }
  }
}