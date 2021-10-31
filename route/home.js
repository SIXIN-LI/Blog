
const express = require('express');
//create a router for display page
const home = express.Router();

home.get('/', (req, res) => {
	res.send("Welcome to home page")
});

module.exports = home;