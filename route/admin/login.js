//for encoding password
const bcrypt = require('bcrypt');
const {User} = require('../../model/user');

const login = async (req, res) => {
	//receive post params as objects
	
	//second validation in case js code is banned
	const {email, password} = req.body;
	if (email.trim().length == 0 || password.trim().length == 0) {
		return res.status(400).render('admin/error',{msg: 'invalid username or password'});
	}

	//find info about this user
	let user = await User.findOne({email});
	//if user not found, its type is null
	if (user) {
		let isMatched = bcrypt.compare(password, user.password);
		if ( isMatched) {
			//store usernmae in the request params
			//session will create a ID now and store it in the client
			req.session.username = user.username;
			//redirect to user list page
			res.redirect('/admin/user');  
			//I can get the server using req.app
			//put common data in "locals" so that all templates can access
			req.app.locals.userInfo = user;

		} else {
			res.status(400).render('admin/error',{msg: 'invalid username or password'});
		}
	} else {
		res.status(400).render('admin/error',{msg: 'invalid username or password'});
	}
}

module.exports = login;