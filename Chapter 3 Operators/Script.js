console.log("Operators in JavaScript");

// Arithmetic Operators
let a = 10;
let b = 5;


let c = a + b; // Addition
console.log("Addition: " + c); 


let d = "harsh"
let e = 5;

let f = d + " " + e;  // String Concatenation and Addition
console.log("String Concatenation: " + f);


// SUBSTRACTION

let l = 20;
let m = 5;
let n = l - m; // Subtraction
console.log("Subtraction: " + n);

// Divided

let p = 20;
let q = 4;

let r = p / q; // Division
console.log("Division: " + r);

// Multiplication

let x = 6;
let y = 7;

let z = x * y; // Multiplication
console.log("Multiplication: " + z);


// Modulus

let u = 17;
let v = 5;

let w = u % v; // Modulus
console.log("Modulus: " + w); // answer is 2 because 5*3=15 and 17-15=2


// Exponentiation

let base = 3;
let exponent = 4;

let result = base ** exponent; // Exponentiation
console.log("Exponentiation: " + result); // 3^4 = 3*3*3*3 = 81


// Comparision Operators

// = example

let rafay  = 10;
let harry = 10; 


// exmaple of ==

console.log("Equality (==): " + (12 == 123
)); // false


// problem of ==

console.log("Equality (==) with type coercion: " + (12 == "12")); // true


// example of ===

console.log("Strict Equality (===): " + (12 === "12")); // false



// example of !=
console.log("Inequality (!=): " + (15 != 20)); // true


// example of !==
console.log("Strict Inequality (!==): " + (15 !== "15")); // true


// example of >

console.log("Greater Than (>): " + (25 > 20)); // true

// example of <

console.log("Less Than (<): " + (15 < 10)); // false

// example of <

console.log("Less Than or Equal To (<=): " + (10 <= 10)); // true



// assignment

// example of =

let g = 30;
g += 3 ;
g -= 4;
g *= 2;
g /= 2;
g %= 5; 

console.log("Assignment (=): " + g); // 4




// exmaple of Logical Operators 
// ||
// &&
// !

// example of &&
true && true // true
true && false // false
false && false // false


// example of ||
true || true // true
true || false // true
false || false // false

12> 5 || 15>20 // true



// Unary Operators
// types 
// ++
// --
// + (plus)
// - (minus)
// typeof
// !



// example of ++

let h = 5;
h++;
console.log("Increment (h++): " + h); // 6


// example of --

let i = 10;
i--;
console.log("Decrement (i--): " + i); // 9


// ternary operator

// simple condition ? value if true : value if false


// exmaple of ternary operator

12>13 ? console.log("12 IS greater") : console.log("13 is greater");



// paractice problems

// problem 1
let data = 10;
let pipe = 20;


if ( data > 5 && pipe > 25) {
    console.log("B");
} else {
    console.log("A");
}


// problem 2

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// problem 3 SOLUTION

let temp = 35;

if(!(temp > 30)) {
    console.log("It's a hot day");
} else {
    console.log("It's a cool day");
}


// problem 4

let hamza = 0;

if (hamza) {
    console.log("Truthy");
}else {
    console.log("Falsy");
}

// problem 5

let score = 78;

let grade = score >= 90 ? 'A' :
            score >= 75 ? 'B' :
            score >= 60 ? 'C' :
            'Fails';
console.log("Grade: " + grade); 



// problem 6
let scoped = 25;

let grad = scoped >= 90 ? 'A' :
            scoped >= 75 ? 'B' :
            scoped >= 60 ? 'C' :
            'Fails';
console.log("Grade: " + grad); 


// problem 7

let points = 120;


let status = points >= 100 ? 'Gold' :
             points >= 50 ? 'Silver' :
             'Bronze';
console.log("Status: " + status);


// problem 8

let age = 40;


let youngest = age >= 20 ? 'young man' :
             age >= 50 ? 'Silver' :
             'Bronze';
console.log("Status: " + youngest);


// problem 9


let LoggedIn = true;
let HashToken = false;

let Acess  = LoggedIn && HashToken ? 'Acess Granted' : 'Acess Denied';
console.log("Acess: " + Acess);


// problem 10

let number = 5;

number++;
console.log("Number after increment: " + number);


// problem 11

let bromo = 10;
++bromo; // unary plus operator to convert to number
console.log("Bromo after unary plus: " + bromo);


// problem 12

let value = 3;
let doubleValue = value++;
console.log("Double Value: " + doubleValue,  value); // 3


// problem 13

let o = 4;
let s = ++o;
console.log(o, s) 


// problem 14

let t = 10;
console.log(t--); // number
console.log(t); // 9


// problem 15

let  india = 5;
let china = india++ + ++india;
console.log("China: " + china); // 12


// problem 16

let like = 100;

function updateLike() {
    return ++like;
}

console.log("Updated Like: " + updateLike()); // 101
console.log("Updated Like: " + like); // 101


// problem 17

let Count = 5;

if(Count-- === 5) {
    console.log("Match");
} else {
    console.log("Not Match");
} // Match

