"use strict";
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i], "is even");
    }
    else {
        console.log(array[i], "is odd");
    }
}
