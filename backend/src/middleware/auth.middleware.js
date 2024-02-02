const jwt = require('jsonwebtoken');

// Authorization middleware for endpoint access based on JWT
async function authorization(requiredRoles) {
  return async (req, res) => {
    try {
      // Check if the user has a token
      const token = req.header('Authorization');

      if (!token) {
        return res.status(401).json({ message: 'Missing authorization token. Access denied.' });
      }

      // JWT token verification
      const decodedToken = jwt.verify(token, sessionConfig.jwtSecretKey);

      // Check if the user has one of the required roles
      const hasRequiredRole = requiredRoles.some(role => decodedToken.roles.includes(role));

      if (!hasRequiredRole) {
        return res.status(403).json({ message: 'Insufficient privileges. Access denied.' });
      }

    } catch (error) {
      return res.status(401).json({ message: 'Token verification error. Access denied.' });
    }
  };
}

module.exports = authorization;