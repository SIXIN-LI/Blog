
const express = require('express');
//create a router for display page
const home = express.Router();

//display homepage
home.get('/', require('./home/index'));

//article content
home.get('/article', require('./home/article'))

module.exports = home;