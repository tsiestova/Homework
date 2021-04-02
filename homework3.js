// task 1 =================

const arr = [2, 3, 4, 5];
let multiElem1 = 1;

for (let i = 0; i < arr.length; i++) {
    multiElem1 *= arr[i];
}

console.log(multiElem1);


let i = 0;
let multiElem2 = 1;

while (i < arr.length) {
    multiElem2 *= arr[i];
    i++;
}

console.log(multiElem2);

// task 2 =================

for (let i = 0; i <= 15; i ++) {

    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}


// task 3 =================

function randArray(k) {
    const arr = [];
    let max = 500;
    let min = 1;
    let i = 1;

    while (i <= k) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
        i++
    }

    return arr;
}

console.log(randArray(5));

// task 4 =================

function raiseToDegree(a, b) {

    return Math.pow(a, b);

}

console.log(raiseToDegree(3, 4));


// task 5 =================

function findMin(...args) {

    return Math.min(...args);
}

console.log(findMin(12, 14, 4, -4, 0.2));


// task 6 =================

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return false;
        }
    }

    return true;

}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));


// task 7 =================

function returnElem(arr, n) {

    if (!n || n === 1) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(-n);
    }
}


console.log(returnElem([3, 4, 10, -5]));
console.log(returnElem([3, 4, 10, -5], 2));
console.log(returnElem([3, 4, 10, -5], 8));

// task 8 =================

function toUpperCase(str) {


    return str[0].toUpperCase() + str.slice(1);
}


console.log(toUpperCase('Ilove java script'));