


async function run() {
	try{
		await schema.validate({username: '123'});
	}catch (ex) {
		console.log(ex.message);
		return;
	}
	console.log('validation passed')
	
}
run()