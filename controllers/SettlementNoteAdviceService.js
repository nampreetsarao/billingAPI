'use strict';

exports.settlementNoteAdviceFind = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "taxExcludedAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "receiver" : {
    "id" : "aeiou",
    "href" : "aeiou",
    "taxRegistration" : {
      "number" : "aeiou"
    }
  },
  "settlementNoteImage" : {
    "imageFormat" : "aeiou",
    "imageFileName" : "aeiou",
    "imageFileURL" : "aeiou",
    "imageSize" : "aeiou"
  },
  "taxItem" : [ {
    "taxRate" : 1.3579000000000001069366817318950779736042022705078125,
    "taxAmount" : 1.3579000000000001069366817318950779736042022705078125,
    "taxCategory" : "aeiou"
  } ],
  "description" : "aeiou",
  "settlementMethod" : {
    "code" : "aeiou",
    "label" : "aeiou"
  },
  "taxDate" : "2000-01-23T04:56:07.000+00:00",
  "issuer" : {
    "id" : "aeiou",
    "href" : "aeiou",
    "taxRegistration" : ""
  },
  "paymentDueDate" : "2000-01-23T04:56:07.000+00:00",
  "settlementNoteItem" : [ {
    "itemNumber" : "aeiou",
    "itemId" : "aeiou",
    "period" : {
      "startPeriod" : "2000-01-23T04:56:07.000+00:00",
      "endPeriod" : "2000-01-23T04:56:07.000+00:00"
    },
    "productSpecification" : {
      "name" : "aeiou",
      "productNumber" : "aeiou"
    },
    "quantity" : "aeiou",
    "taxItem" : [ "" ],
    "itemLabel" : "aeiou"
  } ],
  "id" : 123456789,
  "href" : "aeiou",
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

exports.settlementNoteAdviceGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * settlementNoteAdviceId (String)
  * fields (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "taxExcludedAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "receiver" : {
    "id" : "aeiou",
    "href" : "aeiou",
    "taxRegistration" : {
      "number" : "aeiou"
    }
  },
  "settlementNoteImage" : {
    "imageFormat" : "aeiou",
    "imageFileName" : "aeiou",
    "imageFileURL" : "aeiou",
    "imageSize" : "aeiou"
  },
  "taxItem" : [ {
    "taxRate" : 1.3579000000000001069366817318950779736042022705078125,
    "taxAmount" : 1.3579000000000001069366817318950779736042022705078125,
    "taxCategory" : "aeiou"
  } ],
  "description" : "aeiou",
  "settlementMethod" : {
    "code" : "aeiou",
    "label" : "aeiou"
  },
  "taxDate" : "2000-01-23T04:56:07.000+00:00",
  "issuer" : {
    "id" : "aeiou",
    "href" : "aeiou",
    "taxRegistration" : ""
  },
  "paymentDueDate" : "2000-01-23T04:56:07.000+00:00",
  "settlementNoteItem" : [ {
    "itemNumber" : "aeiou",
    "itemId" : "aeiou",
    "period" : {
      "startPeriod" : "2000-01-23T04:56:07.000+00:00",
      "endPeriod" : "2000-01-23T04:56:07.000+00:00"
    },
    "productSpecification" : {
      "name" : "aeiou",
      "productNumber" : "aeiou"
    },
    "quantity" : "aeiou",
    "taxItem" : [ "" ],
    "itemLabel" : "aeiou"
  } ],
  "id" : 123456789,
  "href" : "aeiou",
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

