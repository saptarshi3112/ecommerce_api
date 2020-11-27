const { express } = require('../require');

const router = express.Router();

const {
  productController
} = require('../controllers');

const {
  validUser
} = require('../middlewares');

router.get('/getAllProduct', validUser, productController.getAllProducts);


module.exports = router;
