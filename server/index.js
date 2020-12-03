const {
  express,
  bodyParser,
  cors
} = require('./require');

const {
  dbInit,
  constants
} = require('./config');

const router = require('./routes');

const {
  routerLogger
} = require('./middlewares');

dbInit();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

//
app.use('/api/', routerLogger, router);

const port = constants.port;
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`server on ${port}`);
  }
});
