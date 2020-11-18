const express = require('express');
const auth = require('./middlewares/auth');

const AuthController = require('./controllers/AuthController');
const AnalisesController= require('./controllers/AnalisesController');
const LocationController = require('./controllers/LocationController');
const TalhaosController = require('./controllers/TalhaosController')

const routes = express.Router();

routes.get('/', auth);

routes.get('/users', AuthController.index);
routes.post('/users/create', AuthController.create);
routes.post('/users/auth', AuthController.authentication);

routes.get('/users/:user_id/location', LocationController.listByUser);
routes.get('/users/location/:id', LocationController.listById);
routes.post('/users/:user_id/location/create', LocationController.create);

routes.get('/users/:user_id/location/:local_id/plots', TalhaosController.listByLocation);
routes.get('/users/location/plots/:id', TalhaosController.listById);
routes.post('/users/:user_id/location/:local_id/plots/create', TalhaosController.create);

routes.get('/users/:user_id/location/:local_id/plots/:talhao_id/analysis/', AnalisesController.listByPlot);
routes.get('/users/location/plots/analysis/:id', AnalisesController.listById);
routes.post('/users/:user_id/location/:local_id/plots/:talhao_id/analysis/create', AnalisesController.create);


module.exports = routes;