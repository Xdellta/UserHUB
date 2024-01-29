const { DataTypes } = require('sequelize');
const db = require('../config/database.config.js');

const User = db.define('users', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    timestamps: false,
});

module.exports = User;