'use strict';

var url = require('url');


var CustomerBillingCycleSpecification = require('./CustomerBillingCycleSpecificationService');


module.exports.customerBillingCycleSpecificationFind = function customerBillingCycleSpecificationFind (req, res, next) {
  CustomerBillingCycleSpecification.customerBillingCycleSpecificationFind(req.swagger.params, res, next);
};

module.exports.customerBillingCycleSpecificationGet = function customerBillingCycleSpecificationGet (req, res, next) {
  CustomerBillingCycleSpecification.customerBillingCycleSpecificationGet(req.swagger.params, res, next);
};
