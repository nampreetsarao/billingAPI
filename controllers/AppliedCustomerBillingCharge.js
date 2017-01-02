'use strict';

var url = require('url');


var AppliedCustomerBillingCharge = require('./AppliedCustomerBillingChargeService');


module.exports.appliedCustomerBillingChargeCreate = function appliedCustomerBillingChargeCreate (req, res, next) {
  AppliedCustomerBillingCharge.appliedCustomerBillingChargeCreate(req.swagger.params, res, next);
};

module.exports.appliedCustomerBillingChargeFind = function appliedCustomerBillingChargeFind (req, res, next) {
  AppliedCustomerBillingCharge.appliedCustomerBillingChargeFind(req.swagger.params, res, next);
};

module.exports.appliedCustomerBillingChargeGet = function appliedCustomerBillingChargeGet (req, res, next) {
  AppliedCustomerBillingCharge.appliedCustomerBillingChargeGet(req.swagger.params, res, next);
};
