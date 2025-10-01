var firstName = prompt("Enter Your First Name?");
var lastName = prompt("Enter your Last Name");
var age = prompt("Enter your Age?");
var height = prompt("Enter Your height?")
var petName = prompt("Enter Your Pet Name");

alert("thankyou for the info");

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]) {
    nameCond = true;
} else {
    nameCond = false;
}

if (age > 20 && age < 30) {
    ageCond = true;
} else {
    ageCond = false;
}

if (height >= 170) {
    heightCond = true;
} else {
    heightCond = false;
}

if (petName[petName.length - 1] === "y") {
    petCond = true;
} else {
    petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome spy");
} else {
    console.log("sorry wrong info");
}


