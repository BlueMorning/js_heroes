const Hero = function (name, health, favouriteFood){
  this.name             = name;
  this.health           = health;
  this.favouriteFood    = favouriteFood;
  this.tasksToComplete  = [];
}


Hero.prototype.getName = function(){
  return this.name;
}

Hero.prototype.getHealth = function(){
  return this.health;
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



module.exports = Hero;
