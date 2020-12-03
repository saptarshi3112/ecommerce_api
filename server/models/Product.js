const { Schema } = require('mongoose');
const {
  mongoose
} = require('../require');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  product_image: { 
    type: String,
    default: ''
  },
  stock: {
    type: Number,
    default: 0
  },
  expected_delivery_date: {
    type: Date
  },
  product_category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  color: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
