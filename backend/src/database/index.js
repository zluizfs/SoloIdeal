const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Locals = require('../models/Local');
const Talhaos = require('../models/Talhaos');
const Analises = require('../models/Analises');

const connection = new Sequelize(dbConfig);

User.init(connection);
Locals.init(connection);
Talhaos.init(connection);
Analises.init(connection);

User.associate(connection.models);
Locals.associate(connection.models);
Talhaos.associate(connection.models);
Analises.associate(connection.models);

module.exports = connection;