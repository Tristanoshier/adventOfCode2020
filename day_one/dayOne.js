let fs = require('fs');
var expenseReport = fs.readFileSync('input.txt').toString().split('\n').filter(x => x != "").map(Number);

 function dayOnePartOne(numbers, sum) {
     var map = [];
     var indexnum = [];

     for (let i = 0; i < numbers.length; i++) {
         if (map[numbers[i]] != null) {
             var index = map[numbers[i]];
             indexnum[0] = index;
             indexnum[1] = i;
             break;
         } else {
             map[sum - numbers[i]] = i;
         }
     }
    let firstValue = numbers[indexnum[0]];
    let secondValue = numbers[indexnum[1]];

    return firstValue * secondValue;
 }
dayOnePartOne(expenseReport, 2020);


// O(n^2)
function dayOnePartTwo(numbers, sum) {
    let arr = numbers.sort((a,b) => a-b);
    for (let i = 0; i < arr.length - 2; i++ ) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] === sum) {
                return arr[i] * arr[j] * arr[k];
            } else if (arr[i] + arr[j] + arr[k] < sum) {
                j++;
            } else {
                k--; 
            }
        }
    }
}

// O(n^3)
// function dayOnePartTwo(numbers, sum) {
//     for(let i = 0; i < numbers.length - 2; i++) {
//         for(let j = 0; j < numbers.length - 1; j++) {
//             for (let k = 0; k < numbers.length; k++) {
//                 if (numbers[i] + numbers[j] + numbers[k] === sum) {
//                     return numbers[i] * numbers[j] * numbers[k];
//                 }
//             }
//         }
//     }
// }

console.log(dayOnePartTwo(expenseReport, 2020));