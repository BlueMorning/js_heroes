const assert              = require('assert');
const Hero                = require('../hero.js');
const Task                = require('../task.js');
const Food                = require('../food.js');
const OrderTaskBy         = require('../OrderTaskBy.js');
const OrderTaskDirection  = require('../OrderTaskDirection.js');

  describe("Hero test", function(){

    let hero;
    let food;
    let tasks;
    let task1;
    let task2;
    let task3;
    let task4;
    let task5;

    let orderTaskBy;
    let orderTaskDirection;

    beforeEach("Setup", function(){

      favouriteFood = new Food("veggieBurger", 8);

      food          = new Food("plankton", 5);

      hero          = new Hero("SpongeBob", 20, favouriteFood);

      tasks = [];

      task1 = new Task("A", 1, 5, "A reward"); task1.isCompleted = true;
      task2 = new Task("B", 2, 4, "B reward"); task2.isCompleted = false;
      task3 = new Task("C", 3, 3, "C reward"); task3.isCompleted = true;
      task4 = new Task("D", 4, 2, "D reward"); task4.isCompleted = false;
      task5 = new Task("E", 5, 1, "E reward"); task5.isCompleted = true;

      tasks.push(task4);
      tasks.push(task3);
      tasks.push(task5);
      tasks.push(task1);
      tasks.push(task2);

      orderTaskBy           = new OrderTaskBy();
      orderTaskDirection    = new OrderTaskDirection();
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

      assert.strictEqual(favouriteFood, hero.getFavouriteFood());
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

    it("should be able to get some health points by eating food", function(){
      hero.currentHealth = 4;
      assert.strictEqual(4, hero.getCurrentHealth());
      hero.eatFood(food);
      assert.strictEqual(9, hero.getCurrentHealth());
      hero.eatFood(food);
      assert.strictEqual(14, hero.getCurrentHealth());
      hero.eatFood(food);
      assert.strictEqual(19, hero.getCurrentHealth());
      hero.eatFood(food);
      assert.strictEqual(20, hero.getCurrentHealth());
    })

    it("should be able to get extra health points by eating his favourite food", function(){
      hero.currentHealth = 4;
      assert.strictEqual(4, hero.getCurrentHealth());
      hero.eatFood(favouriteFood);
      assert.strictEqual(16, hero.getCurrentHealth());
      hero.eatFood(favouriteFood);
      assert.strictEqual(20, hero.getCurrentHealth());
    })

    it("should be able to sort tasks by ascending difficulty", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual([task1, task2, task3, task4, task5], hero.getTaskToCompleteBy(orderTaskBy.difficulty, orderTaskDirection.ascending));
    })

    it("should be able to sort tasks by descending difficulty", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual([task5, task4, task3, task2, task1], hero.getTaskToCompleteBy(orderTaskBy.difficulty, orderTaskDirection.descending));
    })

    it("should be able to sort tasks by ascending priority", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual([task5, task4, task3, task2, task1], hero.getTaskToCompleteBy(orderTaskBy.priority, orderTaskDirection.ascending));
    })

    it("should be able to sort tasks by descending priority", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual([task1, task2, task3, task4, task5], hero.getTaskToCompleteBy(orderTaskBy.priority, orderTaskDirection.descending));
    })

    it("should be able to filter tasks by status isCompleted - true", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual(3, hero.getTaskByStatusIsComplete(true).length);
    })

    it("should be able to filter tasks by status isCompleted - true", function (){
      hero.tasksToComplete = tasks;
      assert.deepStrictEqual(2, hero.getTaskByStatusIsComplete(false).length);
    })

  })
