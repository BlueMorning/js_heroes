const assert      = require("assert");
const OrderTaskBy = require("../orderTaskBy.js");


describe("orderTaskBy test", function(){


  beforeEach("Setup", function(){

  })

  it("should have an orderByDifficulty", function(){
    assert.strictEqual(Symbol("difficulty").toString(), OrderTaskBy.difficulty.toString());
  })

  it("should have an orderByPriority", function(){
    assert.strictEqual(Symbol("priority").toString(), OrderTaskBy.priority.toString());
  })

  it("should have an orderByStatus", function(){
    assert.strictEqual(Symbol("isCompleted").toString(), OrderTaskBy.isCompleted.toString());
  })

  it("should have an orderByDescription", function(){
    assert.strictEqual(Symbol("description").toString(), OrderTaskBy.description.toString());
  })

  it("should have an orderByReward", function(){
    assert.strictEqual(Symbol("reward").toString(), OrderTaskBy.reward.toString());
  })


})
