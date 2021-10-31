//feature
const guard = (req,res,next) => {
	//if the page is not login page and the user is not logged in
	if (req.url != '/login' && !req.session.username) {
		//redirect to login page
		res.redirect('/admin/login');
	} else {
		//if the user is logged in, let go
		next();
	}
	
}

module.exports = guard;