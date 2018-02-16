const Task = function(description, difficulty, priority, reward){
  this.description     = description;
  this.difficulty      = difficulty;
  this.priority        = priority;
  this.reward          = reward;
  this.isCompleted     = false;
}


Task.prototype.getDescription = function(){
  return this.description;
}

Task.prototype.getDifficulty = function(){
  return this.difficulty;
}

Task.prototype.getPriority = function(){
  return this.priority;
}

Task.prototype.getReward = function(){
  return this.reward;
}

Task.prototype.setTaskAsCompleted = function(){
  this.isCompleted = true;
}


module.exports = Task;
