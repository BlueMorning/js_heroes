const assert = require("assert");
const OrderingTaskFeature = require("../OrderingTaskFeature");


describe("OrderingTaskFeature test", function(){

  let orderingTaskFeature;

  beforeEach("Setup", function(){
    orderingTaskFeature = new OrderingTaskFeature();
  })

  it("should have an ascending order", function(){
    assert.strictEqual("ascending", orderingTaskFeature.ascending);
  });

  it("should have an descending order", function(){
    assert.strictEqual("descending", orderingTaskFeature.descending);
  });

})
