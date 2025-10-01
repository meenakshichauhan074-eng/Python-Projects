// var tocOne = document.querySelector("#one");
// var tocTwo = document.querySelector("#two");
// var tocThree = document.querySelector("#three");
// var tocFour = document.querySelector("#four");
// var tocFive = document.querySelector("#five");
// var tocSix = document.querySelector("#six");
// var tocSeven = document.querySelector("#seven");
// var tocEight = document.querySelector("#eight");
// var tocNine = document.querySelector("#nine");

// tocOne.addEventListener("click", function () {
//     tocOne.textContent = "X";
// })

// tocTwo.addEventListener("click", function () {
//     tocTwo.textContent = "X";
// })

// tocThree.addEventListener("click", function () {
//     tocThree.textContent = "X";
// })

// tocFour.addEventListener("click", function () {
//     tocFour.textContent = "X";
// })

// tocFive.addEventListener("click", function () {
//     tocFive.textContent = "X";
// })

// tocSix.addEventListener("click", function () {
//     tocSix.textContent = "X";
// })

// tocSeven.addEventListener("click", function () {
//     tocSeven.textContent = "X";
// })

// tocEight.addEventListener("click", function () {
//     tocEight.textContent = "X";
// })

// tocNine.addEventListener("click", function () {
//     tocNine.textContent = "X";
// })

// tocOne.addEventListener("dblclick", function () {
//     tocOne.textContent = "O";
// })

// tocTwo.addEventListener("dblclick", function () {
//     tocTwo.textContent = "O";
// })

// tocThree.addEventListener("dblclick", function () {
//     tocThree.textContent = "O";
// })

// tocFour.addEventListener("dblclick", function () {
//     tocFour.textContent = "O";
// })

// tocFive.addEventListener("dblclick", function () {
//     tocFive.textContent = "O";
// })

// tocSix.addEventListener("dblclick", function () {
//     tocSix.textContent = "O";
// })

// tocSeven.addEventListener("dblclick", function () {
//     tocSeven.textContent = "O";
// })

// tocEight.addEventListener("dblclick", function () {
//     tocEight.textContent = "O";
// })

// tocNine.addEventListener("dblclick", function () {
//     tocNine.textContent = "O";
// })

var referesh = document.querySelector("#restart");
var td = document.querySelectorAll("td");

referesh.addEventListener('click', function () {
    for (var i = 0; i < td.length; i++) {
        // window.location.reload();
        td[i].textContent = "";
    }
})

function clickeve(event) {
    var cell = event.target;
    if (cell.textContent === '') {
        cell.textContent = "X";
    } else if (cell.textContent === "X") {
        cell.textContent = "O";
    } else {
        cell.textContent = '';
    }
}

td.forEach(function (cell) {
    cell.addEventListener('click', clickeve);
})



