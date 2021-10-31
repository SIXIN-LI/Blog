const {User} = require('../../model/user');
module.exports = async (req,res) => {
	//receive user id
	await User.findOneAndDelete({_id:req.query.id});
	res.redirect('/admin/user');
	
}