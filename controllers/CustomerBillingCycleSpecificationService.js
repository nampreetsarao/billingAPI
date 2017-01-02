'use strict';

exports.customerBillingCycleSpecificationFind = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "billingDateShift" : 123,
  "name" : "aeiou",
  "id" : 123456789,
  "href" : "aeiou",
  "frequency" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.customerBillingCycleSpecificationGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * customerBillingCycleSpecificationId (String)
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "billingDateShift" : 123,
  "name" : "aeiou",
  "id" : 123456789,
  "href" : "aeiou",
  "frequency" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

