const assert = require("assert");
const OrderTaskDirection = require("../OrderTaskDirection");


describe("OrderTaskDirection test", function(){

  let orderingTaskDirection;

  beforeEach("Setup", function(){
    orderTaskDirection = new OrderTaskDirection();
  })

  it("should have an ascending order", function(){
    assert.strictEqual("ascending", orderTaskDirection.ascending);
  });

  it("should have an descending order", function(){
    assert.strictEqual("descending", orderTaskDirection.descending);
  });

})
