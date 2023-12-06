const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/coneccion');
import {Pokemon} from '../Pokemon/PokemonModelo'

const Ubicaciones = sequelize.define('Ubicacion', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    estatus: {
        type: DataTypes.CHAR, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'ubicacion' });


Ubicaciones.belongsTo(Pokemon, {
    foreignKey: "idubicacion",
});

export {
    Ubicaciones
}