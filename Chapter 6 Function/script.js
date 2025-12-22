/// function
hositingExample(); 
// haider(); // error
function dance () {
    console.log("I am dancing!");
}

dance();
dance();    

// example of function with parameters  

let rafay = function (danceStyle) {
    console.log("I am dancing " + danceStyle);
}
rafay("Hip Hop");
rafay("Bhangra");

// function declaration and function statment 


function sing () {
    // funciton declaration
}


// function expression
let sing2 = function () {
    // function expression
}

// Fat Arrow Function

let sing3 = () => {
    console.log("La la la la");
}

// fat arrow function creaated

() =>{

}

// parameter and arguments

// example:

function dancing(v1) {
    console.log(`${v1} nacach rha hai1`)
}

dancing("Ghoda");
dancing("cheetah");
dancing("ELEPHANT");
dancing("cheel");
dancing("lakharbagah");


// one more example of Funcion and arguments

function add(v2, v3) {
    console.log(v2 + v3);
}

add(5, 10);


// one more exmple of funciton with argumnents.

function Multiplay(rafay, alishah) {
    console.log(rafay * alishah);
}
Multiplay(10, 60);


// one more example of funtion arguments and parameters

let shah = (hamza, janziab) => {   // round braket main parameter 
    console.log(hamza / janziab);
}

shah(1000, 500);  // function call main arguments is main ham log value pass kartay hain.




// Default, rest and Spread Parameter:

function something(shahziab, javeria) {
    console.log(shahziab, javeria);
}

something();


// one more example of default parameter

function somedates(raja, rafay) {
    console.log(raja + rafay);
}
somedates(); // undedefined + undefined = NaN


// one more example of default parameter

function somedates2(raja = 5, rafay = 10) {
    console.log(raja + rafay);
}
somedates2(); // 15


// rest and spread operator 

//example of rest operator and spread operator

function myFunc (...args) {
    console.log(args);
}

myFunc(1,2,4,5,6,7,8,9,90,123);


// Return value and early return

function ahmed(w) {
    return 12 * 9;
}


let value = ahmed(23);
console.log(value);



// first class function 

function abh(val) {

val();
}
abh(function() {
console.log("This is first class function");
});



// high oder function

function hof (val){

}

hof(function () {

})



// one more example of high order function

function raja () {
return function() {
    console.log("This is high order function");     
}
}

raja()();



// pure vs impure function



let hareem = 12;


function raju1 (){
    console.log("SDHJDSBJHBVSDJKV");
}


function hui() {
    hareem++
    console.log(hareem);

}

raju1();  // pure function
hui();    // impure function



// closeure function

function outer() {
    let a = 12
    return function inner() {
        console.log(a);
    }
}



// lexical scoping


function ghi () {
    let b  = 2;
    function jkl() {
    let c = 3;
    }
    function mno() {
        let d = 4;
    }
    function pqr() {
        let e = 5;
    }

}


// iIFE (Immediately Invoked Function Expression)

(function() {
console.log("This is IIFE function");
})();




// hositing 

 let haider = function hositingExample() {
    console.log("This is hositing example");
    
}

function hositingExample () {
    console.log("This is hositing example");
}


// PARACITICE PROBLEMS


// problem 1: Whats the d/f b/t funciton declaration and function expression?

// solution 1 
// alishah223(); // function declaration can be called before its defination
// alisha();    // function expression cannot be called before its defination
// function alishah223() {
//     console.log("Function Declaration");
// }


// let alisha = function () {
//     console.log("Function Expression");
// }

// problem 2
//solution 2
greet(); // function declaration is hoisted

function greet() {
    console.log("Hello!");
}


// problem 3 convert this function into arrow funciton function mutliply(a, b) {
//     return a * b;
// }

//solution 3

let mutltiply = (a, b) => a * b;
console.log(mutltiply(5, 10)); // 50


// problem 4 Identitfy parameter and arguments in the below function function welcome(name) {
// console.log(name)
// }
// welcome("Harsh");

// solution 4
function welcome(name) {  // name is parameter
    console.log(name)
}
welcome("Harsh");  // "Harsh" is argument


// problem 5 How many parameter does this function have and how many arguments are passed? function    demo (a, b, c) {} demo(1, 2);

// solution 5

// This function has 3 parameters (a, b, c) and 2 arguments (1, 2) are passed first we can store the a varible 2 and then b value 2 and c is bydefault undefined.


// problem 6 What will be the output of the below funciton function sayHi(name = "Guest") {
// console.log("Hi", name)}
// sayHi();

// solution 6
// The output will be "Hi Guest" because the default parameter value "Guest" is used when no argument is passed to the function.


function sayHi(name = "Guest") {
    console.log("Hi", name)
}   

sayHi();

// problem 7 What does the ... operator in parameter
// solution 7

function kilikili(...args) {
    console.log(args);
}

kilikili(1,2,3,4,5); // spread operator example


// problem 8 use rest parameter to accept any number of score and return the total.

function getScore(...scores) {
    let total = 0;
    scores.forEach(function(val){
        total = total + val;

    })
    return total;
}

console.log(getScore(10, 12, 14, 18 )); // 54


// problem 9 early return in function

// function checkAge(age) {   
//     if (age < 18) {
//         return "TOO YOUNG";
//     }
//     else {
//         return "OLD ENOUGH";
//     }

// }

// solution 9
function checkAge(age) {   
    if (age < 18) return "TOO YOUNG";
    return "OLD ENOUGH";
   

}

console.log(checkAge(20)); // OLD ENOUGH
console.log(checkAge(15)); // TOO YOUNG


// problem 10 What will be the function returned function f(){
//     return;
//}

// solution 10

function f(){
    return;
}

console.log(f()); // undefined because no value is returned


// problem 11 what does it means when we say functions are first class citizens in javascript?

// solution 11
// In JavaScript, functions are first-class citizens means that functions are treated as first-class objects. This means that functions can be assigned to variables, passed as arguments to other functions, returned from other functions, and have properties and methods just like other objects.


// problem 12 Can you assign a function to a variable and then call it Show how?
// solution 12

let myioFunc = function() {
    console.log("Function assigned to a variable");
}
myioFunc(); // calling the function

// problem 13 Pass a function into another function and execute it inside.

// solution 13

function outerFunction(innerFunc) {
    innerFunc();
}
outerFunction(function() {
    console.log("Function passed as an argument");
});


// problem 14 What is high oder funciton?

function highOrderExample(val) {
    console.log(val);

}
highOrderExample(function() {

})

// solution 14
// A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Higher-order functions allow for more abstract and flexible code, enabling functional programming techniques such as callbacks, function composition, and currying.
    

// Problem 15 [1, 2, 3].map(function (x) {
//     return x * 2;
// });

// solution 15
// This code is higher-order function example. The map() method is a higher-order function that takes a callback function as an argument. The callback function is applied to each element of the array [1, 2, 3], multiplying each element by 2. The result will be a new array [2, 4, 6].


// problem 16:

// let total = 0;
// function addToTotal(amount) {
//     total += amount;
// }


//solution 16
// The function addToTotal is impure because it modifies the external variable total. A pure function would not have any side effects and would return a new value based on its input without modifying any external state.


/// problem 17 Convert the above function into a pure function.

// solution 17'

let total = 0;
function addToTotal(num) {
    let newtotal = total;
    newtotal += num;
    return newtotal;
}

addToTotal();

// problem 18 What is closure in javascript?

// solution 18
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. Closures allow functions to retain access to their lexical scope, enabling data encapsulation and the creation of private variables.


function abcderf () {
    let val = 0;
    return function () {
        console.log(val);
    }
}