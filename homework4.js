// task 1

function calcRectangleArea(width, height) {

    if (typeof(width) !== 'number' || typeof(height) !== 'number') {
        throw new Error('not a number');
    }

    if (width < 1 || height < 1) {
        throw new Error('too low');
    }

    return width * height;

}

try {
    console.log(calcRectangleArea('2', 0));
    console.log(calcRectangleArea(-2, 3));
    console.log(calcRectangleArea(2, 3));
} catch (error) {
    console.log((`Input is ${error.message}`));

}


//---------------------------

//  task 2


let age = prompt('Please enter your age');

function checkAge(age) {
    if (age === '') {
        throw new Error('The field is empty! Please enter your age');
    }

    parseInt(age);

    if (isNaN(age)) {
        throw new Error('Incorrect data');
    }

    if (!isNaN(age) && age < 14) {
        throw new Error('You are too young!');
    }


    return alert('You have access!!!');
}

try {
    console.log(checkAge(age));

} catch (error) {
    alert(error.name + ': ' + error.message);

}


//---------------------------

//  task 3

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }

}

function showMonthName(month) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December"'];

    if (month < 1 || month === '' || isNaN(parseInt(month))) {
        throw new MonthException('Incorrect month number');
    }


    return months[month - 1];
}

try {
    console.log(showMonthName(2));
    console.log(showMonthName('xdfvfd'));
    console.log(showMonthName('3'));
    console.log(showMonthName(''));
} catch (e) {
    console.log(e.message);

}

//----------------------------
// task 4


function showUser(id) {
    const newObj = {};

    if (id < 0) {
        throw new Error('ID must not be negative');

    }

    newObj.id = id;

    return newObj;
}


try {
    showUser();

} catch (error) {
    console.log(error.message);
}


function showUsers(ids) {
    const newArr = [];

    for (let i = 0; i < ids.length; i++) {
        try {
            newArr.push(showUser(ids[i]));
        } catch (error) {
            console.log(error.name + ': ' + error.message + ids[i]);
        }
    }


    return newArr;
}

console.log(showUsers([7, -12, 44, 22]));


