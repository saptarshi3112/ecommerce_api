const { mongoose } = require('../require');

const wishlistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	product_id: {
		type: Schema.Types.ObjectId
	},
	user_id: {
		type: Schema.Types.ObjectId
	},
	added_on: {
		type: Date,
		default: new Date()
	}
});

const wishlist = mongoose.model('wishlist', wishlistSchema);
module.exports = wishlist;
