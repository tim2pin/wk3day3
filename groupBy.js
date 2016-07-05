// write a function on the Array prototype
// called groupBy(callback) the takes a callback
// function. For each item in groupBy, callback's
// arguments will be (value, index, array).
//
// The value returned by the callback becomes the
// key for the original value in a new collection.
//
// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }
///modulo 2   result are 2 objects with multiple properties
Array.prototype.groupBy = function(callback){
  function Numbers(){}
  var oddNumbers = new Numbers();  //create  new object
  var evenNumbers = new Numvers();
  callback (array[i], i, array) {
  this.forEach(function(array[i]) { //this refers to array called on
      if (array[i] % 2 === 0){
        this.even = array[i];
      } else {}
        this.odd = array[i]
      }
  }
}

//Jim's code
Callback function:
function (v) {  //v =value
return (v%2 === 0) ? 'even' : 'odd'
}
expected output
{key: "even"  values: [2,4,6...]}
{key: "odd"   values: [1,3,5...]}

return Object.keys(groups).map(function (group)) {
  return {         //returning an object
    key: group    //key is the group: odd or even
    values: groups[group]
    }
}
////

Array.prototype.groupBy = function(callback){
  var groups = {};
  this.forEach(function (el)  //el = element: number or string

  var key = callback(el);     //pass element into callback so it becomes the value
  if (key in groups) === false) {
      group[key] = [];}
  groups[key].push(el) ;
  }


  // write a function on the Array prototype
  // called groupBy(callback) the takes a callback
  // function. For each item in groupBy, callback's
  // arguments will be (value, index, array).
  //
  // The value returned by the callback becomes the
  // key for the original value in a new collection.
  //
  // i.e.
  //
  // [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
  //      return (v%2 === 0) ? 'even' : 'odd'
  // })
  //
  // //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

  Array.prototype.groupBy = function(callback){
    // We want to divide into groups in an object
    var groups = {};

    // Loop through each of the items passed in the
    // array 'this'
    this.forEach(function(el) {

      // el is now the current item in the array

      // To get the classification for each item,
      // we need to pass it into the callback
      // and store the result as key
      var key = callback(el);

      // Now, we want to see if we already have a group
      // for this classification. If we don't, set the
      // new group to be 'odd' or 'even' and be an empty
      // array to start with
      if (key in groups === false) {
        groups[key] = [];
      }

      // Then push the current number into the group
      // that we either just created, or already existed
      groups[key].push(el);
    });

    // Now the only thing left to do is loop through
    // the groups and log out the contents of each
    // classification
    return Object.keys(groups).map(function(key) {
      return {
        key: key,
        values: groups[key]
      };
    });
  };

  var grouped = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
    return (v % 2 === 0) ? 'even' : 'odd';
  });

  console.log(grouped);