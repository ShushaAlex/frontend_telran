// alert("Hello!");

// const userNumber = +prompt("Enter your number:");
// console.log(userNumber);
// console.log(typeof userNumber);

// const userName = "Alex";
// console.log(userName + " Shusha");
// console.log(`Hello, ${userName}!`);

// const userName = prompt("Enter your name");
// console.log(`Hello, ${userName}!`);

// const r = 100;
// const g = 57;
// const b = 141;
// console.log(`rgb(${r}, ${g}, ${b})`);

// const year = +prompt("Enter your year of birth");
// console.log(`You are ${2023 - year}`);

const degree = +prompt("Сколько градусов на улице?");

if (degree > 20) {
    console.log("Надевай футболку!")
} else if (degree == 20) {
    console.log("Надевай рубашку!")
} else {
    console.log("Надевай кофту!")
}