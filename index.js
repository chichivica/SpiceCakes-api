/**
 * Created by Ivan Talalaev on 2/13/2017.
 */

let http = require('http'),
  serverConfig = require('config').get('server'),
  models = require('./models'),
  app = require('./app');

/**
 * Get port from environment and store in Express.
 */
let port = normalizePort(process.env.PORT || serverConfig.port);

app.set('port', port);
/**
 * Create HTTP server.
 */
let server = http.createServer(app);

models.sequelize.sync().then(function () {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function () {
    console.log('Express server listening on port ' + server.address().port);
    process.send('ready'); //tell PM2 we are ready
  });
  server.on('error', onError);
  server.on('listening', onListening);

});


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

process.on('SIGINT', () => { //initiated by PM2
  console.log(`trying to close process ${process.pid}`);
  // models.sequelize.close();
  server.close(() => {
    console.log('server closed');
    process.exit();
  });
  // setTimeout(function () {
  //   console.error("Could not close connections in time, forcefully shutting down");
  //   process.exit()
  // }, 10 * 1000);
});
