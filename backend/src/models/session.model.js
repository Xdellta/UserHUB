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

// Dodanie klucza obcego do relacji z tabelą users
Session.belongsTo(db.models.users, {
  foreignKey: 'user_id',
});

module.exports = Session;