const Food = function(name, replenishmentValue ){
  this.name               = name;
  this.replenishmentValue = replenishmentValue;


}

Food.prototype.getName = function(){
  return this.name;
}

Food.prototype.getReplenishmentValue = function(){
  return this.replenishmentValue;
}


module.exports = Food;
