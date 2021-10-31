

//this User is a collection in the database
const {User, validateUser} = require('../../model/user.js');
const bcrypt = require('bcrypt')

module.exports = async (req,res,next) =>{

	
	//validate
	try {
		//console.log('ss');
		await validateUser(req.body);
	} catch (err) {
		//redirect to the user edit page and return a error message
		//using next function to trigger the error-handling middleware
		//next function requires a string argument
		return next("{path: '/admin/user-edit', message: err.message}");
		
	}
	
	//check if the user's email exists
	let user = await User.findOne({email: req.body.email});

	//exist
	if (user) {
		//redirect to the user edit page
		//redirect contains res.end()
		//return res.redirect(`/admin/user-edit?message=email address has been registered`);
		return next("{path: '/admin/user-edit', message: 'This email address has been registered'}");
		
	} else {
		//encode password
		const salt = await bcrypt.genSalt(10);
		const encryPsw = await bcrypt.hash(req.body.password, salt);
		req.body.password = encryPsw;

		//add data to the database
		await User.create(req.body);
		res.redirect('/admin/user');
	}
	
}