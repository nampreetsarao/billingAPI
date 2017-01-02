'use strict';

var url = require('url');


var BillingAccount = require('./BillingAccountService');


module.exports.billingAccountCreate = function billingAccountCreate (req, res, next) {
  BillingAccount.billingAccountCreate(req.swagger.params, res, next);
};

module.exports.billingAccountFind = function billingAccountFind (req, res, next) {
  BillingAccount.billingAccountFind(req.swagger.params, res, next);
};

module.exports.billingAccountGet = function billingAccountGet (req, res, next) {
  BillingAccount.billingAccountGet(req.swagger.params, res, next);
};

module.exports.billingAccountPatch = function billingAccountPatch (req, res, next) {
  BillingAccount.billingAccountPatch(req.swagger.params, res, next);
};
