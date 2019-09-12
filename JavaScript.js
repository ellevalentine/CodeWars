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

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Solution:

function validParentheses(parens){
    
    var length = parens.length / 2;
    
    for (var i = 0; i <= length; ++i) {
      parens = parens.replace('()', '');
    }
    
    return parens == '';
  
  }

  // we take the total length and half it since thats how many pairs of () we should have if true.
  // then we remove from the middle outwards () and replace it with nothing - then by the end of the loop if the parens order was true then '' will be empty

// _____________________________________________________________________________________________________________________________________________________________

// question:

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Solution:

function comp(a1, a2){
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
  }

// firtly to check that the arrays are not empty or falsy and that the two arrays match in length
// then if arrays are true and matching => to sq a1 and sort and also sort a2 - convert both to strings - in which now both strings should be identical if true

// _____________________________________________________________________________________________________________________________________________________________

// question:


// Solution:

// _____________________________________________________________________________________________________________________________________________________________

// question:


// Solution:

// _____________________________________________________________________________________________________________________________________________________________

// question:


// Solution:

// _____________________________________________________________________________________________________________________________________________________________

// question:


// Solution:
