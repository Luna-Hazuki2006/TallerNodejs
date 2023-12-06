const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');
import {Ubicaciones} from '../Ubicacion/UbicacionModelo'
import { Pokeusario } from '../Pokeusario/PokeusuarioModelo';

const Pokemon = sequelize.define('Pokemon', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    altura: {
        type: DataTypes.DOUBLE, 
        allowNull: false
    }, 
    peso: {
        type: DataTypes.DOUBLE, 
        allowNull: false
    }, 
    url: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    idubicacion: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'pokemons' });

Pokemon.hasOne(Ubicaciones, { as: 'ubicacion', foreignKey: 'idubicacion' });

Pokemon.belongsTo(Pokeusario, {
    foreignKey: "idpokemon",
});

export {
    Pokemon
}