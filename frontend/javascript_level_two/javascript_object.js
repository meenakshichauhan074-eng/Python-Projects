var carModel = { model: "Toyota", year: 2015, price: 10 }
//carModel["year"] = 2016
carModel["year"] += 1
//console.log(carModel)
//console.log(carModel["model"])
//console.log(dir(carModel));

var myObj = { a: "hello", b: [1, 2, 3], c: { inside: [1, 2, 3, 4] } }
// console.log(myObj['a'])
// console.log(myObj['b'][1])
// console.log(myObj["c"]["inside"][2])

// Object Iteration
for (key in carModel) {
    //console.log(key); // For getting a key of an object
    //console.log(carModel[key]); // For getting a value of an object
}

// object method
var simple = {
    prop: "Hello",
    mymethod: function () {
        console.log("the mymethod was called")
    }
}

//console.log(simple.mymethod())

var myObj1 = {
    name: "Ram", myobj: function () {
        console.log("Hello " + this.name)
    }
}

console.log(myObj1)
console.log(myObj1.myobj())


