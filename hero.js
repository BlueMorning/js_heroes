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
  if(this.favouriteFood.getName() === food.getName()) {
    this.replenishmentValue = food.getReplenishmentValue() * 1.5 ;
  }
  else {
    this.replenishmentValue = food.getReplenishmentValue()
  }

  // The hero's health can exeed the initial health points level : this.health
  this.currentHealth = Math.min(this.health, this.currentHealth+this.replenishmentValue);
}

Hero.prototype.getTaskToCompleteBy = function(orderBy, direction){
  let orderTaskBy           = new OrderTaskBy();
  let orderTaskDirection    = new OrderTaskDirection();
  let orderbyFunction;

  if(orderBy === orderTaskBy.difficulty){
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
  else if(orderBy === orderTaskBy.priority){
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


  return this.tasksToComplete.sort(orderbyFunction);
}


module.exports = Hero;
