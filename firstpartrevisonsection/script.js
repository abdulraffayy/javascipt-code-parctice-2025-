//  let, and const – Line-by-Line Comparison

var a = rafay;
var b = "hello";
var c = true;
var d = 45;
var e = null;

  
console.log(a);

let hamza = "this is let variable";
console.log(hamza);


console.log("Hello, World!");



// declarations and initializations


var alishah;   // decleare karna 
var alishah = "hello";  // declare or initialize karna 


// var example 

var a = 10;
var a = 20;  // re-declaration is allowed



// const example
const pi = 3.14;
console.log(pi);



// Scope (global , block, Functional




// fucntional scoped example 


function testVar() {
    var x = 1;      

}


testVar();


// gloabl scoped example

var y = 10;   // global scope


consle.log(y);



// block scoped example

    function Data (){
        let z = 5;   // block scope
    }


    console.log(z);  // error  z is not defined



// Reassignment, redeclaration

var c = 30;
c = 40;


// let d = 50
// d = 60;  // reassignment is allowed





// Temperal Dead Zone (TDZ)

console.log(rafay);  // undefined
let rafay = "hello"; 



// hositing imapact per type 

console.log(a);  // undefined

a = 10;


// paractice question


// provblem 1
console.log(nm);

var nm = "rafay";   // answer is undefined 


// problem 2

console.log(age);
let age = 25;      // answer is Uncaught ReferenceError: Cannot access 'age' before initialization



// PROBLEM 3

var x = 1 ; // gloabal

{
    var x = 2;    // gloabal and var is not respected 
}

console.log(x);    // answer is 2




// PROBLEM 4


let rr = 10;

{
    let a = 20;   // block scope
    console.log("inside:", a);   // answer is 20
}

console.log("outside:", rr);   // answer is 10