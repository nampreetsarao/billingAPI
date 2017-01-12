'use strict';

//********************************Start of Local configuration ******************************************
// var mongo = require('mongodb');
//
// var Server = mongo.Server,
//     Db = mongo.Db,
//     BSON = mongo.BSONPure;
//
// var server = new Server('localhost', 27017, {auto_reconnect: true});
// var mongodb = new Db('billingAPIDB', server);
//
// mongodb.open(function(err, db) {
//     if(!err) {
//         console.log("Connected to 'billingAPIDB' database");
//         mongodb.collection('billingAccount', {strict:true}, function(err, collection) {
//             if (err) {
//                 console.log("The 'billingAccount' collection doesn't exist. Creating it with sample data...");
//                 //populateDB();
//             }
//         });
//     }
// });
//********************************End of Local configuration ******************************************

//********************************Start of Bluemix configuration ******************************************

//Mongo connection

// Then we'll pull in the database client library
var MongoClient = require("mongodb").MongoClient;

// Now lets get cfenv and ask it to parse the environment variable
var cfenv = require('cfenv');
var appenv = cfenv.getAppEnv();

// Within the application environment (appenv) there's a services object
var services = appenv.services;
console.log("Service object:"+JSON.stringify(services));
// The services object is a map named by service so we extract the one for MongoDB
var mongodb_services = services["compose-for-mongodb"];
console.log("Mongo db service configuration is:"+JSON.stringify(mongodb_services));
// For local run


// This check ensures there is a services for MongoDB databases
//assert(!util.isUndefined(mongodb_services), "Must be bound to compose-for-mongodb services");

// We now take the first bound MongoDB service and extract it's credentials object
var credentials = mongodb_services[0].credentials;
console.log("credentials fetched are:"+credentials);

// Within the credentials, an entry ca_certificate_base64 contains the SSL pinning key
// We convert that from a string into a Buffer entry in an array which we use when
// connecting.
var ca = [new Buffer(credentials.ca_certificate_base64, 'base64')];
console.log("CA:"+ca);

// This is a global variable we'll use for handing the MongoDB client around
var mongodb;

// This is the MongoDB connection. From the application environment, we got the
// credentials and the credentials contain a URI for the database. Here, we
// connect to that URI, and also pass a number of SSL settings to the
// call. Among those SSL settings is the SSL CA, into which we pass the array
// wrapped and now decoded ca_certificate_base64,
MongoClient.connect(credentials.uri, {
        mongos: {
            ssl: true,
            sslValidate: true,
            sslCA: ca,
            poolSize: 1,
            reconnectTries: 1
        }
    },
    function(err, db) {
        // Here we handle the async response. This is a simple example and
        // we're not going to inject the database connection into the
        // middleware, just save it in a global variable, as long as there
        // isn't an error.
        if (err) {
            console.log("Error occured while connecting: "+err);
        } else {
            // Although we have a connection, it's to the "admin" database
            // of MongoDB deployment. In this example, we want the
            // "examples" database so what we do here is create that
            // connection using the current connection.
            mongodb = db.db("billingAPIDB");
            console.log("Connected sucessfuly to billingAPIDB!!");
        }
    }
);


//********************************End of Bluemix configuration ******************************************

//********************************Start of Jelastic configuration ******************************************
// Connection for Jelastic
// var mongo = require('mongodb');
//
// var Server = mongo.Server,
//     Db = mongo.Db,
//     BSON = mongo.BSONPure;
//
// var server = new Server('sl-us-dal-9-portal.2.dblayer.com', 18254, {auto_reconnect: true});
// var db = new Db('billingAPIDB', server);
// //var promise = new Promise();
//
// db.open(function(err, db) {
//     if(!err) {
//       db.authenticate("admin", "OMEABBXDEUVWWZVF", function(err, res) {
//            if(!err) {
//                console.log("Authenticated");
//                db.collection('billingAccount', {strict:true}, function(err, collection) {
//                  // promise.resolve(db);
//                    if (err) {
//                        console.log("The 'billingAccount' collection doesn't exist. Creating it with sample data..."+err);
//
//                        //populateDB();
//                    }else{
//                      console.log("Connected to 'billingAPIDB' database");
//                    }
//                });
//            } else {
//                console.log("Error in authentication.");
//                console.log(err);
//            }
//        });
//     }else{
//                console.log("Unable to connect:"+err);
//     }
// });
//********************************End of Jelastic configuration ******************************************
//Mongo connection end


exports.billingAccountCreate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * billingAccount (BillingAccount)
  **/

   console.log("Request received:"+JSON.stringify(args.billingAccount.originalValue));
    // console.log("Data is res:"+res);
    // console.log("Data in next:"+next);
   var billingAccount = args.billingAccount.originalValue;
   console.log('Adding billing account: ' + JSON.stringify(billingAccount));
   mongodb.collection('billingAccount', function(err, collection) {
       collection.insert(billingAccount, {safe:true}, function(err, result) {
           if (err) {
               res.send({'error':'An error has occurred'});
               res.setHeader('Content-Type', 'application/json');
               res.end({'error':'An error has occurred'});
           } else {
               console.log('Success: ' + JSON.stringify(result[0]));
               res.setHeader('Content-Type', 'application/json');
               res.end(result[0]);
           }
       });
   });
}

exports.billingAccountFind = function(args, res, next) {

  console.log("Args value: "+JSON.stringify(args));
    console.log("Inside find all....");
  //  promise.then(function(db){
    mongodb.collection('billingAccount', function(err, collection) {
        collection.find().toArray(function(err, items) {
          if (err) {
              res.send({'error':'An error has occurred'});
              res.setHeader('Content-Type', 'application/json');
              res.end({'error':'An error has occurred'});
          } else {
          console.log("Inside collection ...");
            //res.send(items);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(items));
          }
        });
    });
}

exports.billingAccountGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * billingAccountId (String)
  * fields (String)
  **/
  console.log("Args value: "+JSON.stringify(args));
  console.log("Account Id passed: "+JSON.stringify(args.billingAccountId.originalValue));
  var accountId =args.billingAccountId.originalValue;
  console.log("Inside account get....");
  //  promise.then(function(db){
    mongodb.collection('billingAccount', function(err, collection) {
        collection.find({"customerAccount.id":accountId}).toArray(function(err, items) {
          if (err) {
              res.send({'error':'An error has occurred'});
              res.setHeader('Content-Type', 'application/json');
              res.end({'error':'An error has occurred'});
          } else {
            console.log("Inside find by query ...");
            //res.send(items);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(items[Object.keys(items)[0]] || {}, null, 2));
          }
        });
    });


}

exports.billingAccountPatch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * billingAccountId (String)
  * billingAccount (BillingAccount)
  **/

  console.log("\nRequest received:"+JSON.stringify(args.billingAccount.originalValue));
  console.log("\nAccount Id passed: "+JSON.stringify(args.billingAccountId.originalValue));
  var accountId =args.billingAccountId.originalValue;
  var name  =args.billingAccount.originalValue.name;
  var cycleDate  =args.billingAccount.originalValue.customerBillingCycleSpecification.name;
  var billingAccountTest = args.billingAccount.originalValue;

  console.log('\nUpdating billing account: ' + billingAccountTest);

  mongodb.collection('billingAccount', function(err, collection) {

    collection.find({"customerAccount.id":accountId}).toArray(function(err, items) {
      if (err) {
          res.send({'error':'No such record found by id:'+accountId});
          res.setHeader('Content-Type', 'application/json');
          res.end({'error':'No such record found by id:'+accountId});
      } else {
        console.log("\n Found an account by the id: "+accountId);
        //to allow upsert add {upsert : true},
        collection.replaceOne({"customerAccount.id":accountId},{ $set:{"name": name, "customerBillingCycleSpecification.name": cycleDate}},function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
                res.setHeader('Content-Type', 'application/json');
                res.end({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.setHeader('Content-Type', 'application/json');
                res.end(result[0]);
            }
        });
      }
    });



  });

}


// Now we go and listen for a connection.
//app.listen(port);
//
require("cf-deployment-tracker-client").track();
