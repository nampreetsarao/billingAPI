'use strict';

//Mongo connection

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('169.46.22.35', 27017, {auto_reconnect: true});
var db = new Db('billingAPIDB', server);
//var promise = new Promise();

db.open(function(err, db) {
    if(!err) {
      //  db.authenticate("admin", "admin", function(err, res) {
        console.log("Authenticated");
          //  if(!err) {
          //
          //      db.collection('billingAccount', {strict:true}, function(err, collection) {
          //        // promise.resolve(db);
          //          if (err) {
          //              console.log("The 'billingAccount' collection doesn't exist. Creating it with sample data..."+err);
           //
          //              //populateDB();
          //          }else{
          //            console.log("Connected to 'billingAPIDB' database");
          //          }
          //      });
          //  } else {
          //      console.log("Error in authentication.");
          //      console.log(err);
          //  }
      // });
    }else{
               console.log("Unable to connect:"+err);
    }
});

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
