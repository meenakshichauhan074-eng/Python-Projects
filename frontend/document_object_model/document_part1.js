var url = document.URL;
//console.log(url)

var vody = document.body;
//console.log(vody)

var head = document.head;
//console.log(head)

var links = document.links;
//console.log(links);

console.log(document.getElementById("first"))

console.log(document.getElementsByClassName("myfirstUl"))

console.log(document.getElementsByTagName("p"))

console.log(document.querySelector("#first"))

console.log(document.querySelectorAll("li"))

var head = document.querySelector("h1");

head.style.color = "red"

function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeHeaderColor() {
    colorInput = randomColor()
    head.style.color = colorInput;
}

setInterval("changeHeaderColor()", 500);