const { express } = require('../require');
const router = express.Router();

const userRouter = require('./user');
const productRouter = require('./product');
const categoryRouter = require('./category');


// User router
router.use('/user/', userRouter);

// Product router
router.use('/product/', productRouter);


// Category router
router.use('/category/', categoryRouter);

// Routes
module.exports = router;
