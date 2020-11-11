const express = require('express');

const UserController = require('./controllers/UserController');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users/register', UserController.store);

routes.post('/users/auth', authController.store);

module.exports = routes;