const {
  express
} = require('../require');
const router = express.Router();


const userRouter = require('./user');


// User route
router.use('/user/', userRouter);


// Routes
module.exports = router;
