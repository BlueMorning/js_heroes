const Task = function(description, difficultyLevel, priority, reward){
  this.description     = description;
  this.difficultyLevel = difficultyLevel;
  this.priority        = priority;
  this.reward          = reward;
}


Task.prototype.getDescription = function(){
  return this.description;
}

module.exports = Task;
