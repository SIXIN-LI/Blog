const bcrypt = require('bcrypt');


async function run() {
	//generate a ramdom string
	const salt = await bcrypt.genSalt(10);
	const result = await bcrypt.hash('123456',salt);
	console.log(result);
}