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
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'pokemones' });

const Book = sequelize.define('Book', {

  isbn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantPages: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'books' });

Author.hasMany(Book, { as: 'books', foreignKey: 'authorId' });
Book.belongsTo(Author, {
  foreignKey: "authorId",
});

module.exports = {
    Author,
    Book
};