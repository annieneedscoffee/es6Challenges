// Pass the array to the function we define below. Pass it without passing values seperately (no addTogether(arr[0], ect)). Hint - Look up "Javascript Spread".

function addTogether(x, y, z){
  return x+y+z;
}
let arr = [4, 8, 12];

console.log(addTogether(...arr));

//For all the challenges below use map/array/filter

// Go through the array below and multiply each value by 3. The result should be [15, 45, 72]

let arr2 = [5, 15, 24];

var result = arr2.map(val => val*3);

console.log(result);

// Change all the values in the array below from strings to numbers. The result should be [3, 5, 4, 19, 238]

let arr3 = [3, '5', 4, '19', '238'];

result = arr3.map(val => parseInt(val))

console.log(result);

// Remove all the values in the array below that are greater than 4. The result should be [3,2]

let arr4 = [3, 8, 5, 2];

result = arr4.filter(val => val<=4);

console.log(result);

// Remove all the strings in the array below and then multiply the remaining values by 2. The result should be [24,8]

let arr5 = [12, "hello", 4, "guys"];

result = arr5.filter(val => typeof val == 'number').map(val => val*2);

console.log(result);

// Multiply all the elements of the array below together into one number. The result should be 8.

let arr6 = [4, 2, 1]

result = arr6.reduce((total, value) => total*value)

console.log(result);

// Remove all even numbers from the array below and return a string containing all remaining elements. The result should be "Here's a even number 2 and here's another one 8"

let arr7 = ["Here's a even number ", 1, 2, " and here's another one ", 8, 9];

result = arr7.filter((val)=>{
  if(typeof val === 'number'){
    return val%2===0
  }
  return true;
}).reduce((wholeString, value) => wholeString+value);

console.log(result);

// Multiply each value in the array below by itself (square it). Then remove any numbers greater than 100. Finally add all the remaining values together. The result should be 93.

let arr8 = [2, 8, 20, 5, 284];

result = arr8.map(val => val*val).filter(val => val<100).reduce((total, val) => total + val);

console.log(result);
