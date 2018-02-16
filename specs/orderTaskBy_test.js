const assert      = require("assert");
const OrderTaskBy = require("../orderTaskBy.js");


describe("orderTaskBy test", function(){

  let orderTaskBy;

  beforeEach("Setup", function(){
    orderTaskBy = new OrderTaskBy();
  })

  it("should have an orderByDifficulty", function(){
    assert.strictEqual("difficulty", orderTaskBy.difficulty);
  })

  it("should have an orderByPriority", function(){
    assert.strictEqual("priority", orderTaskBy.priority);
  })

  it("should have an orderByStatus", function(){
    assert.strictEqual("isCompleted", orderTaskBy.isCompleted);
  })

  it("should have an orderByDescription", function(){
    assert.strictEqual("description", orderTaskBy.description);
  })


})
