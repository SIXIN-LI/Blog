module.exports =  (req,res) => {

	//mark the current page as article management page
	req.app.locals.currentLink = 'article';
	
	res.render('admin/article-edit.art');
}