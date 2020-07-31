
// node simulates javascript environment outside of javascript ____
// type in node filename.js

/*
	A student scored 
	25/50 in math, 
	30/50 in english, 
	14/50 in Physics, 
	48/50 in Chemistry
	and 50/50 in Accounting
	Calculate and print out the average.
	Also calculate and print out overall percentage.
*/
let math = 25/50;
let english = 30/50;
let physics = 14/50;
let chemistry = 48/50;
let accounting = 50/50;

average = (math + english + physics + chemistry + accounting)/5;
overall_percentage = average * 100;


console.log(average);
console.log(overall_percentage);

/*
Given 5 numbers, find and print the largest one.
*/
let num1 = -900;
let num2 = 13.3298;
let num3 = 23;
let num4 = 1.0009;
let num5 = 32;

let max_num = num1;
if (num2 > max_num) {
  max_num = num2;
  
}
if (num3 > max_num) {
  max_num = num3;
    
}

if (num4 > max_num) {
  max_num = num4;
      
}

if (num5 > max_num) {
  max_num = num5;

}

console.log(max_num);

/*
	Find and log the sign of the product of three numbers.
	Example: 
		Sample numbers : 3, -7, 2
		Output : The sign is - 
*/
let num1c = 78;
let num2c = -56;
let num3c = -900;

let product = num1c * num2c * num3c;

if (product > 0) {
  console.log('+');
}
else if (product < 0) {
  console.log('-');
}
else {
  console.log("The product is 0.");
}

/*
	Given 2 pairs of numbers, calculate and log the sum of their products.
	Example: 
		(assume the first 2 numbers are a pair and the last 2 are a pair)
		Sample numbers : 5, 10, 3, 6 
		Output : The sum of products is 68
*/

let num1d = 5;
let num2d = 10;
let num3d = 3;
let num4d = 6;

product1 = num1d * num2d;
product2 = num3d * num4d;

sum_products = product1 + product2;
console.log(sum_products);

/*
Declare two variable containing any 2 numbers.
Print out the product, division and addition of the two numbers.
Also print out True or False based on whether the two numbers are equal. 
*/

let var1 = 2;
let var2 = 5;
let n = 0;

let product1d = var1 * var2;

let addition1d = var1 + var2;
let division1d = 0;

if (var2 != 0) {
    let division1d = var1/var2;
}
else {
    let division1d = "Can't divide by 0. "
}



console.log(product1d);
console.log(division1d);
console.log(addition1d);


if (var1 == var2) {
    console.log("True");

}

else {
    console.log("False");
}
