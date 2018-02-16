const assert = require("assert");
const OrderingTaskFeature = require("../OrderingTaskFeature");


describe("OrderingTaskSens test", function(){

  let orderingTaskSens;

  beforeEach("Setup", function(){
    orderingTaskSens = new OrderingTaskFeature();
  })

  it("should have an ascending order", function(){
    assert.strictEqual("ascending", orderingTaskSens.ascending);
  });

  it("should have an descending order", function(){
    assert.strictEqual("descending", orderingTaskSens.descending);
  });

})
