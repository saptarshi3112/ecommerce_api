const {
  express
} = require('../require');
const router = express.Router();

// user controller
const {
  userController
} = require('../controllers');

const {
  loginValidator
} = require('../validators');


// Post methods
router.post('/login/', userController.userLogin);
router.post('/register/', userController.userRegistration);


module.exports = router;
