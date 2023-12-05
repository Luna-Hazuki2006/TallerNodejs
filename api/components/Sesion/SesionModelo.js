const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');

const Sesiones = sequelize.define('session', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    login: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'sessions' });