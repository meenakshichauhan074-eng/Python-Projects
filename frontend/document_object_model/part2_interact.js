//Four Function 
//1.textContent
//2.innerHTML
//3.getAttribute
//4.setAttribute

var para = document.querySelector("p")
//console.log(para);

//Change only content of paragraph
var change = para.textContent = "Hi i am Busy Today";
//console.log(change);

// If i want to change or apply html tags in a text we use innerHTML
var inner = para.innerHTML = "<strong>Hi i am Busy Today</strong>";
//console.log(inner);

var special = document.querySelector("#special");
var href = special.querySelector("a");
var hr = href.getAttribute("href");
var set = href.setAttribute("href", "https://www.amazon.com")
//console.log(set)