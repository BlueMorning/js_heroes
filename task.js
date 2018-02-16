const Task = function(description, difficultyLevel, priority, reward){
  this.description     = description;
  this.difficultyLevel = difficultyLevel;
  this.priority        = priority;
  this.reward          = reward;
  this.isCompleted     = false;
}


Task.prototype.getDescription = function(){
  return this.description;
}

Task.prototype.getDifficultyLevel = function(){
  return this.difficultyLevel;
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
