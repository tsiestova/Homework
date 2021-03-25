document.addEventListener("DOMContentLoaded", function () {

    // task2
    console.log('Siestova');

    // task3
    let a, b;

    a = 'March';
    b = 2021;

    let demo = document.querySelector('.demo');
    demo.innerHTML = [a, b].join(' ');

    a = b;
    alert([a, b].join(" "));

    // task 4
    const newObject = {
        'String': 'someText',
        'Number': 5,
        'Boolean': true,
        'Undefined': a,
        'Null': null
    };

    // task 5
    let isAdult = confirm('Are you adult?');
    console.log(isAdult);


    // task 6
    const name = 'Tetiana';
    let lastName = 'Siestova';
    const studyGroup = 'Lv-583.JSCore21';
    const yearOfBirth = 1987;

    let isMarried = true;

    console.log(yearOfBirth, isMarried, name, lastName, studyGroup);


    let y = null;
    let z;


    console.log(typeof(y));
    console.log(typeof(z));

    // task 7
    let login = prompt('Log in', 'user');
    let eMail = prompt('E-mail', '@gmail.com');
    let password = prompt('Password', '*******');

    alert([`Dear ${login}, your email is ${eMail}, your password is ${password}`]);


    // task 8
    function getHour(input) {

        return input * 60 * 60;
    }


    function getDay(input) {

        return input * 24 * 60 * 60;
    }

    function getMonth(input) {

        return input * 30 * 24 * 60 * 60;
    }


    const secInHour = getHour(3);
    const resultHour = document.querySelector('.result-hour');
    resultHour.innerHTML = `3 hours is ${secInHour} seconds`;

    const secInDay = getDay(2);
    const resultDay = document.querySelector('.result-day');
    resultDay.innerHTML = `2 days is ${secInDay} seconds`;

    const secInMonth = getMonth(1);
    const resultMonth = document.querySelector('.result-month');
    resultMonth.innerHTML = `1 month is ${secInMonth} seconds`;
});




