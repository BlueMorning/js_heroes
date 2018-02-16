const assert = require('assert');
const Food   = require('../food.js');
const Rat    = require('../rat.js');


describe("Food test", function () {

  let food;
  let rat;

  beforeEach("Setup", function () {
    food = new Food("Mango", 5);
    rat  = new Rat(6);
  })

  it("should have a name", function(){
    assert.strictEqual("Mango", food.getName());
  })

  it("should have a replenishment value", function(){
    assert.strictEqual(5, food.getReplenishmentValue());
  })

  it("should be able to become poisonous once a rat touches it", function(){
    assert.strictEqual(0, food.toxicity);
    food.becomePoisonous(rat.toxicity);
    assert.strictEqual(6, food.toxicity);
    assert.strictEqual(-1, food.revitalization);
  })


})
