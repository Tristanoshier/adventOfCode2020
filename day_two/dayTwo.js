let fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split('\n').filter(x => x != "");

function dayTwoPartOne(passwordArray) {
    let valid = 0;
    for (let password of passwordArray) {
        let separatePassword = password.split(" ");
        let range = separatePassword[0].split('-');
        let min = parseInt(range[0]);
        let max = parseInt(range[1]);
        let letter = separatePassword[1].replace(':', '');
        let attemptedPassword = separatePassword[2];
        if (attemptedPassword.includes(letter)) {
            let numOfTimesLetterOccurs = attemptedPassword.split(letter).length - 1;
            if (numOfTimesLetterOccurs >= min && numOfTimesLetterOccurs <= max) {
                valid++;
            }
        }
    }
    return valid;
}

console.log(dayTwoPartOne(inputArray));


function dayTwoPartTwo(passwordArray) {
    let valid = 0;
    for (let password of passwordArray) {
        let separatePassword = password.split(" ");
        let positions = separatePassword[0].split('-');
        let firstPosition = positions[0] - 1;
        let secondPosition = positions[1] - 1;
        let letter = separatePassword[1].replace(':', '');
        let attemptedPassword = separatePassword[2].split('');
        if (letter === attemptedPassword[firstPosition] && letter === attemptedPassword[secondPosition]) {
            valid = valid;
        } else if (letter !== attemptedPassword[firstPosition] && letter !== attemptedPassword[secondPosition]) {
            valid = valid;
        } else if (letter === attemptedPassword[firstPosition] || letter === attemptedPassword[secondPosition]) {
            valid = valid + 1;
        } else {
            valid = valid;
        }
    }
    return valid
}

console.log(dayTwoPartTwo(inputArray));