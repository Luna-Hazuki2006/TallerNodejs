const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    correo: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    contraseña: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    cedula: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'usuario' });

export {
    Usuario
}