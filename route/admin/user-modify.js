const {User} = require('../../model/user')
const bcrypt = require('bcrypt')
module.exports = async (req,res, next) => {
	const {username, email, role, state, password} = req.body
	//user's id
	const id = req.query.id;

	//validate password
	let user = await User.findOne({_id:id});

	const matched = await bcrypt.compare(password, user.password);
	//password matched
	if (matched) {
		//update info
		//cannot pass current password to the database
		await User.updateOne({_id: id}, {
			username: username,
			email: email,
			role: role,
			state: state
		});

		//redirect to user list page
		res.redirect('/admin/user');
	} else {
		let obj = {path:'/admin/user-edit',id:id, message:'password is not matched and user cannot modify'};
		next(JSON.stringify(obj));
	}
}