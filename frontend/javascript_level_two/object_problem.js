var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31
}

//Problem 1
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    namelenght: function () {
        console.log(this.name.length);
    }
}

//console.log(employee.namelenght())

//Problem 2

for (employees in employee) {
    alert(employees + " is " + employee[employees])
}

//Problem 3
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function () {
        var lastname = this.name.split(" ")[1]
        console.log(lastname)
    }
}

console.log(employee.lastName());