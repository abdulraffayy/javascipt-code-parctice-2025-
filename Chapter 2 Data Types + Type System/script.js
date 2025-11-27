// 🧠 Chapter 2: Data Types + Type 

// primitive examples

let a = 12 // Number
let b = a;

a = a + 2;
console.log(a, b); // 12 12



// symobol 

let u1 = Symbol('uid');
let u2 = Symbol('uid');



//example:

let obj = {
    uid: 1,
    name: 'Alice',
    age: 25,
    email: "Test:@test.com"
}

let rafay =  Symbol("uid");
obj[rafay] = 1;



// bigint 

let bigNumber = 9007199254740991n;

bignnum = bigNumber + 10n; 



// reference example

let c = [1, 2, 3]; // Array

let d = c;
d.pop();


//object example

let personData = {
    name: "Bob",
    age: 30,
    city: "New York",

}

let personData2 = personData;
personData2.name = "Charlie";

console.log(personData.name); // Charlie



// Dynamic Typing

let dynamicVar = 42; // Initially a number

dynamicVar  = true



// typecoercion

"5" + 1; // "51"




// paractice question 


null +1
1
null + 1
1
 5 + "5"
'55'
!!undefined
false
true + false
1



/// end paracgtice quesiron and given the answer 


