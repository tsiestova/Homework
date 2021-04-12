// task 1

function propsCount(currentObject) {
    let count = 0;

    for (let property in currentObject) {
        if (property) {
            count++
        }
    }

    return count;
}

console.log(propsCount(mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
}));


// //---------------------------

// // task 2


const obj = {
    name: 'Tanya',
    lastName: 'Siestova',
    country: 'Ukraine',
    age: 33,
    isMarried: true
};

function showProps(obj) {
    const arrProperty = [];
    const arrValue = [];

    for (let property in obj) {
        arrProperty.push(property);
        arrValue.push(obj[property]);
    }

    return [arrProperty, arrValue];
}

console.log(showProps(obj));


// //---------------------------
//
// // task 3

class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.name + ' ' + this.surname;
    }
}

let newPerson = new Person('Petro', 'Petrenko');

console.log(newPerson.showFullName());

//--------------

class Student extends Person {

    constructor(name, surname, year) {
        super(surname, name);
        this.year = year;
    }

    showFullName(middleName) {

        return `${super.showFullName()} ${middleName}`;
    }

    showCourse() {
        let currentYear = 2021;

        return currentYear - this.year;
    }
}

let student = new Student('Petro', 'Petrenko', 2020);

console.log(student.showFullName('Petrovych'));

console.log(`Current course: ${student.showCourse()}`);


// task 4

class Worker {
    #experience;

    constructor(fullName, dayRate, workingDays) {

        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.#experience = 1.2;
        this.salary = this.dayRate * this.workingDays;
        this.salaryExp = this.salary * this.#experience;
    }

    showSalary() {
        return this.salary;
    }

    showSalaryWithExperience() {
        return 'New experience:' + ' ' + this.salaryExp;
    }


    set newExperience(value) {
        this.#experience = value;
        this.salaryExp = this.salary * this.#experience;
    }

    get getCurrentExp() {
        return this.#experience;
    }
}

let worker1 = new Worker('John Johnson', 20, 23);
let worker2 = new Worker('Tom Tomson', 48, 22);
let worker3 = new Worker('Andy Ander', 29, 23);

console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log(worker1.showSalaryWithExperience());

worker1.newExperience = 1.5;
console.log(worker1.getCurrentExp);
console.log(worker1.showSalaryWithExperience());

const arr = [];
arr.push(worker1, worker2, worker3);

arr.sort((a, b) => b.salaryExp - a.salaryExp);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].fullName + ': ' + arr[i].salaryExp);
}


// task 5

class GeometricFigure {

    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }
}


class Square extends GeometricFigure {

    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    figures.forEach(function (figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area ${figure.getArea()}`);
        }
    })
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

console.log(handleFigures(figures));



