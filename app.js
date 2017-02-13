/**
 * Created by Ivan Talalaev on 2/13/2017.
 */
let express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');


let users = require('./routes/users'),
  orders = require('./routes/orders');


let app = express();

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', users);
app.use('/api/orders', orders);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(JSON.stringify(err, null, 2));

  if (req.xhr) {
    res.status(err.status || 500).send({
      message: err.message,
    });
  }
  else {
    res.status(err.status || 500).send(err.message)
  }
});


module.exports = app;

