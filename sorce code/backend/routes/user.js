const express = require('express');
const route = express.Router();
const User = require('../controllers/user')

route.get('/login',User.login);
route.post('/signup',User.signUp);







module.exports = route;