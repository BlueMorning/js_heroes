const assert = require('assert');
const Hero   = require('../hero.js');



  describe("Hero test", function(){

    let hero;

    beforeEach("Setup", function(){
      hero = new Hero("SpongeBob", 20, "plankton");
    })


    it("should have a name", function(){
      assert.strictEqual("SpongeBob", hero.getName());
    })

    it("should have a health points counter", function(){
        assert.strictEqual(20, hero.getHealth());
    })

    it("should have a favourite food", function(){
      assert.strictEqual("plankton", hero.getFavouriteFood());
    })

  })
