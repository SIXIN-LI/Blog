//connect to database in mongodb
const mongoose = require('mongoose');
const config = require('config');
//create a new database
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`)
	.then(() => {console.log("database successfully connected")})
	.catch(() => {console.log("database connection failed")})

