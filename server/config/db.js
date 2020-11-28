const {
  mongoose
} = require('../require');

const constants = require('./constants');

module.exports = () => {
  const connectionString = `mongodb://${constants.dbHost}:${constants.dbPort}/${constants.dbName}`;
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('mongodb connected at ' + connectionString);
    }
  });
};
