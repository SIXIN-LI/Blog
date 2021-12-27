//connect to database in mongodb
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');

//create user collection rules
const userSchema = new mongoose.Schema( {
	username: {
		type: String,		
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	email: {
		type: String,
		//make sure email address no repeated
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	//admin user
	//normal user
	role: String,
	state: {
		type: Number,
		//if the value is 0, it is active. otherwise, inactive
		default: 0
	} 
});

const User = mongoose.model('User', userSchema);


async function createUser() {
	const salt = await bcrypt.genSalt(10);
	const encryptedPsw = await bcrypt.hash('LSX781754008', salt);

	const user = await User.create({
		username: 'SixinLi',
		email:'781754008@qq.com',
		password:encryptedPsw,
		role:'admin',
		state: 0
	});

}

//validate user info
const validateUser = user => {
	//define object validation rules
	const schema = Joi.object({
		username: Joi.string().min(2).max(20).required(),
		email: Joi.string().email().required(),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
		role: Joi.string().valid('normal','admin').required(),
		state: Joi.number().valid(0,1).required()
	});

	return schema.validateAsync(user);
}

//may add more things
module.exports = {
	User, 
	validateUser
};