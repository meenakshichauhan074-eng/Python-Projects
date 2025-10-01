function hello() {
    alert("Hello user!!!")
}

function helloYou(name) {
    alert("Hello " + name);
}

function addNum(num1, num2) {
    alert(num1 + num2)
}

function helloSomeone(name = "Franklin") {
    alert("Hello, " + name);
}

function getName(name = "Sam", title = "Sir") {
    return title + " " + name;
}

function timesFive(NumInput) {
    //variable scope is within the function
    var num = NumInput * 5;
    return num;
}

//Global scope 
var v = "GLobal V"
var stuff = "Global stuff"
function fun(stuff) {
    console.log(v);
    stuff = "This is inside scope";
    console.log(stuff);
}

fun();
console.log(stuff);

