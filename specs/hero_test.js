const assert = require('assert');
const Hero   = require('../hero.js');
const Task   = require('../task.js');
const Food   = require('../food.js');

  describe("Hero test", function(){

    let hero;
    let food;

    beforeEach("Setup", function(){
      food = new Food("plankton", 5);
      hero = new Hero("SpongeBob", 20, food);
    })


    it("should have a name", function(){
      assert.strictEqual("SpongeBob", hero.getName());
    })

    it("should have a health points counter", function(){
        assert.strictEqual(20, hero.getHealth());
    })

    it("should have a current health points counter", function(){
      assert.strictEqual(20, hero.getCurrentHealth());
    })

    it("should have a favourite food", function(){

      assert.strictEqual(food, hero.getFavouriteFood());
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

    it("should be able to remove a task", function(){
      let tasks = [];
      tasks.push(new Task("Teach Maths", 9, 9, "thankfulness"));
      tasks.push(new Task("Teach English", 7, 5, "thankfulness"));
      hero.addTask(tasks[0]);
      hero.addTask(tasks[1]);
      assert.deepEqual(tasks, hero.getTasksToComplete())
      hero.removeTask(tasks[1]);
      assert.deepEqual(tasks, hero.getTasksToComplete())
    })

  })
