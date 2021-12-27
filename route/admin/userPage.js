const { User } = require('../../model/user.js');

module.exports = async (req, res) => {
	//mark the current page as user management page
	req.app.locals.currentLink = 'user';
	//current page arguments
	let page = req.query.page || 1;
	//each page records
	let pagesize = 10;
	let count = await User.countDocuments({});
	let totalPages = Math.ceil(count / pagesize);

	let start = (page-1) * pagesize;
	let users = await User.find({}).limit(pagesize).skip(start);
	let countUsers = Object.keys(users).length;
	res.render('admin/user', {
		users: users,
		page: page,
		totalPages: totalPages,
		countUsers: countUsers
	});
}