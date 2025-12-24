console.log("Practice file for Arrays");


// create acess
let marks  = [34, 23, 24, 93, 73, 25];


// modify arrays

let arr = [1, 2, 3, 4, 5, 7, 8];
arr[2] = 45;  // modify 3rd element
console.log([arr]);



// push method 

let arr1  = [1, 2, 3, 4, 5];
arr1.push(7000);
console.log(arr1);

// Pop method

let arr2 = [5, 10, 15, 20, 25];
arr2.pop();
console.log(arr2); // 5, 10, 15, 20

// shift method
let arr3 = [11, 22, 33, 44, 55];
arr3.shift();
console.log(arr3); // 22, 33, 44, 55

// unshift method
let arr4 = [100, 200, 300, 400];
arr4.unshift(50);
console.log(arr4); // 50, 100, 200, 300, 400



// splice method

let arr5 = [1, 2, 3, 4, 5, 6];
arr5.splice(2,2); // from index 2, remove 2 elements
console.log(arr5); // 1, 2, 5, 6


// slice method

let arr6 = [10, 20, 30, 40, 50, 60];
let newarr6 = arr6.slice(0, 3);
console.log(newarr6); // 10, 20, 30

// reverse method

let arr7 = [1, 2, 3, 4, 5];
arr7.reverse();
console.log(arr7); // 5, 4, 3, 2, 1


// sort method

let arr8 = [40, 100, 1, 5, 25, 10];
arr8.sort(function(a, b) {
    return a-b;
});
console.log(arr8); // 1, 5, 10, 25, 40, 100


// for each loop

let arr9 = [10, 20, 30, 40, 50];
arr9.forEach(function(val) {
    console.log(val);   
})


// map method

let arr10 = [1, 2, 3, 4, 5];


 let answer = arr.map(function(val){
    return 12;
})

console.log(answer); // [12, 12, 12, 12, 12]



// map method

let arr11 = [50, 60, 80, 90, 1];


 let answer1 = arr11.map(function(ham){
    if(ham > 60 ) {
        return ham;
    }
})

console.log(answer1); // [undefined,undefined, 80, 90, undefined]


// filter method

let arr12 = [15, 25, 35, 45, 55, 65];
 let newarr = arr12.filter(function(val){
    if(val > 40) return true;
})

console.log(newarr); // [45, 55, 65]


// reduce method

let arr13 = [5, 10, 15, 20];
let ddd = arr13.reduce(function(accumulator, val) {
    return accumulator + val;

}, 0)

console.log(ddd); // 50


// find method

let arr14 = [{id: 1, key: 1}, {id: 2, key: 2}, {id: 1, key: 3}, {id: 4, key: 4}, {id: 5, key: 1}];

 let va = arr14.find(function(val) {
    return val.key === 1;
})

console.log(va); //{id: 1, key: 1}


// Some method:
let arr15 = [10, 20, 36, 90];
let javeria = arr15.some(function(val) {
    return val > 80;
}) // true  
console.log(javeria);


// Every method:
let arr16 = [13, 24, 36, 48];

 let laiza = arr16.every(function(val) {
    return val > 12;
}) // true
console.log(laiza);



// destrucuing and spread operator with arrays

let myarr = [1, 2, 3, 4, 5, 6];
let [a, b, , d] = myarr;
console.log(a); // 1
console.log(b); // 2
console.log(d); // 4

// spread operator

let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let arr18 = [...arr17]; // copying arr17 to arr18
console.log(arr18);



// paractice question

// Q.1 Create an array with 3 fruits and print the second fruit.

let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // banana

// Q.2 Add "mango" at the end and "pineapple" at the start of the array.

let fruits1 = ["apple", "banana", "grapes"];
fruits1.push("mango");
fruits1.unshift("pineapple");
console.log(fruits1); // pineapple, apple, banana, grapes, mango


// Q.3 Replace "banana" with "kiwi" in the array above.

let fruits3 = ["Apple", "Banana"];
fruits3.pop();
fruits3.push("Kiwi");
console.log(fruits3); // Apple, Kiwi



// Q.4 Whats the deference between push() and unshift()?

// push() adds elements to the end of the array, while unshift() adds elements to the beginning of the array.




// Q.5 Remove the last item from this array using a method.

let fruits4 = ["apple", "banana", "mango", "orange"];
fruits4.pop();
console.log(fruits4); // apple, banana, mango


// Q.6 Insert "red" and "Blue" at index 1 in this array.


let colors = ["green", "yellow", "black"];
colors.splice(1, 0, "red", "blue");
console.log(colors); // green, red, blue, yellow, black


// Q.7 Extract only the middle 3 elements from this array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let middleNumbers = numbers.slice(3, 6);
console.log(middleNumbers); // 4, 5, 6


// Q.8 Reverse the array [1, 2, 3, 4, 5].

let arr19 = [1, 2, 3, 4, 5];
arr19.reverse();
console.log(arr19); // 5, 4, 3, 2, 1


// Q.9 Sort this array alphabetically ['Zara', 'Anjum', 'Mira', 'Bhavya']. and then in reverse order.

let names = ['Zara', 'Anjum', 'Mira', 'Bhavya'];
names.sort().reverse();
console.log(names); // Zara, Mira, Bhavya, Anjum


// Q.10 use .map() to square each element in the array [1, 2, 3, 4, 5].

let nums = [1, 2, 3, 4, 5];
let squareNum = nums.map(function(val) {
    return val * val;
})
console.log(squareNum); // 1, 4, 9, 16, 25



// Q.11 use .filter() to get all elements greater than 10 from the array [5, 12, 8, 20, 3, 15].

let arr20 = [5, 12, 8, 20, 3, 15];
let filterArr = arr20.filter(function(val) {
    return val > 10;
})
console.log(filterArr); // 12, 20, 15


// Q.12 use .reduce() to find the sum of all elements in the array [1, 2, 3, 4, 5].


let arr21 = [1, 2, 3, 4, 5];
let Sumarr = arr21.reduce(function(accumulator, val) {
    return accumulator + val;
}, 0)
console.log(Sumarr); // 15

// Q.13 use .find() to locate the first element number less than 10 in the array [1, 5, 7, 9, 10, 15, 20].

let arr22 = [ 5, 7, 9, 10, 15, 20];
let findNum = arr22.find(function(val){
    return val < 10;
})
console.log(findNum); // 5

// Q.14 use .some() to check if any student below scored 35 in the array [20, 25,  55, 30, 25, 70].


let scores = [20, 25, 55, 30, 25, 70];
let hasfailed = scores.some(function(val){
    return val < 30;

})
console.log(hasfailed); // true


// Q.15 use.every to check if all numbers are even in the array [2, 4, 6, 8, 10].


let evenNumbers = [2, 4, 5, 6, 8, 10];
let allEven  = evenNumbers.every(function(val)
{
    return val % 2 === 0;
})

console.log(allEven); // true


// Q.16 Use destructuring to extract the first and last name from the array [10, 20, 30, 40, 50].

let arr23 = [10, 20, 30, 40, 50];
let [first, , , , last] = arr23;
console.log(first); // 10
console.log(last); // 50


/// Q.17 Use the spread operator to combine two arrays [1, 2, 3] and [4, 5, 6] into a single array.


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combineedArrray = [...array1, ...array2]
console.log(combineedArrray); // 1, 2, 3, 4, 5, 6



// Q.19 Merge the two arrays ['a', 'b', 'c'] and ['d', 'e', 'f'] and ['l', 'm', 'n'] and ["p", "q"] using the spread operator.

let arrA = ['a', 'b', 'c'];
let arrB = ['d', 'e', 'f'];
let arrC = ['l', 'm', 'n'];
let arrD = ['p', 'q'];
let MergedArray = [...arrA, ...arrB, ...arrC, ...arrD];
console.log(MergedArray); // a, b, c, d, e, f, l, m, n, p, q



// Q.20 Add "India"  to the start of this array using Spread operator ['USA', 'UK', 'Canada', 'Australia'].

let countries = ['USA', 'UK', 'Canada', 'Australia'];
let newCountries = ['India', ...countries];
console.log(newCountries); // India, USA, UK, Canada, Australia



// Q.20 Add "Pakistan"  to the end of this array using Spread operator ['USA', 'UK', 'Canada', 'Australia'].

let countries1 = ['USA', 'UK', 'Canada', 'Australia'];
let newCountries1 = [...countries1, 'Pakistan'];
console.log(newCountries1); // USA, UK, Canada, Australia, Pakistan



// Q.21 Clone this Array properly not by reference 


let originalArray = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray];
console.log(clonedArray); // 1, 2, 3, 4, 5