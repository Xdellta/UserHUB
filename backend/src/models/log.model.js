const { DataTypes } = require('sequelize');
const db = require('../config/database.config');
const User = require('./user');

const Log = db.define('logs', {
  log_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  event: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  device: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  client_ip: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
},
{
  timestamps: false,
});

module.exports = Log;