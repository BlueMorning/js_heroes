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

    it("should be able to talk", function(){
      assert.strictEqual("Hi, my name is SpongeBob", hero.talk())
    })

    it("should have an array of task to complete", function(){
      assert.deepEqual([], hero.getTaskToComplete());
    })

    it("should be able to count how many tasks to complete the hero has", function(){
      assert.deepEqual(0, hero.getTaskToCompleteCount());
    })

  })
