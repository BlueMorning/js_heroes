const Food = function(name, replenishmentValue ){
  this.name               = name;
  this.replenishmentValue = replenishmentValue;
  this.revitalization     = replenishmentValue;
  this.toxicity           = 0;


}

Food.prototype.getName = function(){
  return this.name;
}

Food.prototype.getReplenishmentValue = function(){
  return this.replenishmentValue;
}

Food.prototype.becomePoisonous = function(toxicity){
  this.toxicity           = toxicity;
  this.revitalization     = this.replenishmentValue - this.toxicity;
}


module.exports = Food;
