// Save this file as exit.js
// -----------------------------------------------------------------------------------------------------------

// 1. Create an array with numbers 1, 2, 3 and assign it to a variable called 'myArray' //

// ANSWER //

var myArray = [1, 2, 3];
// -----------------------------------------------------------------------------------------------------------

// 2. Using the array you just created, step through this function,
// tell me what it does and give it a one-word name:

function whatFunctionAmI(array) {
  return _.map(array, function(e, i, a) {
      return collection[a.length - (i + 1)];
  });
}
var result = whatFunctionAmI(myArray); // result === what?

// ANSWER //
//[2, 1, 0]
//it returns the array in reverse. A one-word name could be reverse


// -----------------------------------------------------------------------------------------------------------

// 3. What does this function do? What could we do with it to get the most use out of it? //

function greatThan2(value) {
  return value > 2;
}

console.log(greatThan2(5));

// ANSWER //

//(Justify this being a function)

//This function measures if the parameter 'value' of the function greatThan2 is greater than the number 2.
//We could assign it to a variable so it can be reused and that way we DRO (don't repeat...ourselves, jk DRY)

// -----------------------------------------------------------------------------------------------------------

// 4. Given the above function and the 'myArray' array you made earlier, name
// the two higher-order functions that are in use to produce the following results:

var result = myHigherOrderFunction(myArray, greatThan2); // (result === false) [some and every return booleans]
var result = myHigherOtherOrderFunction(myArray, greatThan2); // (result === [3])

// ANSWER //


function answerIsThree(myArray, greatThan2) {
  var newArray = [];
  filter (myArray, fn(value, position, collection) {
    if(greatThan2(value, position, collection)) {
      newArray.push(value, position, collection)
    }
  });
  return newArray;
}
// -----------------------------------------------------------------------------------------------------------

/*
 * 5. jQuery:
 * assign to a variable a jQuery created <div>
 * give it an id (use a method),
 * give it a class (use a method),
 * give it the text 'Hello World',
 * and attach it to the body tag
 * YOU MUST use the correct jQuery API
*/

// ANSWER //

let aDiv = $('<div>') 
    .attr('id', 'myID')
    .addClass('myClass')
    .text('Hello World')
    .appendTo('body');
        


// -----------------------------------------------------------------------------------------------------------

// 6. Imagining you had a CSS file, create a CSS selector that would target the
// div you just created and give it a background color of white:

// ANSWER //

#myID {
    
    background-color: white;
}

// CSS FILE //

// -----------------------------------------------------------------------------------------------------------