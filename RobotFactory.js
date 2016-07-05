// Define a function called `Robot()`.
// Typically, we would create a new instance with `new Robot()`.
// Instead, create a "factory" that creates more `Robot`s with this call:
// ---
// Robot.new()
//
// When `Robot.new()` is called it should return a new instance with the prototype set to Robot e.g.:
// ---
// var robby = Robot.new();


function Robot(){
}
Robot.new = function(){   //factory function (return new instance of an object)
  return new Robot();
};
//future instances of var name = new Robot(); instance factory function
Robot.prototype.new = function(){
   return new Robot();
};

var robby = Robot.new();
console.log(robby.new());
var cornRobo= Robot.new();
console.log(cornRobo.new());

