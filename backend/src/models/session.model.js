const { DataTypes } = require('sequelize');
const db = require('../config/database.config');

const Session = db.define('sessions', {
  session_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  jwt_token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  creation_datetime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},
{
  tableName: 'sessions',
  timestamps: false,
});

// Adding a foreign key to the relationship with the users table
Session.belongsTo(db.models.users, {
  foreignKey: 'user_id',
});

module.exports = Session;