'use strict';

// //Mongo connection
//
// var mongo = require('mongodb');
//
// var Server = mongo.Server,
//     Db = mongo.Db,
//     BSON = mongo.BSONPure;
//
// var server = new Server('localhost', 27017, {auto_reconnect: true});
// var db = new Db('billingAPIDB', server);
//
// db.open(function(err, db) {
//     if(!err) {
//         console.log("Connected to 'billingAPIDB' database");
//         db.collection('billingAccount', {strict:true}, function(err, collection) {
//             if (err) {
//                 console.log("The 'billingAccount' collection doesn't exist. Creating it with sample data...");
//                 //populateDB();
//             }
//         });
//     }
// });
//
// //End of mongo db connection


var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var serverPort = 8096;

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
