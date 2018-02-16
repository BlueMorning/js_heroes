const Hero = function (name, food){

  this.name = name;
  this.food = food;
}


Hero.prototype.getName = function(){
  return this.name;
}





module.exports = Hero;
