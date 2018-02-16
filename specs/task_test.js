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

  it("should have a difficulty level", function() {
    assert.strictEqual(10, task.getDifficultyLevel());
  })

  it("should have a priority", function(){
    assert.strictEqual(3, task.getPriority());
  })


})
