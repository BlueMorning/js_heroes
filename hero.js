const Hero = function (name, health, favouriteFood){
  this.name          = name;
  this.health        = health;
  this.favouriteFood = favouriteFood;
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





module.exports = Hero;
