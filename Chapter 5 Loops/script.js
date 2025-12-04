// loop

// 1 - 100

for(let i = 1; i<101; i++){
    console.log(i);
}

// while loop

let rafay = 1;
while(rafay < 33){
console.log(rafay);
rafay++
}


// do while loop
let a = 12;
do{
    console.log(a);
    a++;
}
while(a<2);


// break and continue

let hamza = 1;

for(let hamza = 1; hamza < 201; hamza++){
    console.log(hamza);
    if(hamza === 50){
        break;
    }
}

// continue

let p = 9;

for(let p = 9; p < 21; p++){
    if(p === 15){
        continue;
    }
    console.log(p);
}



// paractice question 1 

// print numbers from 1 to 10

let num  = 1;

for(let num = 1; num < 11; num++){
    console.log(num);
}

// 2 print numbers from 10 to 1

let number = 10;

while(number > 0){
    console.log(number);
    number--;
}


// 3 print even numbers from 1 to 20

let evennum = 1;

for(let evennum = 1; evennum < 21; evennum++){
    if(evennum % 2 === 0){
        console.log(evennum);
    }
}



// 4 print odd numbers from 1 to 15


let odddnumber = 1;

while(odddnumber < 16){
    if(odddnumber % 3 == 0){
        console.log(odddnumber);
    }
    odddnumber++;
}


// problem  5 print table of 5
for(let mutliplicayNimber = 5; mutliplicayNimber < 55; mutliplicayNimber += 5){
    console.log(mutliplicayNimber);
}


// find the sum of a numbeers 1 to 100 using a loop:

let sum = 0;
for(let sumNumber = 1; sumNumber < 101; sumNumber++){
    sum = sum + sumNumber;
  
}

  console.log(sum);

// // 7 find all numbers divisible by 3 between 1 to 50

for(let divideby = 1; divideby <51; divideby++){
    if(divideby % 3 === 0){
        console.log(divideby);
    }
}


// // ASK the user for a number and print wether each number from 1 to that number is even or odd


 let value = prompt("Enter a number:");

for(oddnumber = 1; oddnumber<=value; oddnumber++){
   if(odddnumber % 2 === 0){
    console.log(`${oddnumber} is even number`);
   }
   else {
    console.log(`${oddnumber} is odd number`);
   }

}


//  Count how many number between 1 to 100 divisible by 3 and 5 


for(let countnumber = 1; countnumber < 101; countnumber++){
    if(countnumber % 3 === 0 && countnumber % 5 === 0){
        console.log(countnumber);
    }
}

90


// stop at first number divisible by 7 between 1 to 100 . print each number. .Stop compltely when found the first number divisible by 7

for(let firstnumber = 1; firstnumber < 101; firstnumber++){
     console.log(firstnumber);
    if(firstnumber % 7 === 0){
        break;
       
    
    }
     

}


// 11 skip Multiples of 3 write a loop from 1 to 20 that: .skip numbers divisible by 3 .print all other numbers
// use continue number 
// expected output : 1,2,4,5,7,8,10,11 ... (no 3,6,9 ...)

for(let skipnumber = 1; skipnumber < 21; skipnumber++){
   if(skipnumber % 3 === 0) continue;
   console.log(skipnumber);

}

// Print First 5 odd numbers onluu 
// write a loop from 1 to 100 that:
//. print only 5 odd number 
// then stop the loop using break statement
// use both if, continue and a counter + break 

//expected output : 1,3,5,7,9

let count = 0;
for(let firstoddnumber = 1; firstoddnumber < 101; firstoddnumber++){
    if(firstoddnumber % 2 === 1) {
        
        console.log(firstoddnumber);
        count++;
        if(count === 5) {
            break;
        }
    }
 
}

// gpt paractice question 

// 1 Print numbers from 5 to 15 using a for loop.


for (let num = 5; num < 16; num++){
    if(num % 5 === 0){
        console.log(num);
    }
}

// 2 Print the numbeers 50 to 40 in decreamenting order using a while loop.

let dec = 50;
while(dec >= 40){
    console.log(dec);
    dec--;
}


// print the square of numbers 1 to 10
// example: 1 1 , 2, 4, 3,9

for (let i = 1; i < 11; i++) {
  console.log(i + " → " + (i * i));
}


// print a message Exampple: "Hello JavaScript!" 5 times using a For loop.


for(let msg = 1; msg < 6; msg++){
    console.log("Hello JavaScript!");
}


// Print this pattern using a loop:

1
22
333
4444
for(let i = 1; i< 21; i++){
    let line = "";
    for(let j = 1; j <= i; j++){
        line += "1";
    }

console.log(line);

}

// print sum of all even number from 1 to 20 

let sumdata = 0
for(sumEven = 1; sumEven < 21; sumEven++){
    if(sumEven % 2 === 0){
        sumdata += sumEven;
    }
    console.log(sumdata);
    
}

// sum of alll odd numbers 1 to 30;

let sumodd = 0;

for(letoddnum = 1; letoddnum < 31; letoddnum++){
    if(letoddnum % 2 === 1){
        sumodd += letoddnum;
    }
}
console.log(sumodd);