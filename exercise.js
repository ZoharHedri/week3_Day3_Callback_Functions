
// PARTNER EXERCISE 1
/*
Draw a diagram of the result of the following code:
*/
// var boom = function (){
//     console.log("boom!"); //not working- i didn't know why
//     alert("boom"); //good! working
//   };
  
// var bang = function (){
//     console.log("bang!"); //not working- i didn't know why
//     alert("bang"); //good! working
// };
  
// var doubleWham = function (sound1, sound2){
//     sound1();
//     sound2();
// };
  
// doubleWham(boom, bang);


// PARTNER EXERICSE 2
/*
Write a function "pushPull" that takes one argument and calls it as a function.
*/
// var push = function (){
//     console.log("pushing it!");  //not working- i didn't know why
// 	alert("push"); //good! working
// };
  
// var pull = function (){
//     console.log("pulling it!");  //not working- i didn't know why
// 	alert("pull"); //good! working
// };

// function pushPull(func){
//     func();
// }
  
// pushPull(push);
// pushPull(pull);


// PARTNER EXERCISE 3
/*
You can get the current date/time in Javascript by writing: "var time = new Date()"".
Create a function called "getTime" that takes one parameter and calls it as a function.
*/
// var time = new Date();

// var returnTime = function (time){
//   alert('The current time is: ' + time);
// };

// function getTime (TimeFunc,t){
// 	TimeFunc(t);
// };

// getTime(returnTime,time);


//PARTNER EXERCISE 4
/*
Copy/paste the following code in your dev console.
What error do you get?
Write the missing functions to make the code work:
*/


// var alertData = function (dataAlert){
//     alert(dataAlert);
// };

// var logData = function(dataLog){
//     console.log(dataLog);
// };

// var displayData = function (alertDataFunc, logDataFunc, data) {
  
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alertData, logData, "I like to party");

// PARTNER EXERCISE 5
//Change the following code to use an "anonymous function":

//The original code:
var saySomething = function () {
  alert("I'm saying stuff!");
};
setTimeout(saySomething, 1000);

//With anonymous function:
setTimeout (function(){
    alert("I'm saying stuff!");
}, 1000);