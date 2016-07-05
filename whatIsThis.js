// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments));};

//var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',');
};

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
};

var inAFunction = function(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};

/**
 * THE PROBLEMS
 */

console.assert(whatIsThis('hello', 'world') === "[object Window],hello,world");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//the join function puts together "this" [object window], "a" (hello), and b (world} separated by commas

console.assert(window.whatIsThis('hello', 'world') === "[object Window],hello,world");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//the join function puts together "this" [object window], "a" (hello), and b (world} separated by commas
//the addition of window just indicates the console output - the result is the same with or without it

console.assert(inAnObject.test1('face', 'book') === "[object Object],face,book");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//test1 is calling whatisthis with face and book as input and combined those with "this" ([object])

//console.assert(inAnObject.anotherObject.test1('twitter', 'book') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === "[object Object],twitter,book");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//here inAnObject.anotherObject.test2 simply calls whatisthis again with "twitter" and "book" and skips .name

console.assert(whatIsThis.call() === "[object Window],,");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//there are no input variables passed into the call, so we just get the "this" output (object) and 2 commas

console.assert(whatIsThis.call(trickyTricky) === "[object Object],,");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//trickyTricky is not passing any input variables

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === "[object Object],nice,job");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//passing trickyTricky as an object, passing "nice" and "job" as the a and b input variables,

console.assert(whatIsThis.call(confusing) === "[object Object],,");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//just using confusing is not providing any input variables

console.assert(whatIsThis.call(confusing, 'hello') === "[object Object],hello,");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//only one input variable is being provided

console.assert(whatIsThis.apply(trickyTricky) === "[object Object],,");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//no input  variables provided

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === "[object Object],nice,job";
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//apply tells the function that the input variables are being provided in an array

console.assert(whatIsThis.apply(confusing, 'nice', 'job') === " ");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//this gets an error because apply does not have an array to work with

console.assert(inAFunction('what will', 'happen?') === undefined);
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//test3 is not called by inAFunction

try{
    console.assert(inAFunction.test3('A', 'B') === FILL_ME_IN)
} catch(e){
    log(e)
}
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?
//this results in an error: test3 is not called by inAFunction

var newObject = new inAFunction('what will', 'happen?');
console.assert(newObject.name === "Sally");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//this.name in inAFunction points to Sally, and newObject.name correlates to this.name

var newObject2 = new inAFunction('what will', 'happen?');
console.assert(newObject2.test3('C', 'D') === "[object Object],C,D";
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//inAFunction.prototype.test3 calls whatIsThis, and newObject2 points to InAFunction,
//so whatIsThis gets called with the arguments C and D

console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === "[object Object],face,book");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//inAnObject.test1.call calls whatIsThis with the arguments face and book; trickyTricky is identified as an object

console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === "[object Object],foo,bar");
// Once you've figured out what the output is, answer here in a comment: Why is this so?
//inAnObject.anotherObject.test2 calls whatIsThis, and apply supplies the 2 input variables from the array