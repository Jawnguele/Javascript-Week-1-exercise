// // EXERCISE 1:
// // 4 - Create 5 String variables:
// let gender = "Female";
// let country = "Gabon";
// let ethnicity = "fang";
// let field = "marketing";
// let firstName = "Jawrell";

// // 5 - Create 5 int variables:
// let height = 175;
// let cohort = 31;
// let siblings = 4;
// let year = 1956;
// let grade = 80;

// // 6 - Create 5 float variables:
// let temperature = 50.5;
// let degree = 12.2;
// let quantity = 2.9;
// let kilo = 78.1;
// let weight = 120.5;

// // 7 - Create 5 Boolean Variables:
// let isMarried = true;
// let isAnEngineer = false;
// let hasChildren = false;
// let canCode = true;
// let lovesGames = true;

// // 8 - Document.write out any 10 variables of your choice
// document.write("Name: " + firstName + "<br>");
// document.write("Gender: " + gender + "<br>");
// document.write("Country: " + country + "<br>");
// document.write("Ethnicity: " + ethnicity + "<br>");
// document.write("Field: " + field + "<br>");
// document.write("Height: " + height + "<br>");
// document.write("Year: " + year + "<br>");
// document.write("Temperature: " + temperature + "<br>");
// document.write("Can Code: " + canCode + "<br>");
// document.write("Loves Games: " + lovesGames + "<br>");


// // EXERCISE 2:

// // 1 - Arithmetic operations + Console.log:
// // Division:
// let crystal = 200;
// let stock = 5;
// let division = crystal / stock;
// console.log(division);

// // Multiplication
// let balloons = 15;
// let decoLights = 2;
// let multiplication = balloons * decoLights;
// console.log(multiplication);




// ASSIGNMENT: 

// Store Shipping Eligibility:
let isPremiumMember = true;
let totalPrice = 50;
let hasCoupon = false;

if (isPremiumMember || (totalPrice >= 50 && hasCoupon)) {
  console.log("Eligible for free shipping!");
} else {
  console.log("Not eligible for free shipping.");
}

// Gym Membership eligibility
let age = 18;
let hasReferralCode = false;
let isStudent = true;

if (age >= 18 && (hasReferralCode || isStudent)) {
  console.log("Eligible for the gym");
} else {
  console.log("Not eligible for the gym");
}

// WEEK 3 - 16/08/2025
// Know how to write a function & how to call it. 
// How to reuse a function
// Know what parameters are, and how to access them in the function
// How to return a function (return statement)
// (JAVASCRIPT FUNCTION)

// function name (name,age,gen){
//   console.log ("Hello World " + "my name is " + name);
//   console.log ("I am " + "" + age + " years old");
//   console.log ("I am in gen " + "" + gen);

// }
// name("Kalvin", 12,31)
// name("Jawrell", 26, 31)
// name ("Helena", 18, 29)

// //RETURN FUNCTION USING ADDITION OPERATOR:
// function addTwoNum(num1,num2){
//   let answer = num1+num2
//   return answer
// }
// console.log(addTwoNum(20,35));

// // RETURN FUNCTION USING MULTIPLICATION OPERATOR

// function multiplyTwoNum(num1,num2){
//   let answer = num1*num2
//   return answer
// }
// console.log(multiplyTwoNum(18,7));

// // PRE-BUILT FUNCTIONS:

// // ALERT BOX: It provides information
// // alert ("Do you want to quit Js?");

// // PROMPT BOX: Allows you to input a string, boolean, float etc...

// // let age = prompt("Please enter your age:");
// // console.log(age);

// // CONFIRM BOX: It uses booleans to check that the input of the user is true or false according to the input they chose.
// // let result = confirm("Are you sure?");
// // console.log(result);

// // FUNCTION EXERCISE:

// // Create a Greeting Function
// // 1
// function greetStudent(name){
//   console.log("Hello, " + name + "! Welcome to coding class.")
// }
// greetStudent("Jawrell")

// // 2 - Task: Mini project - Calculator
// // Create 3 functions:
// // Addition:
// function addNumbers (num1,num2){
//   let answer = num1+num2
//   return answer
// }
// console.log(addNumbers(20,40))

// // substract:
// function substractNumbers(num1,num2){
//   let answer = num1-num2
//   return answer
// }
// console.log(substractNumbers(900,456));

// // Multiply:
// function multiplyNumbers (num1,num2){
//   let answer = num1*num2
//   return answer
// }
// console.log(multiplyNumbers(536,277));

// // Write a function called checkAge

// let age = prompt ("Please enter your age");
//     age = Number(age);
// if (age >= 18){
//   console.log("You can vote")
// }else { 
//   console.log("Sorry, you are too young to vote")
// }