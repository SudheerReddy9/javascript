// Define an array named 'fruits' 
let fruits = ['Banana', 'Apple', 'Berries'];
// Output the initial contents of the 'fruits' array
console.log(fruits); // Output: ['Banana', 'Apple', 'Berries']

// Reassign the 'fruits' variable with a new array that contains all the elements of the original 'fruits' array
// as well as two additional elements: 'Grapes' and 'Orange'. This is done using the spread operator (...) to
// spread the elements of the original array into the new array along with the new elements.
fruits = [...fruits, 'Grapes', 'Orange'];

// Output the updated contents of the 'fruits' array after adding 'Grapes' and 'Orange'
console.log(fruits); // Output: ['Banana', 'Apple', 'Berries', 'Grapes', 'Orange']
