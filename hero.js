const OrderTaskBy           = require("./OrderTaskBy.js");
const OrderTaskDirection    = require("./OrderTaskDirection.js");

const Hero = function (name, health, favouriteFood){
  this.name             = name;
  this.health           = health;
  this.currentHealth    = health;
  this.favouriteFood    = favouriteFood;
  this.tasksToComplete  = [];
}


Hero.prototype.getName = function(){
  return this.name;
}

Hero.prototype.getHealth = function(){
  return this.health;
}

Hero.prototype.getCurrentHealth = function(){
  return this.currentHealth;
}

Hero.prototype.getFavouriteFood = function(){
  return this.favouriteFood;
}

Hero.prototype.talk = function(){
  return `Hi, my name is ${this.name}`;
}

Hero.prototype.getTasksToComplete = function(){
  return this.tasksToComplete;
}

Hero.prototype.getTasksToCompleteCount = function(){
  return this.tasksToComplete.length;
}

Hero.prototype.addTask = function(task){
  this.tasksToComplete.push(task);
}

Hero.prototype.removeTask = function(task){
  let indexToremove = this.tasksToComplete.indexOf(task);
  if(indexToremove >= 0){
    this.tasksToComplete.splice(indexToremove, 0);
  }
}

Hero.prototype.eatFood = function(food) {

  let revitalization;
  if(this.favouriteFood.getName() === food.getName() && food.toxicity === 0) {
    revitalization = food.revitalization * 1.5 ;
  }
  else {
    revitalization = food.revitalization;
  }

  // The hero's health can exeed the initial health points level : this.health
  this.currentHealth = Math.min(this.health, this.currentHealth + revitalization);
}

Hero.prototype.getTaskToCompleteBy = function(orderBy, direction){
  let orderTaskDirection    = new OrderTaskDirection();
  let orderbyFunction;

  if(orderBy === OrderTaskBy.difficulty){
    if(direction === orderTaskDirection.ascending){
      orderbyFunction = function(taskA, taskB){
        return taskA.difficulty - taskB.difficulty;
      }
    }
    else {
      orderbyFunction = function(taskA, taskB){
        return taskB.difficulty - taskA.difficulty;
      }
    }
  }
  else if(orderBy === OrderTaskBy.priority){
    if(direction === orderTaskDirection.ascending){
      orderbyFunction = function(taskA, taskB){
        return taskA.priority - taskB.priority;
      }
    }
    else {
      orderbyFunction = function(taskA, taskB){
        return taskB.priority - taskA.priority;
      }
    }
  }
  else if(orderBy === OrderTaskBy.description || orderBy === OrderTaskBy.reward){

    if(direction === orderTaskDirection.ascending){
      orderbyFunction = function(taskA, taskB){
        let stringA = orderBy === OrderTaskBy.description ? taskA.description : taskA.reward;
        let stringB = orderBy === OrderTaskBy.description ? taskB.description : taskB.reward;

        if (stringA < stringB) {
          return -1;
        }
        else if (stringA > stringB) {
          return 1;
        }
        else {
          return 0
        }
      }
    }
    else{
      orderbyFunction = function(taskA, taskB){
        let stringA = orderBy === OrderTaskBy.description ? taskA.description : taskA.reward;
        let stringB = orderBy === OrderTaskBy.description ? taskB.description : taskB.reward;

        if (stringA < stringB) {
          return 1;
        }
        else if (stringA > stringB) {
          return -1;
        }
        else {
          return 0
        }
      }
    }
  }

  return this.tasksToComplete.sort(orderbyFunction);
}


Hero.prototype.getTaskByStatusIsComplete = function (isCompleted) {
  return this.tasksToComplete.filter(function(task){
    return task.isCompleted === isCompleted;
  });
}




module.exports = Hero;
