// Write a JavaScript program to get a random number in the specified range

//#Source https://bit.ly/2neWfJ2 
const random_Number_In_Range = (min, max) => Math.random() * (max - min) + min;
console.log(random_Number_In_Range(2, 10)); 
console.log(random_Number_In_Range(1, 5)); 
console.log(random_Number_In_Range(-5, -2)); 
console.log(random_Number_In_Range(0, 1)); 
