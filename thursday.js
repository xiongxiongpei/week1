/*
Build two objects for 2 students, assign them names and grades for some subject.
Print the name of the student that has a higher grade in a certain subject.
*/
let gradeStudent1 = {
    name: "swiper",
      spanish: 100,
      english: 42,
      math: 90.0,
  
  }
  
  let gradeStudent2 = {
      name: "Dora",
      spanish: 10,
      english: 90,
      math: 92.4,
  
  }
  
  
  math_swiper = gradeStudent1.math;
  math_dora = gradeStudent2.math;
  
  if (math_swiper > math_dora) {
      console.log(gradeStudent1.name);
  }
  
  else if (math_swiper == math_dora) {
      console.log("Both students have the same grade.");
  }
  
  else {
      console.log(gradeStudent2.name);
  }
  
  /*
  Write a program that prints the first n elements of an array.
  */
  
  let myArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
  let n = 5;
  for (i = 0; i < n; i++) {
      console.log(myArray[i]);

  }
//check if while statement has the correct syntax

  /*
  Let’s try 5 array operations.
  
  Create an array styles with items “Jazz” and “Blues”.
  Append (add) “Rock-n-Roll” to the end.
  Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
  Strip off the first value of the array and show it.
  Prepend Rap and Reggae to the array.
  Console.log every step of the way
  */
let music = ["Jazz", "Blues"];
console.log(music);
music.push("Rock-n-Roll");
console.log(music);
let m = music.length;
let middle = (m-1)/2;
music[middle] = "Classics"; 
console.log(music);
music.shift();
console.log(music);
music.unshift("Rap", "Reggae");
console.log(music);


  /*
  Write the code, one line for each action:
  
  Create an empty object user.
  Add the property name with the value John.
  Add the property surname with the value Smith.
  Change the value of the name to Pete.
  Remove the property name from the object. (This one is a bit tricky and you will need to look it up).
  Console log every step of the way.
  */

  let user = {}
  user['name'] = "John";
  console.log(user);
  user["surname"] = "Smith";
  console.log(user);
  user['name'] = "Pete";
  console.log(user);
  delete user.name;
  console.log(user);


