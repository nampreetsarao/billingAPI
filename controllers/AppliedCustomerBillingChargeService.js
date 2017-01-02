'use strict';

exports.appliedCustomerBillingChargeCreate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appliedCustomerBillingCharge (AppliedCustomerBillingCharge)
  **/
    var examples = {};
  examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "productSpecification" : [ {
    "name" : "aeiou",
    "productNumber" : "aeiou"
  } ],
  "period" : [ {
    "startPeriod" : "2000-01-23T04:56:07.000+00:00",
    "endPeriod" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "taxExcludedAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "appliedCustomerBillingTaxRate" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "taxCategory" : "aeiou"
  } ],
  "description" : "aeiou",
  "id" : 123456789,
  "href" : "aeiou",
  "type" : "aeiou",
  "serviceId" : [ {
    "id" : "aeiou",
    "type" : "aeiou"
  } ],
  "currencyCode" : "aeiou",
  "taxIncludedAmount" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appliedCustomerBillingChargeFind = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "productSpecification" : [ {
    "name" : "aeiou",
    "productNumber" : "aeiou"
  } ],
  "period" : [ {
    "startPeriod" : "2000-01-23T04:56:07.000+00:00",
    "endPeriod" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "taxExcludedAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "appliedCustomerBillingTaxRate" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "taxCategory" : "aeiou"
  } ],
  "description" : "aeiou",
  "id" : 123456789,
  "href" : "aeiou",
  "type" : "aeiou",
  "serviceId" : [ {
    "id" : "aeiou",
    "type" : "aeiou"
  } ],
  "currencyCode" : "aeiou",
  "taxIncludedAmount" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appliedCustomerBillingChargeGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appliedCustomerBillingChargeId (String)
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "productSpecification" : [ {
    "name" : "aeiou",
    "productNumber" : "aeiou"
  } ],
  "period" : [ {
    "startPeriod" : "2000-01-23T04:56:07.000+00:00",
    "endPeriod" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "taxExcludedAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "appliedCustomerBillingTaxRate" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "taxCategory" : "aeiou"
  } ],
  "description" : "aeiou",
  "id" : 123456789,
  "href" : "aeiou",
  "type" : "aeiou",
  "serviceId" : [ {
    "id" : "aeiou",
    "type" : "aeiou"
  } ],
  "currencyCode" : "aeiou",
  "taxIncludedAmount" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

