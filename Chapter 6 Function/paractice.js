console.log("Practice File");


/// problem 1 Write a BMI CALCULATOR function

function bmiCalculator(weight, height) {
    return weight / (height * height);

}

console.log((bmiCalculator(69, 1.8).toFixed(2)) );


// create a resuable discount calculator function HOF:

function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
        
    }
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
let fifty = discountCalculator(50);

console.log(ten(1200));
console.log(twenty(1200));
console.log(fifty(1200));


// problem 3 BUILD A COUNTER USING CLOSURE

function counter () {
    let count = 0;
    return function () {
        count++;
        return  count;
    }
}


let a = counter();
console.log(a()); //1
console.log(a()); //2
console.log(a()); //3
console.log(a()); //4

let b = counter();
console.log(b()); // 1
console.log(b()); //2


// problem 4 Create a pure function and transform a value.

function pureFunc(val){
    return val * 2;

}

console.log(pureFunc(5));


// problem 5 Use IIFE to isolate variables.

(function(){
    const password = "secret password";
    console.log("The password is: " + password);

})();

// // console.log(password); // This will throw an error because password is not defined outside the IIFE.

// console.log(password);



// chat gpt function related question .

function SayHe() {
    console.log("Hello JavaScript!")
}

SayHe();



// problem 2 Ek function addNumbers banao

// 2 parameters le (a, b)

// Dono ka sum return kare


function AddingNumber(a, b) {
    console.log(a + b);
    
}

AddingNumber(3, 5); // 8




// problem 3  Ek function square banao

// Ek number le

// Us number ka square return kare

function squareNumber (num) {
    return console.log(num * num);

}

squareNumber(4); // 16
squareNumber(5); // 25

// problem 4 
// Ek function isEven banao

// Ek number le

// Agar number even ho to true return kare

// Warna false

function isEven(num) {
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false



// pronlem 5

// Ek function findLargest banao

// 3 numbers parameters mein le

// Sab se bara number return kare

function findLarget(a, b, c) {
    if(a >= b && a >= c){
        console.log(a);
    }
    else if(b >= a && b >= c){
        console.log(b);
    }
    else{
        console.log(c);
    }

}

findLarget(3, 2, 5); // 7



// problem 6
// Ek function countVowels banao

// Ek string le

// Us mein jitne vowels hain unki count return kare
// (vowels: a, e, i, o, u)   



function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("javascript")); // 3



// problem 7    
// Ek function reverseAString banao

// Ek string le
function reverseAString(str) {
    return str.split("").reverse().join("");
   
}
console.log(reverseAString("hello")); // "olleh"
console.log(reverseAString("JavaScript")); // "tpircSavaJ"




// one more approach to reverse a string

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

reverseString("jazzcash"); // hsaczzaj
console.log(reverseString("jazzcash"));