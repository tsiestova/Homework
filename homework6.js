// task 1


document.querySelector('#test').innerHTML = 'Last';
document.getElementById('test').innerHTML = 'Last';

//**********************************************************************************************

// // task 2

let picture = document.querySelector('img');
picture.setAttribute('src', 'pic/cat.jpg');
alert(picture.getAttribute('src'));

//**********************************************************************************************
// // task 3

let text = document.getElementById('text');
let paragraphs = text.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    console.log('Selector text ' + i + ': ' + paragraphs[i].textContent);
}

//**********************************************************************************************
// task 4
// 1 спосіб

let numbers = document.querySelectorAll('#list li');
const arrList = [];

for (let i = 0; i < numbers.length; i++) {
    arrList.push(numbers[i].textContent);
}
alert(arrList[0]);
alert(arrList[4]);
alert(arrList[1]);
alert(arrList[3]);
alert(arrList[2]);

//2 спосіб
let numbers2 = document.getElementById('list').children;

alert(numbers2[0].textContent);
alert(numbers2[4].textContent);
alert(numbers2[1].textContent);
alert(numbers2[3].textContent);
alert(numbers2[2].textContent);

//*********************************************************************************************
// task 5
document.querySelector('h1').style.backgroundColor = 'green';
let newParagraphs = document.querySelectorAll('#myDiv p');

for (let i = 0; i < newParagraphs.length; i++) {
    if (newParagraphs[i].textContent === 'First paragraph') {
        newParagraphs[i].style.fontWeight = 'bold';
    }
    if (newParagraphs[i].textContent === 'Second paragraph') {
        newParagraphs[i].style.color = 'red';
    }
    if (newParagraphs[i].textContent === 'Third paragraph') {
        newParagraphs[i].style.textDecoration = 'underline'
    }
    if (newParagraphs[i].textContent === 'Fourth paragraph') {
        newParagraphs[i].style.fontStyle = 'italic';
    }
}

let myNewLists = document.getElementById('myList').children;

for (let i = 0; i < myNewLists.length; i++) {
    myNewLists[i].style.display = 'inline-block';
}


document.querySelector('span').style.display = 'none';

//*********************************************************************************************
// task 6

let firstMessage = prompt('Введіть будь-який текст');
let secondMessage = prompt('Введіть будь-який текст');

let firstInput = document.getElementById('input1');
let secondInput = document.getElementById('input2');

firstInput.value = firstMessage;
secondInput.value = secondMessage;

firstInput.value = secondMessage;
secondInput.value = firstMessage;

//*********************************************************************************************
// task 7

let main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');
document.body.appendChild(main);

let div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('id', 'myDiv');

main.append(div);

let p = document.createElement('p');
p.innerHTML = 'First paragraph';
document.body.appendChild(p);
div.append(p);
















