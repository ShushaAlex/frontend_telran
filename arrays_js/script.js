// const arr = [];

// const userNum1 = +prompt("enter your number 1");
// const userNum2 = +prompt("enter your number 2")
// arr.push(userNum1, userNum2);
// console.log(arr);

// const names = ["Arsen", "Vlad", "Olga", "Irina"] 
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}`);
// }

const numbers = [-100, 0, 50, -20, 0, 15, 25, -40]
// for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             console.log(numbers[i]);
//         }
//     }

// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) == 0) {
//         console.log(numbers[i]);
//     }
// }
let evenResult = 0;
let oddResult = 0;
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) == 0) {
        evenResult += numbers[i];
    } else {
        oddResult += numbers[i];
    }
}
if (evenResult > oddResult) {
    console.log(evenResult - oddResult);
} else {
    console.log(oddResult - evenResult);
}
