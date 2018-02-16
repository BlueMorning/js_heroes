const assert = require('assert');
const Food   = require('../food.js');



describe("Food test", function () {

  let food;

  beforeEach("Setup", function () {
    food = new Food("Mango", 5);
  })

  it("should have a name", function(){
    assert.strictEqual("Mango", food.getName());
  })

  it("should have a replenishment value", function(){
    assert.strictEqual(5, food.getReplenishmentValue());
  })


})
