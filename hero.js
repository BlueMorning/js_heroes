const Hero = function (name, health, favouriteFood){
  this.name             = name;
  this.health           = health;
  this.favouriteFood    = favouriteFood;
  this.taskToComplete   = [];
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

Hero.prototype.getTaskToComplete = function(){
  return this.taskToComplete;
}

Hero.prototype.getTaskToCompleteCount = function(){
  return this.taskToComplete.length;
}





module.exports = Hero;
