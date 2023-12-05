const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');

const Pokeusario = sequelize.define('PokeUsuario', {
    idpokemon: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.CHAR,
        allowNull: false
    }, 
    ubicacion_encuentro: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    fecha_encuentro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }, 
    apodo: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    favorito: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'pokeusario' });