const { Article } = require('../../model/article.js')
const pagination = require('mongoose-sex-page');

module.exports = async (req,res) => {
	const page = req.query.page;
	//mark the current page as article management page
	req.app.locals.currentLink = 'article';
	//give the field author all info about this author
	// page -- current page

	//size -- records on each page
	//display -- number of pages number shown
	//exec() -- send the request to DB

	let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
	//res.send(articles);
	res.render('admin/article.art', {
		articles: articles
	});
}