const {
  express
} = require('../require');
const router = express.Router();


const userRouter = require('./user');
const productRouter = require('./product');


// User route
router.use('/user/', userRouter);


// product
router.use('/product/', productRouter)


// Routes
module.exports = router;
