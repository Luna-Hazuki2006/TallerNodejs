const { DataTypes } = require('sequelize');
const { sequelize } = require('./coneccion');

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
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'pokemons' });

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
    id: {
        type: DataTypes.INTEGER, 
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

const Ubicaciones = sequelize.define('Ubicacion', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
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
}, { tableName: 'sessions' });

Ubicaciones.hasMany(Pokemon, { as: 'pokemones', foreignKey: 'idubicacion' });
Pokemon.belongsTo(Ubicaciones, {
    foreignKey: "idubicacion",
});

module.exports = {
    Ubicaciones,
    Pokemon, 
    Usuario, 
    Pokeusario, 
    Sesiones
};