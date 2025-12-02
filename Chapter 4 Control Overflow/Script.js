// if, else, else if statements


// switch case statements

switch (3) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("This is case 3");
        break;
    default: 
}


// early return pattern

function getVal(val) {
    if(val < 25) return "D";
    else if(val < 50) return "C";
    else if(val < 75) return "B";
    else return "A";
}

console.log(getVal(76));


// paractice quesiton


// problem 1 :
function GetGradeValue(score) {
    if(score >= 90 && score <= 100) return "A";     
    if(score >= 80 && score <= 90) return "A";
    if(score >= 70 && score <= 79) return "B";
    if(score >= 60 && score <= 69) return "C";
    if(score >= 33 && score <= 59) return "D";
    if(score >= 0 && score <= 32)   return "E";
    else return "Invalid Score";
}


console.log(GetGradeValue(54));


// problem 2 : rock paper scissors game

function rps(user, computer) {
   if(user === computer) return "draw";
   if(user === "rock" && computer === "scissors") return "user wins";
   if(user === "paper" && computer === "rock") return "user wins";
   if(user === "scissors" && computer === "paper") return "user wins";
   return "computer wins";
  
    
}

console.log(rps("rock", "paper"));


// problem three
let month = (4);
if(month ===12 || month ===1 || month ===2) {
    console.log("Winter");
}
else if(month >=3 && month <=5) {
    console.log("Spring");
}

else if(month >=6 && month <=8) {
    console.log("Summer");
}

else if(month >=9 && month <=11) {
    console.log("Autumn");
}
else {
    console.log("Invalid month number");
}

console.log(month)


// problem four Switch case
let months = 9;


switch (months) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month number");
}

console.log(months)


