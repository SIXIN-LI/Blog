const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session');
const template = require('art-template');
const moment = require("moment");
//morgan is a middleware under express - can print request info
const morgan = require('morgan');
const config = require('config');

//create website server
const app = express();
  
//connect to database
require('./model/connect.js');
//deal with post params
app.use(bodyParser.urlencoded({extended: false}))
//setup session
app.use(session({secret: 'secret-key'}));

//tell express where templates are
app.set('views', path.join(__dirname, 'views'));
//tell express the postfix of templates
app.set('view engine', 'art');
//when rendering templates with .art, I use art-template
app.engine('art', require('express-art-template'));
//pass dateformat to template documents
template.defaults.imports.moment = moment;

//determine using data in env variable
console.log(config.get('title'));

//access system env varibales
if (process.env.NODE_ENV == 'development'){
	
	//display request info in console
	app.use(morgan('dev'))
} else {
	console.log("Here is for production.")
}

//import routers 
const home = require('./route/home');
const admin = require('./route/admin'); 

//start with /admin page && intercep requests and determine login
app.use('/admin', require('./middleware/loginGuard'));

//open for static resources(CSS, js,jpg)
app.use(express.static(path.join(__dirname, 'public')))

//match pathname and routers
app.use('/home', home); 
app.use('/admin', admin);

// // //catch error 
// app.use((err,req,res,next) => {
// 	//now err contain the path and message
// 	//convert string to object
// 	res.send(err);
// 	// const result = JSON.parse(err);
// 	// let params = [];
// 	// //concatenate every parameters
// 	// for (let attr in result) {
// 	// 	if (attr != 'path') {
			
// 	// 		params.push(attr + '=' + result[attr])
// 	// 	}
// 	// }
// 	// res.redirect(`${result.path}?${params.join('&')}`);
// })

//default 80
app.listen(80)
console.log('Website server is successfully initiated. ')