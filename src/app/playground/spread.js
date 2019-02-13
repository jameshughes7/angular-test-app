// SIMPLE EXPAND ARRAY EXAMPLE
// Without the spread operator
// It allows the elements of an array to expand

let mid = [3, 4];
let array = [1, 2, mid, 5, 6];

console.log(array);
// returns an array within an array
// returns [ 1, 2, [ 3, 4 ], 5, 6 ]

// With the spread operator
let spreadArray = [1, 2, ...mid, 5, 6];

console.log(spreadArray);
// returns [ 1, 2, 3, 4 , 5, 6 ]


// MATH EXAMPLE
console.log(Math.max());
console.log(Math.max(1, 2, 3));
console.log(Math.max(100, 3 ,4, 1000));

// Using an array as input before spread operator
let mathArray = [2, 4, 6, 8, 0];
let max = (array) => {
  return Math.max.apply(null, array);
}

console.log(max(mathArray));


// Now with the spread array
let spreadMax = Math.max(...mathArray);

console.log(spreadMax);


//COPYING AN ARRAY

// Without spread cannot simply copy an array
let originalArray = ['a', 'b', 'c'];
let copiedArray = originalArray;
console.log(copiedArray);
originalArray.push('d');
console.log(copiedArray);

// With spread it's easy!
let spreadCopiedArray = [...originalArray];
spreadCopiedArray.push('z');
console.log(originalArray);
// returns [ 'a', 'b', 'c', 'd' ]
console.log(spreadCopiedArray);
// retuns  [ 'a', 'b', 'c', 'd', 'z' ]


// STRING TO ARRAY

let string = "hello";
let characters = [...string];
console.log(characters);

// How to validateNumber
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
console.log(validateNumber(10));
