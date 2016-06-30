
// JS has variadic functions.
//
// Write a sum() function that
// returns the sum of all parameters

// function sum(v){
//   v.reduce(function(a,b){
//     return a + b;
//   });

    
// }


function sum(){
var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

  args.reduce(function(a,b){
    args = a + b;
     return args;
  });

    return args;
}

// test
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(-10, -5, 1, 2) === -12)

// BONUS:
// What's the difference between the following?
sum(1, 2, 3)
sum.call(null, 1, 2, 3)
sum.apply(null, [1, 2, 3])

var sum123 = sum.bind(null, 1, 2, 3)
sum123()
