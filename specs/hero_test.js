const assert = require('assert');
const Hero   = require('../hero.js');



  describe("Hero test", function(){

    let hero;

    beforeEach("Setup", function(){
      hero = new Hero("SpongeBob", "plankton");
    })


    it("should have a name", function(){
      assert.strictEqual("SpongeBob", hero.getName());
    })

    it("should have a favourite food", function(){
      assert.strictEqual("plankton", hero.getFavouriteFood());
    })

  })
