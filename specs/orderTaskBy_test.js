const assert      = require("assert");
const OrderTaskBy = require("../orderTaskBy.js");


describe("orderTaskBy test", function(){

  let orderTaskBy;

  beforeEach("Setup", function(){
    orderTaskBy = new OrderTaskBy();
  })

  it("should have an orderByDifficulty", function(){
    assert.strictEqual("orderByDifficulty", orderTaskBy.orderByDifficulty);
  })

  it("should have an orderByPriority", function(){
    assert.strictEqual("orderByPriority", orderTaskBy.orderByPriority);
  })

  it("should have an orderByStatus", function(){
    assert.strictEqual("orderByStatus", orderTaskBy.orderByStatus);
  })


})
