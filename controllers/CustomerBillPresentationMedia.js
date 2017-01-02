'use strict';

var url = require('url');


var CustomerBillPresentationMedia = require('./CustomerBillPresentationMediaService');


module.exports.customerBillPresentationMediaFind = function customerBillPresentationMediaFind (req, res, next) {
  CustomerBillPresentationMedia.customerBillPresentationMediaFind(req.swagger.params, res, next);
};

module.exports.customerBillPresentationMediaGet = function customerBillPresentationMediaGet (req, res, next) {
  CustomerBillPresentationMedia.customerBillPresentationMediaGet(req.swagger.params, res, next);
};
