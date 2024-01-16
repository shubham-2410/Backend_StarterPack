const express = require('express');
const authRoute = express.json();

const {login , signUp} = require('../controllers/Auth');

authRoute.post('/login' , login);
authRoute.post('/signup' , signUp);

module.exports = authRoute;