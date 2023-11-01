// const plusBtn = document.querySelector(".plus");
// const minusBtn = document.querySelector(".minus");
// const title = document.querySelector("h1");

// let a = 0;
// plusBtn.addEventListener("click", function() {
//         title.innerText = ++a;
//     });
// minusBtn.addEventListener("click", function() {
//     title.innerText = --a;
//     });

// const redBtn = document.querySelector(".red")
// const greenBtn = document.querySelector(".green")
// const yellowBtn = document.querySelector(".yellow")

// redBtn.addEventListener("click", function() {
//     div.style.backgroundColor = "rgb(244, 171, 171)";
// })
// greenBtn.addEventListener("click", function() {
//     div.style.backgroundColor = "rgb(171, 244, 180)";
// })
// yellowBtn.addEventListener("click", function() {
//     div.style.backgroundColor = "rgb(244, 243, 171)";
// })
const div = document.querySelector(".item");
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        div.style.backgroundColor = buttons[i].className;
    })
}

// Создать интерактивную галерею. 
// При нажатии на каждую из картинок, забираем ее ссылку и в нижней части
// интерфейса отобразить в большом размере.