const express = require('express');
const authenticate = require('../middlewares/authenticate.middleware');
const { getAllEmployees } = require('../controllers/employee.controller');
const route = express.Router();

route.get("/", authenticate, getAllEmployees);

module.exports = route;