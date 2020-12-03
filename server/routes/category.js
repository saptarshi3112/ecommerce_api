const { express } = require('../require');
const router = express.Router();

const { categoryController } = require('../controllers');
const { validUser } = require('../middlewares');

// get routes
router.get('/getAllCategory', validUser, categoryController.getAllCategory);

// post routes
router.post('/addNewCategory', validUser, categoryController.addNewCategory);

// delete routes
router.delete('/deleteCategory/:_id', validUser, categoryController.deleteCategory);

module.exports = router;
