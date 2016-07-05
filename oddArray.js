// Write a class/constructor OddArray
// which wraps around and accepts only
// odd numbers.
//
// The class should have its own add() and get()
//
// add(x) -> when x is odd, accept it, otherwise do nothing
//
// get() when provided no arguments should
// return the entire internal array
//
// get(3) should return state[3]
//
// The constructor should accept an initial array
// as an argument, and will set the internal array
// as only those numbers that are odd
//
// i.e. new OddArray([1, 2, 3, 4]) --> {state: [1, 3]}

//initial value of instructor does not return anything

function OddArray(arr){
    this.state = arr;
    this.state.filter(function(){
      if (this.state % 2 !== 0) {return true;} else {return false;}
    });
}

OddArray.prototype = {
    add: function(n){
      if (n % 2 !== 0) {return this.state;}
    },
    get: function(n){
      if (!isNaN(n)) {
        return this.state[n];
      } else {
        return this.state;}
    }
};

// testing your code from above
var odd = new OddArray([1, 2, 3, 4, 5]);
console.assert(odd.get().length, 3);
console.assert(odd.get()[0], 1);
console.assert(odd.get()[1], 3);
console.assert(odd.get()[2], 5);

odd.add(2);
console.assert(odd.get().length, 3);

odd.add(3);
console.assert(odd.get().length, 4);