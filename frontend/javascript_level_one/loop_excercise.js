// 1. Print hello word 5 times

var word = "hello";

for (i = 0; i < 5; i++) {
    console.log(word);
}

// or

var x = 0

while (x < 5) {
    console.log("hello");
    x++;
}

//2.odd number from 1 to 25

for (i = 0; i <= 25; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// or by while loop

var x = 1
while (x <= 25) {
    if (x % 2 !== 0) {
        console.log(i);
    }
    x++;
}