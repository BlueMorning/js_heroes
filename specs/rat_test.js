const assert = require("assert");
const Rat    = require("../rat.js");


describe("Rat test", function (){

  let rat;
  let food;

  beforeEach("Setup", function(){
    rat  = new Rat(6);
  })

  it("should be able to be harmful", function(){
    assert.strictEqual(6, rat.toxicity);
  })

})
