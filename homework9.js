// ******************************* task 1****************************

let arr = ["Tom", "Sam", "Ray", "Bob"];

let [x, y, , ...z] = arr;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ******************************* task 2 ****************************

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let {names: [, name2, , name4], ages: [, age2, , age4]} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// ******************************* task 3 ****************************

// function mul(...rest) {
//
//     let result = 1;
//     let count = 0;
//
//     for (let i = 0; i < rest.length; i++) {
//         if (rest[i] === Number(rest[i])) {
//             result *= rest[i];
//             count += 1;
//         }
//     }
//     if(count === 0) {
//         return 0;
//     }
//
//     return result;
// }

function mul(...rest) {

    return rest.reduce((acc, value) => acc * (isNaN(value) ? 1 : value), 1);
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// ******************************* task 4 ****************************

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return ((callback) => {
            this.result = callback();
        })
    }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// ******************************* task 5 ****************************

const newMap = new Map();
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

    for(let i = 0; i < keys.length; i ++) {
        newMap.set(keys[i], values[i]);
    }

console.log(newMap);
console.log(newMap.size);
console.log(newMap.get(2));









