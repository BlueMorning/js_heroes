const assert = require("assert");
const Task   = require("../task.js");


describe("Test task", function(){

  let task;

  beforeEach("Setup", function(){
    task = new Task("Collect plastic litters in the ocean", 10, 3, "Live in Bikini city");
  })

  it("should have a description", function(){
    assert.strictEqual("Collect plastic litters in the ocean", task.getDescription());
  })

  it("should have a difficulty", function() {
    assert.strictEqual(10, task.getDifficulty());
  })

  it("should have a priority", function(){
    assert.strictEqual(3, task.getPriority());
  })

  it("should have a reward", function(){
    assert.strictEqual("Live in Bikini city", task.getReward());
  })

  it("should have be able to be marked as completed - false", function(){
    assert.strictEqual(false, task.isCompleted);
  })

  it("should have be able to be marked as completed - true", function(){
    task.setTaskAsCompleted();
    assert.strictEqual(true, task.isCompleted);
  })


})
