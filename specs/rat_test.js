const assert = require("assert");
const Rat    = require("../rat.js");


describe("Rat test", function (){

  let rat;

  beforeEach("Setup", function(){
    rat = new Rat(5);
  })

  it("should be able to be harmful", function(){
    assert.strictEqual(5, rat.toxicity);
  })


})
