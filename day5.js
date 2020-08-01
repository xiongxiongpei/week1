/*
	Loop over numbers 1 to 100 (inclusive) and only print numbers that are odd.
	Do not copy over the code from the continue statement example.
*/

for (i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

/*
	Given an array, print out all its members using the 
		1. for loop, 
		2. for in loop, 
		3. for of loop,
		4. while loop.
*/

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}
for (let number in numArray) {
    console.log(number);
}

//for of loop?

let k = 0;
while (k < numArray.length) {
    console.log(numArray[k]);
    k++;
}




/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    
    else {
        console.log(i);
    }
}


/*
	Extend FizzBuzz and make it reusable for any range of numbers by using a function.
	Example: 
	fizzBuzz(0, 100) --> outputs the same as above
	fizzBuzz(12, 1901) --> Also works and outputs correctly.
*/

function FizzBuzz(number1, number2) {
    for (i == number1; i <= number2; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        
        else {
            console.log(i);
        }
    }
FizzBuzz(12, 1901);
    

}


