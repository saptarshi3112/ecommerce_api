const {
  User,
  Product,
  Category
} = require('../models');

const {
  statusMessage
} = require('../config');
const category = require('../models/Category');

/**
 * Fetch all the products
 * TODO paginate products by index number. 
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise}
 */
const getAllProducts = (req, res) => {

  const { page } = req.query;

  Product.find()
    .then(products => res.json(products))
    .catch(err => {
      res.json({ ...constants.SERVER500, error: err.message });
    }); 
}

/**
 * Get details of a product
 * @param {*} req 
 * @param {*} res 
 * @returns {JSON}
 */
const getProductDetails = (req, res) => {
  const { _id } = req.params;
  Product.findOne(_id)
    .then(productFound => {
      if (!productFound) {
        res.json(statusMessage.PRODUCT404);
      } else {
        res.json({ ...statusMessage.PRODUCT200, product: productFound });
      }
    })
    .catch(err => res.json({ ...constants.SERVER500, error: err.message }));
}

/**
 * Get products by their categories
 * @param {*} req 
 * @param {*} res 
 * @returns {JSON}
 */
const getProductByCategory = (req, res) => {
  // get the product category.
  const { _id } = req.params;

  Category.findById(_id)
    .then(category => {
      if (!category) {
        res.json(statusMessage.CATEGORY400);
      } else {
        Product.find({ category_id: _id })
          .then(products => {})
          .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
      }
    })
    .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
};

/**
 * Add new product
 * @param {*} req 
 * @param {*} res 
 * @returns {JSON}
 */
const addNewProduct = (req, res) => {
  const {
    title, 
    description,
    product_image,
    product_category
  } = req.body;

  Category.findById(product_category)
    .then(categoryFound => {
      if (!categoryFound) {
        return res,json(statusMessage.CATEGORY404);
      } else {
        // add product.
        new Product({
          title: title,
          description: description,
          product_image: product_image,
          product_category: categoryFound._id
        }).save()
          .then(productCreated => {
            if (!productCreated) {
              res.json(statusMessage.REQUEST400);
            } else {
              res.json(statusMessage.PRODUCT201);
            }
          })
          .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));
      }
    })
    .catch(err => {
      res.json({ ...statusMessage.SERVER500, error: err.message });
    })
}

/**
 * Edit product. 
 * @param {*} req 
 * @param {*} res 
 * @returns {JSON}
 */
const editProduct = (req, res) => {
  const {
    _id,
    title,
    description,
    product_image,
    stock,
    category_id
  } = req.body;

  // check if the category exists.
  Category.findById(_id)
    .then(category => {
      if (!category) {
        res.json(statusMessage.CATEGORY404);
      } else {
        
        // get the product.
        Product.fidn
        
      }
    })
    .catch(err => res.json({ ...statusMessage.SERVER500, error: err.message }));

}

const deleteProduct = (req, res) => {
}

/**
 * update product stock.
 * @param {*} req
 * @param {*} res
 * @returns {JSON}
 */
const updateProductStock = (req, res) => {
  // get the id and count
  const { _id, stock } = req.query;

  Product.findById(_id)
    .then(productFound => {
      if (!productFound) {
        res.json({...statusMessage.PRODUCT404});
      } else {
        productFound.stock = stock;
        productFound.save()
          .then(saved => {
            if (!saved) {
              res.json(statusMessage.REQUEST400);
            } else {
              res.json(statusMessage.PRODUCT202);
            }
          })
          .catch(err => res.json(statusMessage.SERVER500));
      }
    })
    .catch(err => {
      res.json({ ...statusMessage.SERVER500, error: err.message });
    });
}

module.exports = {
  getAllProducts,
  getProductDetails,
  getProductByCategory,
  addNewProduct,
  editProduct,
  deleteProduct,
  updateProductStock 
};
