const assert = require('assert');
const Hero   = require('../hero.js');
const Task   = require('../task.js');


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
      assert.deepEqual([], hero.getTasksToComplete());
    })

    it("should be able to count how many tasks to complete the hero has", function(){
      assert.deepEqual(0, hero.getTasksToCompleteCount());
    })

    it("should be able to add a task", function(){
      let tasks = [];
      tasks.push(new Task("Teach Maths", 9, 9, "thankfulness"));
      tasks.push(new Task("Teach English", 7, 5, "thankfulness"));
      hero.addTask(tasks[0]);
      hero.addTask(tasks[1]);
      assert.deepEqual(tasks, hero.getTasksToComplete())
    })



  })
