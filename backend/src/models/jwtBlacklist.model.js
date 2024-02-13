const { DataTypes } = require('sequelize');
const db = require('../config/database.config');
const User = require('./user.model');

const JWTblacklist = db.define('jwt_blacklist', {
  token_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  refresh_jwt: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
},
{
  tableName: 'jwt_blacklist',
  timestamps: false,
});

module.exports = JWTblacklist;