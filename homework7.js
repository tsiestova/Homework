document.addEventListener("DOMContentLoaded", function () {

// task 1 *******************************************************************

    let myWindow;

    function openWindow() {
        myWindow = window.open("", "", "width=300,height=300");
    }

    function resizeWindow() {
        myWindow.resizeTo(500, 500);
        myWindow.focus();
    }

    function moveWindow() {
        myWindow.moveTo(200, 200);
        myWindow.focus();
    }

    function closeWindow() {
        myWindow.close();
    }

    setTimeout(function () {
        openWindow();

        setTimeout(function () {
            resizeWindow();

            setTimeout(function () {
                moveWindow();

                setTimeout(function () {
                    closeWindow();
                }, 2000);
            }, 2000);
        }, 2000);
    }, 500);

    // task 2 *******************************************************************

    let button = document.querySelector('#button');
    let text = document.querySelector('#text');

    button.addEventListener('click', function (event) {
        changeCSS(text);
    });


    function changeCSS(el) {
        el.style.cssText = `
      color: orange;
      font-size: 20px;
      font-family: "Comic Sans MS";
   `;
    }

// task 3 *******************************************************************

// blue
    let bluePage = document.querySelector('.blue-page');
    bluePage.addEventListener('click', function () {
        document.body.style.backgroundColor = '#2d8bcf';
    });

//pink
    let doublePinkPage = document.querySelector('.double-pink-page');
    doublePinkPage.addEventListener('dblclick', function () {
        document.body.style.backgroundColor = '#cd7ee0';
    });

// brown
    let holdBrownPage = document.querySelector('.hold-brown-page');
    let mouseIsDown = false;
    let timeOut;

    holdBrownPage.addEventListener('mousedown', function () {
        mouseIsDown = true;

        timeOut = setTimeout(function () {
            // if (mouseIsDown) {
            document.body.style.backgroundColor = '#8a6454';
            // }
        }, 1000);
    });

    holdBrownPage.addEventListener('mouseup', function () {
        mouseIsDown = false;
        clearTimeout(timeOut);
    });


//link
    let yellowPage = document.querySelector('#yellow-page');

    yellowPage.addEventListener('mouseenter', function () {
        document.body.style.backgroundColor = '#e8e231';
    });

    yellowPage.addEventListener('mouseleave', function () {
        document.body.style.backgroundColor = 'white';
    });


// task 4 *******************************************************************

    let buttonDelete = document.querySelector('#button-delete');
    let selectList = document.querySelector('select');

    buttonDelete.addEventListener('click', function () {
        selectList.options[selectList.selectedIndex].remove();
    });

// task 5 *******************************************************************

    let liveButton = document.querySelector('.live-button');
    let demo = document.querySelector('.demo');

    liveButton.addEventListener('click', function () {
        let p = document.createElement('p');
        p.innerHTML = 'I was pressed!';
        demo.appendChild(p);
    });

    liveButton.addEventListener('mouseout', function () {
        let p = document.createElement('p');
        p.innerHTML = 'Mouse is not on me!';
        demo.appendChild(p);
    });

    liveButton.addEventListener('mouseover', function () {
        let p = document.createElement('p');
        p.innerHTML = 'Mouse is on me!';
        demo.appendChild(p);
    });

// task 6 *******************************************************************

    displaySize();

    function displaySize() {
        let demoSize = document.querySelector('.demo-size');
        let height = document.documentElement.clientHeight;
        let width = document.documentElement.clientWidth;
        let resultSize = `Висота вікна браузера - ${height}, ширина вікна - ${width}`;

        demoSize.innerHTML = resultSize;
    }

    window.addEventListener('resize', function () {
        displaySize();
    });


// task 7 *******************************************************************

    const countriesData = {
        ger: ['Berlin', 'Hamburg', 'Munich'],
        usa: ['Chicago', 'Houston', 'Los Angeles'],
        ukr: ['Kyiv', 'Lviv', 'Dnipro'],
    }


    let countries = document.querySelector('#countries');
    let cities = document.querySelector('#cities');
    let display = document.querySelector('.display');

    function showSelected() {
        display.innerHTML = `${countries.options[countries.selectedIndex].innerHTML} ${cities.value}`;
    }

    countries.addEventListener('change', function () {
        cities.innerHTML = '';


        for (let i = 0; i < countriesData[countries.value].length; i++) {
            let city = document.createElement('option');
            city.innerHTML = countriesData[countries.value][i];
            city.value = countriesData[countries.value][i];
            cities.appendChild(city);
        }

        showSelected();
    });

    cities.addEventListener('change', function () {
        showSelected();
    })

});
















