'use strict';

//Mongo connection

// Then we'll pull in the database client library
var MongoClient = require("mongodb").MongoClient;

// Now lets get cfenv and ask it to parse the environment variable
var cfenv = require('cfenv');
var appenv = cfenv.getAppEnv();

// Within the application environment (appenv) there's a services object
var services = appenv.services;

// The services object is a map named by service so we extract the one for MongoDB
var mongodb_services = services["compose-for-mongodb"];

// This check ensures there is a services for MongoDB databases
assert(!util.isUndefined(mongodb_services), "Must be bound to compose-for-mongodb services");

// We now take the first bound MongoDB service and extract it's credentials object
var credentials = mongodb_services[0].credentials;

// Within the credentials, an entry ca_certificate_base64 contains the SSL pinning key
// We convert that from a string into a Buffer entry in an array which we use when
// connecting.
var ca = [new Buffer(credentials.ca_certificate_base64, 'base64')];

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
   db.collection('billingAccount', function(err, collection) {
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
    db.collection('billingAccount', function(err, collection) {
        collection.find().toArray(function(err, items) {
          console.log("Inside collection ...");
            //res.send(items);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(items[Object.keys(items)[1]] || {}, null, 2));
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
    db.collection('billingAccount', function(err, collection) {
        collection.find({"customerAccount.id":accountId}).toArray(function(err, items) {
          console.log("Inside find by query ...");
            //res.send(items);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(items[Object.keys(items)[0]] || {}, null, 2));
        });
    });



}

exports.billingAccountPatch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * billingAccountId (String)
  * billingAccount (BillingAccount)
  **/
    var examples = {};
  examples['application/json'] = {
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "paymentMean" : "",
  "customerBillingCycleSpecification" : {
    "billingDateShift" : 123,
    "name" : "aeiou",
    "id" : 123456789,
    "href" : "aeiou",
    "frequency" : "aeiou"
  },
  "relatedParty" : [ "" ],
  "ratingType" : "aeiou",
  "customerBillPresentationMedia" : "",
  "name" : "aeiou",
  "currency" : {
    "currencyCode" : "aeiou"
  },
  "id" : 123456789,
  "href" : "aeiou",
  "state" : "aeiou",
  "customerBillFormat" : {
    "name" : "aeiou",
    "id" : 123456789,
    "href" : "aeiou"
  },
  "billingAccountBalance" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "validFor" : "",
    "type" : "aeiou",
    "status" : "aeiou"
  } ],
  "customerAccount" : {
    "role" : "aeiou",
    "name" : "aeiou",
    "id" : "aeiou",
    "href" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}
