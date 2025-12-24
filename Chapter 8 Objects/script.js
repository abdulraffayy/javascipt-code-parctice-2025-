console.log("Chapter 8 Objects - script.js loaded");

let obj = {
    name: "Sample Object",
    value: 42,
    khana: "daal Chawal"
}
console.log(obj.name)


// one more thing that we can acess on objects

let obj1  = {
    name: "Another Object",
    value: 100,
    khana: "roti sabzi"
}

console.log(obj1['khana']);
console.log(obj1['value']);
console.log(obj1['name']);


 // convert name in obj

let object = {
    name: "Harry",
    age: 10,
    khana: "biryani"
}

let aa = "name";
console.log(object[aa]);

// key value pair and Structures

let obj2 = {
    "name": "Rohan",  /// key value pair
    "age": 15,  /// key value pair 
    "khana": "pizza"
} 


console.log(obj2);


// nesting and deep acess:

let obj3 = {
    name: "Harshita",
    address: {
        city: "BHOPAL",
        Pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4
        },
    },
};

console.log(obj3.address.location.lng)


// object destructuring


let obj4 = {
    name: "Rafay",
    address: {
        city: "B17",
        Pin: 4200,
        location: {
            lat: 21.2,
            lng: 71.4
        },
    },
};

let {lat, lng} = obj4.address.location;

console.log(lat);
console.log(lng);



// looping 

// for -in
let obj5 = {
    name: "alishah",
    age: 26,
    email: "test@email.com",

}

for(let key in obj5) {
    console.log(key, obj5[key]); // name: alishah age:26 email:test@gmail.com
}

// object.keys:
let obj6 = {
    name: "zohaib",
    age: 30,
    email: "zohaib@gmail.com",
}

console.log(Object.keys(obj6))


// object .entries

let obj7 = {
    name: "Ayesha",
    age: 22,
    email: "ayesha@gmail.com",
}

console.log(Object.entries(obj7)) // [ [ 'name', 'Ayesha' ], [ 'age', 22 ], [ 'email', 'ayesha@gmail.com' ] ]



// Spread operator in objects COPY OBJECT
let obj8 = {
    name: "Sana",
    age: 28,
    email: "rafyai@gmail.com"

}

let obj9 = {...obj8}
console.log(obj9)



// object.assign() COPY OBJECT

let obj10 = {
    name: "Ahmed",
    age: 35,
    email: "Ahmed@gmail.com"
}

let obj11 = Object.assign({price: Infinity}, obj10) // {} means to create a new object and object name from which we want to copy
console.log(obj11)
// { price: Infinity, name: 'Ahmed', age: 35, email: 'Ahmed@gmail.com' }



// deep clone 
let obj12 = {
    name: "Zainab",
    age: 29,
    email: "zainab@gmail.com",
    address: {
        city: "Lahore",
        pin: 54000
    }
}

obj12.address.city = "Karachi"
let obj13 = JSON.parse(JSON.stringify(obj12))
console.log(obj13)



// Optional Chaining

let obj14 = {
    name: "Bilal",
    age: 32,
    email: "Bilal:@gmail.com",
    addresses: {
        city: "Islamabad",
        pin: 44000
    }
}

console.log(obj14?.address?.city) // Islamabad




// computing property names
let roles = "admin"

let obj15 = {
    name: "rafayazadkhan",
    age: 24,
    email: "test@test.com",
    address: {
        city: "bhpopal"
    },
    [roles]: "harshita"
}  

console.log(obj15)



// paractice section 


//Q.1 create an object for student with name, age, and isEnrolled

let student = {
    name: "Ali",
    age: 20,
    isEnrolled: true
}

console.log(student);


//Q,2 can an object key be  a number or boolean? try this


let obj16 = {
    1: "one",
    true: "yes",
    false: "no"
}

console.log(obj16[1]);  // one
console.log(obj16[true]); // yes
console.log(obj16[false]); // no

// Q.3 Acess the value of "firstname" from this object.

let Names = {
    firstname: "Rafay",
    Lastname: "Azad"
}

console.log(Names.firstname)




// given  a dynamic key let key = "age" , how will you acess user[key]

let key = "age"
let AcessKey = {
    name: "SHah",
    lastname: "shahziab",
    age: 26
}

console.log(AcessKey[key])


// from the object below and print the latitude below

let obj90 = {
    name: "Bilal",
    age: 32,
    email: "Bilal:@gmail.com",
    addresses: {
        city: "Islamabad",
        pin: 44000,
        
    }, 
    cordinates: {
        Lat: 23.2,
        lng: 77.4
    }
}

console.log(obj90.cordinates.Lat)


// destructure the city and lat form the location object aboove 

let obj91 = {
    name: "Bilal",
    age: 32,
    email: "Bilal:@gmail.com",
    locations: {
        city: "Islamabad",
        pin: 44000,
        
    }, 
    cordinates: {
        Lat: 23.2,
        lng: 77.4
    }
}

let { city } = obj91.locations;
let { Lat } = obj91.cordinates;


// destructure the key "First-name" as a variable called firstName

// let destructure = {
//     "first-name": "HARSH",
// };

// // Correctly alias the hyphenated key to `firstName`
// let { "first-name": firstName } = destructure;

// console.log(firstName); // HARSH


// Q.8 use for in loop to log all keys in this object:

const DeveloperCourses = {
    title: "JavaScript",
    duration: "4 weeks",
}

for (const key in DeveloperCourses) {
   console.log(key)
}


// Q.9 user Object.entries() to print all key-value pairs as:

let allData = {
    name: "Abdul Rafay Azad",
    age: 20,
    skills: "python"
}

let infra = Object.entries(allData)
infra.forEach(function(val) {
    console.log(val[0] + ":" + val[1])
});


// Q.10 Copy this object using spread operator 


const original = {a: 1, b: 2}

const copy = {...original}



// Q.11 Deep clone Obj877 safely

const obj877 = {
    info: {
        score: 80
    }
}

let NewObj = JSON.parse(JSON.stringify(obj877))
NewObj.info.score = 100

console.log(NewObj) // 100
console.log(obj877) // 80


// Q.12 Rewrite this safely using optional chaining:
// const Person = {}
// console.log(Person.profile.name); 


 const Person = {}
 console.log(Person?.profile?.name); 


 // Q.13 Use a variable to dynamically assign a property
// const key = "role"

let dynamic = 
{
    name: "rafay",
    [key]: "admin"
}