let fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split('\n').filter(x => x != "");

function dayThreePartOne(arr) {
    let trees = 0;
    let x = 0;
    let y = 0;
    let right = 3;
    let down = 1;

    for (let i = 0; i < arr.length; i++) {
        let replaceX = x % arr[0].length;
        let point = arr[y][replaceX];

        if (point == '#') {
            trees++;
        }
        x += right;
        y += down;
    }
    return trees;
}

console.log(dayThreePartOne(inputArray));




let differentSlopes = [
    // x, y
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];


function dayThreePartTwo(arr, slopes) {
    let productOfTrees = 1;
    for (points of slopes) {
        let trees = 0;
        let x = 0;
        let y = 0;
        let right = points[0];
        let down = points[1];

        while (y < arr.length) {
            let replaceX = x % arr[0].length;
            let point = arr[y][replaceX];

            if (point == '#') {
                trees++;
            }
            x += right;
            y += down;
        }
        productOfTrees *= trees;
    }
    return productOfTrees;
}


console.log(dayThreePartTwo(inputArray, differentSlopes))