const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Usuaris = sequelize.define('Usuaris', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING
    },
    data_registre: {
        type: DataTypes.DATE
    },
    idioma: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'usuaris'
});

module.exports = Usuaris;