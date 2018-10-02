// Remember to realx and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// NOTE: you are accountable for your styling, so make sure your styling is good.
//ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}


//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using one of the helpers functions(reduce,each,map,filter)
//wordLengths("hello its me") // [5,3,2]

function wordLengths(str){
    // TODO: your code here 
}


//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Using reduce, write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured:
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

function countOccurrences(string, character) {
    // TODO: your code here 
}


//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using one of the helpers functions(reduce,each,map,filter)


function wordsLongerThanThree(str) {
    // TODO: your code here 
}


//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
 // TODO: your code here 
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//Depending on data modeling concept that you have learned:
//Write a factory function favoriteFood which accepts two parameters a name and favoriteFood.
//Write a function sayFavoriteFood which takes an object with a name and favoriteFood property. 
//The function will return a string stating the person’s name and favorite food.
//var person = favoriteFood("Kyle", "bananas");
//sayFavoriteFood(person); ==> "Kyle's favorite food is bananas"

function favoriteFood(name, favoriteFood) {
  // TODO: your code here
  
}

function sayFavoriteFood(object){
  // TODO: your code here
  
}


//=============================================================================
/*                                  Q6                                      */
//=============================================================================
//lets create a Circle class using OOP concept,
 // we need to create the circles (lets create only one for now), 
 //the invocation should take the radius of the circle. 
  // var circle1 = Circle(70);

  //Create a function increaseRadius that multiplies circle radius by n value.
  //Create a function circleArea to compute the area of the circle.
  //Create a function  circlePerimeter to compute the perimeter of the circle.
  //Create two circles  from Circle function and save them in one array called circles!
  //Write function displayCircles that take circles array as an input and 
  //the output should display all the circle's information(Radius, Area, and Perimeter of a circle).

  //  Write your code here
  

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//lets make an multiplier function using closures.
//The  multiplier  function takes a single parameter,
//and returns an anonymous function that takes a single parameter
//and returns the product  x of y.
// var multiplier1 = multiplier(2);
// multiplier1(3); ==> 6

function multiplier(x) {
  // TODO: your code here 
}


//=============================================================================
/*                                  Q8                                       */
//=============================================================================

//Write a function indexesOnly which takes an array,
//and replaces each element with their corresponding index values.
//indexesOnly(["a", "b", "c", 10, true]) ==>  [0,1,2,3,4]
//Note: Your function should not create a new array, 
//but replace the values of the original input array.
//ANOTHER NOTE : solve this question using while loop. 

function indexesOnly (array) {
  // TODO: your code here 
}








