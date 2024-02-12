const accessTokenConfig = {
  secretKey: process.env.ACCESS_TOKEN_KEY || 'accessTokenSecretKey',
  duration: '10m'
};

const refreshTokenConfig = {
  secretKey: process.env.REFRESH_TOKEN_KEY || 'refreshTokenSecretKey',
  duration: '1d'
};

module.exports = {
  accessTokenConfig,
  refreshTokenConfig
};