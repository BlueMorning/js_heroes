const Hero = function (name, favouriteFood){
  this.name          = name;
  this.favouriteFood = favouriteFood;
}


Hero.prototype.getName = function(){
  return this.name;
}

Hero.prototype.getFavouriteFood = function(){
  return this.favouriteFood;
}





module.exports = Hero;
