const { DataTypes } = require('sequelize');
const db = require('../config/database.config');
const User = require('./user.model');

const JWTblacklist = db.define('jwt_blacklisted', {
  token_id: {
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
  jwt: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
},
{
  timestamps: false,
});

module.exports = JWTblacklist;