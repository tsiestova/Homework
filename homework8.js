// task 1***********************************************************

    function upperCase(str) {
        let reg = /^[A-Z]/;

        if (reg.test(str)) {
            return `String\'s starts with uppercase character`;
        }

        return `String\'s not starts with uppercase character`;
    }


    console.log(upperCase('regexp'));
    console.log(upperCase('RegExp'));

// task 2 ***********************************************************

function checkEmail(eMail) {

   return /^[\w.]+@[a-z]+\.[a-z]{2,4}$/.test(eMail);
}

console.log(checkEmail('Qmail2@gmail.com'));

// task 3 *************************************************************

    let regex =  /d(b+d)/i;
    let result = ('cdbBdbsbz').match(regex);

    console.log(result);

// task 4 *************************************************************

let str = 'Java Script';
let newStr = str.replace(/java script/ig, "Script, Java");

console.log(newStr);


// task 5 *************************************************************

function checkNumberCard(number) {

    let regex = /^(\d{4}-){3}\d{4}$/;

    return regex.test(number);
}

console.log(checkNumberCard('9999-9999-9999-9999'));

// task 6 *************************************************************

function checkEmail(eMail) {

    let regex = /^[a-z0-9]+(-?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/gi;

    return regex.test(eMail);
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));

// task 7 *************************************************************

function checkLogin(login) {

    let regex1 = /^[a-zA-z][a-zA-Z0-9.]{1,9}/g;

    let regex2 = /\d*[.]?\d+/g;

    let result2 = login.match(regex2);

   return [!!login.match(regex1), result2];
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('#ee1*1ret3'));


















