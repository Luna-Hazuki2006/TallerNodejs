const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');
import { Pokemon } from '../Pokemon/PokemonModelo';
import {Usuario} from '../Usuario/UsuarioModelo'

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

Pokeusario.hasOne(Usuario, { as: 'usuario', foreignKey: 'idusuario' });
Pokeusario.hasOne(Pokemon, { as: 'pokemons', foreignKey: 'idpokemon' });

export {
    Pokeusario
}