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
	// res.render('admin/article.art', {
	// 	articles: articles
	// });
	// let articles = {
	// 	"page":4,
	// 	"title":"haha",
	// 	"author":"xixi",
	// 	"records": [
	// 		{
	// 			"_id": 00099,
	// 			"publishDate": "2020-12-23"

	// 		}
	// 	]
	// }
	//res.send(articles);
	// let articles = {
	// 		"page": 1,
	// 		"size": 2,
	// 		"total": 1,
	// 		"records": [
	// 			{
	// 				"_id": "617a3a2bca2098f5cffb98c8",
	// 				"title": "sssssss",
	// 				"author": {
	// 					"_id": "6175f0c8bef0c83ad162d91c",
	// 					"username": "SixinLi1",
	// 					"email": "781754008@qq.com",
	// 					"password": "$2b$10$Yzv//LG5BDvqCnyhu9MU.OZBJElhqOKmzRw1FAi2iaK1CehIRTrqq",
	// 					"role": "admin",
	// 					"state": 0,
	// 					"__v": 0
	// 				},
	// 				"publishDate": null,
	// 				"cover": "\\uploads\\upload_91ea4c104a0265e9985ad1d0c07fd6d3.jpg",
	// 				"content": "<p>sssssssssss</p>",
	// 				"__v": 0
	// 			}
	// 		],
	// 		"pages": 1,
	// 		"display": [
	// 			1
	// 		]
	// 	}
	res.render('admin/article.art', {
		articles : articles
	});
}