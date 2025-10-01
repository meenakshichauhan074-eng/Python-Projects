var roaster = []

function addArr(name) {
    roaster.push(name);
    displayaction()
}

function display() {
    console.log(roaster)
    displayaction()
}

function removeArr(name) {
    var removename = name
    var index = roaster.indexOf(removename);
    roaster.splice(index, 1);
    displayaction()
}

function action() {
    var ask = prompt("Do you want to execute roaster? Enter Y/N");
    if (ask == "Y") {
        displayaction()
    } else {
        console.log("Thanks for reaching!!!");
    }
}

action()

function displayaction() {
    var action = prompt("Enter what action do you want add,remove,display");
    if (action == "add") {
        var name = prompt("Enter name of person");
        addArr(name);
    } else if (action == "display") {
        display();
    } else if (action == "remove") {
        var name = prompt("Enter name of person to remove");
        removeArr(name)
    } else {
        console.log("Thanking for your action");
    }
}