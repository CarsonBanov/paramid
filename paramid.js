var async = require('async');

var Paramid = {
  midQue: [],

  use: function (midFn) {
    if(midFn && typeof midFn === 'function') {
      Paramid.midQue.push(midFn);
    }
  },

  all: function (req, res, next) {
    async.each(Paramid.midQue,
    function (midFn, cb) {
      midFn(req, res, cb)
    }
    , next);
  }
}

module.exports = Paramid;
