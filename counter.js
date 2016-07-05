// You're going to implement a simple counter class. 
// The counter will start at zero, and every time its `incr` 
// method is called, it will increase by 1.
//
// There's one caveat: Your counter must act like a 
// number and support arithmetic operations and 
// comparisons.





function Counter(){  
    this.count = 0; //sets count to 0
}

Counter.prototype.incr = function(){
return this.count++; // increase count by one when incr is callled
};

Counter.prototype.toString = function(){  
  return this.count;
};


var c = new Counter(); // declares new instance of counter object




// You're going to implement a simple counter class. 
// The counter will start at zero, and every time its `incr` 
// method is called, it will increase by 1.
//
// There's one caveat: Your counter must act like a 
// number and support arithmetic operations and 
// comparisons.





function Counter(){  
    this.count = 0; //sets count to 0
}

Counter.prototype.incr = function(){
return this.count++; // increase count by one when incr is callled
};

Counter.prototype.toString = function(){  
  return this.count;
};


var c = new Counter(); // declares new instance of counter object




// c.incr(); // counter is now at 1
// console.log(c);
// c.incr(); // counter now at 2
// console.log(c);

c.incr(); // counter is now at 1
console.assert(c+1, 2);
console.assert(c > 1 === false);
console.assert(c > 0);
console.assert(c == 1);
Math.sqrt(c); // 1
