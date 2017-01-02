'use strict';

var url = require('url');


var SettlementNoteAdvice = require('./SettlementNoteAdviceService');


module.exports.settlementNoteAdviceFind = function settlementNoteAdviceFind (req, res, next) {
  SettlementNoteAdvice.settlementNoteAdviceFind(req.swagger.params, res, next);
};

module.exports.settlementNoteAdviceGet = function settlementNoteAdviceGet (req, res, next) {
  SettlementNoteAdvice.settlementNoteAdviceGet(req.swagger.params, res, next);
};
