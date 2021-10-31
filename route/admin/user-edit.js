const { User } = require('../../model/user.js');

module.exports = async (req,res) => {

	//mark the current page as user management page
	req.app.locals.currentLink = 'user';
	
	//get id argument in the url
	const {message, id } = req.query;

	//if id exists, it is doing revising 
	if (id) {
		let user = await User.findOne({ _id: id});
		res.render('admin/user-edit', {
			message: message,
			user: user,
			link: '/admin/user-modify?id=' + id,
			button: 'modify'
		});
	} else {
		res.render('admin/user-edit', {
			message: message,
			link: 'admin/user-edit',
			button:'Add'

		});
	}

	
}