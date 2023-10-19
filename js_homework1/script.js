const userNumber = +prompt("Enter your number");
const percentageOfNum = userNumber / 10;
console.log(`10% of your number is: ${percentageOfNum}`)

const num1 = +prompt("Enter your first num");
const num2 = +prompt("Enter your second num");
if (num1 > num2) {
    console.log(`The smallest number is ${num2}`)
} else {
    console.log(`The smallest number is ${num1}`)
}

const number = +prompt("Enter your number");
if (number > 100) {
    console.log(`Number ${number} is greater than 100`);
} else if (number < 100) {
    console.log(`Number ${number} is smaller than 100`)
} else {
    console.log(`Number ${number} is equal to 100`);
}

const userName = prompt("Enter your name")
const userAge = +prompt("Enter your age");
if (userAge < 18) {
    console.log(`Hi, ${userName}`);
} else {
    console.log(`Hello, ${userName}`);
}