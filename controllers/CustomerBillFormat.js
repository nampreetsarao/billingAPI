'use strict';

var url = require('url');


var CustomerBillFormat = require('./CustomerBillFormatService');


module.exports.customerBillFormatFind = function customerBillFormatFind (req, res, next) {
  CustomerBillFormat.customerBillFormatFind(req.swagger.params, res, next);
};

module.exports.customerBillFormatGet = function customerBillFormatGet (req, res, next) {
  CustomerBillFormat.customerBillFormatGet(req.swagger.params, res, next);
};
