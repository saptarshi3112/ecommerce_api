const {
  User,
  Product
} = require('../models');

const getAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));
}

const getProductDetails = (req, res) => {

  const { id } = req.params;

  Product.findOne(id)
    .then(productFound => {})
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));

},

const addNewProduct = (req, res) => {

}

const editProduct = (req, res) => {

}

const deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.findOneAndDelete(id)
    .then()
    .catch();
}

module.exports = {
  getAllProducts,
  getProductDetails,
  addNewProduct,
  editProduct,
  deleteProduct 
};
