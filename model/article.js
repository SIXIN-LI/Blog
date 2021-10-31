const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: 4,
		maxlength: 20,
		//validation before inserting to DB
		required: [true, 'Please enter a title']
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Please enter the author.']

	},
	publishDate: {
		type: Date,
		default: Date.now()
	},
	cover: {
		type: String,
		default: null
	},
	content: {
		type: String
	}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = {
	Article
}