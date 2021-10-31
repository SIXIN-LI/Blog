//connect to database in mongodb
const mongoose = require('mongoose');
//create a new database
mongoose.connect('mongodb://localhost/blog')
	.then(() => {console.log("database successfully connected")})
	.catch(() => {console.log("database connection failed")})

