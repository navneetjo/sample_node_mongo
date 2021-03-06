var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:4000/")
      .end(function (e, res) { 
        (e === null).should.equal(true);
        res.text.should.equal("Hey buddy!");
        done();
      });
  });
});

describe("Persistence", function () {
  it("should create a thing", function (done) {
    superagent.get("http://localhost:4000/doobie")
      .end(function (e, res) {
        (e === null).should.equal(true);
        var response = res.body;
        expect(response.created).to.equal(true);
        done();
      });
  });
  it("should retrieve a thing", function (done) {
    superagent.get("http://localhost:4000/doobie")
      .end(function (e, res) {
        (e === null).should.equal(true);
        var response = res.body;
        expect(response.created).to.equal(false);
        response = response.returnObj;
        response.should.have.property("name", "doobie");
        done();
      });
  });
});
