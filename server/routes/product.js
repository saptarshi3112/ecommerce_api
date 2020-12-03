const { express } = require('../require');

const router = express.Router();

const {
  productController
} = require('../controllers');

const {
  validUser
} = require('../middlewares');


// get request
router.get('/getAllProduct', validUser, productController.getAllProducts);
router.get('/getProductByCategory/:categoryName', validUser, productController.getProductByCategory);

// post request
router.post('/addNewProduct', validUser, productController.addNewProduct);

module.exports = router;
