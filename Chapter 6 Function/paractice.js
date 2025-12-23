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

// console.log(password); // This will throw an error because password is not defined outside the IIFE.

console.log(password);
