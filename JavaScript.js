// question:

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solution:

var countBits = function(n) {

if (n == 0)
  return 0
else {
   let binary = (n >>> 0).toString(2).match(/1/g).length
   return binary
 }

};

// _____________________________________________________________________________________________________________________________________________________________

// question:

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Solution:

const binaryArrayToNumber = arr => {

let binNum = arr.join("")
let dec = parseInt(binNum, 2);
return dec
  
};

// _____________________________________________________________________________________________________________________________________________________________

// question:

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// Solution:

function findShort(s){

  let array = s.split(" ")
  let arraySmallToLarge = array.sort((a, b) => a.length - b.length)
  let smallestWordLength = arraySmallToLarge[0].length
  
   return smallestWordLength

}

// _____________________________________________________________________________________________________________________________________________________________

// question:

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.


// Solution:

function GetSum(a,b) {
 
  var sum = 0;
  if(a === b) {
    return a;
  } else if(a < b){  
    for(a; a <= b; a++){
      sum += a;
    }
  } else if(b < a){
    for(b; b <= a; b++){
      sum += b;
    }  
  }
  return sum;
}
