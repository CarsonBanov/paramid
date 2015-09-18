var assert = require("assert");
var paramid = require("../paramid");

describe('paramid', function() {

  beforeEach(function() {
    paramid.midQue = [];
  });

  describe('use', function() {

    it('should not push empty inputs', function () {
      paramid.use(null);
      paramid.use(undefined);
      paramid.use("undefined");
      assert.equal(0, paramid.midQue.length);
    });

    it('should use functions', function () {
      paramid.use(function(){});
      assert.equal(1, paramid.midQue.length);
    });
  });

  describe('all', function() {
    it('should run all functions in midQue', function (done) {
      var req = {};
      var res = {};

      paramid.use(function(req, res, next) {
        req.test1 = "test1";
        res.test1 = "test1";
        next();
      });
      paramid.use(function(req, res, next) {
        req.test2 = "test2";
        res.test2 = "test2";
        next();
      });

      assert.equal(2, paramid.midQue.length);

      paramid.all(req, res, function() {
        assert.equal("test1", req.test1);
        assert.equal("test1", res.test1);
        assert.equal("test2", req.test2);
        assert.equal("test2", res.test2);
        done()
      });
    });
  });
});
