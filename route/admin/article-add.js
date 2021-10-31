const formidable = require('formidable');
const path = require('path');
const {Article} = require('../../model/article');

module.exports = (req,res) => {
	const form = new formidable.IncomingForm();
	//set up file storage directory
	form.uploadDir = path.join(__dirname, '../','../','public','uploads');
	//keep the suffix of files
	form.keepExtensions = true;
	form.parse(req, async (err, fields, files) => {
		//fields = regular data (strings etc), type as whole body object
		
		//files to be uploaded, type as object
		await Article.create({
			title: fields.title,
			author: fields.author,
			publishDate: fields.publishDate,
			cover: files.cover.path.split('public')[1],
			content: fields.content
		});
		//redirect to the artile list page
		res.redirect('/admin/article');
	})
	//can only have one send request
}