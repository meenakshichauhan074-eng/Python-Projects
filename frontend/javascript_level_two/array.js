var country = ["USA", "India", "China", "France"]
country[2] = "Germany" //change value of array index 2
//alert(country)

// Mutible(What can be changed)
country[2] = "spain"
//alert(country)

// inmutible(Strings are inmutible which can't be changed)
country1 = "USA"
country1[2] = "B"
//alert(country1);

//Array can take mixed data type
var mixed = [true, 10, 10.5, "String"]
//alert(mixed)
//alert(mixed.length)

//Array functions
var myArr = ["One", "Two", "Three"]
var lastitem = myArr.pop()
//alert(lastitem)
//alert(myArr)

myArr.push("new_item")
//alert(myArr)

//get last item in an array
//alert(myArr[myArr.length - 1])

//nested array
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//alert(matrix.length)

//Array iteration
var letter = ["A", "B", "C"]
for (var i = 0; i <= letter.length; i++) {
    //console.log(letter[i]);
}

for (arr of letter) {
    //console.log(arr)
}

//letter.forEach(alert)

function awesome(name) {
    console.log(name + " is awesome")
}

var topics = ["django", "python", "php"]

topics.forEach(awesome)
