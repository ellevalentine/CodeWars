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

// _____________________________________________________________________________________________________________________________________________________________

// question:

// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// Solution:


function nbYear(p0, percent, aug, p) { 

    per = (percent/100)
  
  for ( var n = 0; p0 < p; n++) {
    
     p0 = p0 + (p0*per) + aug }
  
      return n
  }


// _____________________________________________________________________________________________________________________________________________________________

// question:

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'


// Solution:

// using http://www.asciitable.com/

function findMissingLetter(letters) {

    str = letters.join("")
      var i, j = 0, m = 122;
      if (str) {
          i = str.charCodeAt(0);
          while (i <= m && j < str.length) {
              if (String.fromCharCode(i) !== str.charAt(j)) {
                  return String.fromCharCode(i);
              }
              i++; j++;
          }
      }
      return undefined;
  }

// _____________________________________________________________________________________________________________________________________________________________

// question:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// Solution:

function pigIt(str){
    var punctuation=[",","?","!",";",":",'"'];
    var array=str.split(" ");
    var last=array[array.length-1];
    var newArray=array.slice(0,-1)
                 .map(function(element){
                    return element.slice(1) + element[0] + "ay";
                 });
                 
    if(punctuation.indexOf(last) < 0){
       return (newArray.concat(last.slice(1)+last[0]+"ay")).join(" ");
    }else{
       return (newArray.concat(last)).join(" ");
    }
  
  }

// _____________________________________________________________________________________________________________________________________________________________

// question:


// Solution:
