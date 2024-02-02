const Log = require('../models/log.model');

// Recording events and other information to logs in the database
const logger = async (userId, event) => async (req, res) => {
  const userAgent = req.useragent;
  const device = userAgent.isMobile ? 'Mobile' : userAgent.isTablet ? 'Tablet' : 'Desktop';
  const clientIp = req.ip;

  try {
    await Log.create({
      user_id: userId,
      event: event,
      device: device,
      client_ip: clientIp,
      created_at: Log.sequelize.literal('CURRENT_TIMESTAMP'),
    });

  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = logger;