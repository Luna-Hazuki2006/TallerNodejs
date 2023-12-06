const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');
import { Usuario } from '../Usuario/UsuarioModelo';

const Sesiones = sequelize.define('session', {
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

Sesiones.hasOne(Usuario, { as: 'usuario', foreignKey: 'idUser' });

export {
    Sesiones
}