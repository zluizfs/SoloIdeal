const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const SoilTest = require('../models/SoilTest');
const Macronutrients = require('../models/Macronutrients');

const connection = new Sequelize(dbConfig);

User.init(connection);
// SoilTest.init(connection);
// Macronutrients.init(connection);

// User.associate(connection.models);
// SoilTest.associate(connection.models);
// Macronutrients.associate(connection.models);

module.exports = connection;