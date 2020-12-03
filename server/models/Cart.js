const { mongoose } = require('../require');

const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }
});

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;
