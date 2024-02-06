const jwt = require('jsonwebtoken');
const { accessTokenConfig, refreshTokenConfig } = require('../config/jwt.config');

// Authorization middleware for endpoint access based on JWT
const authorization = (requiredRoles) => async (req, res, next) => {
  const accessToken = req.cookies['accessToken'];
  const refreshToken = req.cookies['refreshToken'];

  try {
    if (!accessToken) throw new Error('No access token');

    const decodedToken = jwt.verify(accessToken, accessTokenConfig.secretKey);
    if (!decodedToken) throw new Error('Incorrect access token verification');

    if (!decodedToken.userId || !decodedToken.role)  { 
      return res.status(403).redirect('/logout');
    }

    const hasRequiredRole = requiredRoles.some(role => decodedToken.role.includes(role));
    if (!hasRequiredRole) return res.status(403).json({ error: 'Access denied. Insufficient permissions' });

    next();

  } catch(errorAccessToken) {
    // Refresh token logic
    try {
      if (!refreshToken) throw new Error('No refresh token');

      next();

    } catch(errorRefreshToken) {
      return res.status(403).json({ errorAccessToken, errorRefreshToken, });
    }
  }
}

module.exports = authorization;