const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');
 
module.exports = async (req, res) => {
	//access date from db
	let result = await pagination(Article).find().populate('author').page(1).size(4).display(5).exec();
	

	//res.send("Welcome to home page")
	res.render('home/default.art', {
		result: result
	}); 
}