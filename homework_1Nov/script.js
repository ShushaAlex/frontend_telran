/* 
Создать кнопку и красный квадрат с размерами 200х200px. 
При клике на кнопку менять у квадрата цвет заднего фона на зеленый
и уменьшать его до размеров 100х100px. Примечание: добавила toggle,
чтобы можно было вернуть квадрат в исходное положение.
*/
const btn1 = document.querySelector(".btn-1");
const square1 = document.querySelector(".square-1");
btn1.addEventListener("click", () => {
    square1.classList.toggle("square-1-new");
});
/* 
Создать кнопку и розовый квадрат с размерами 200х200px.
При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
*/
const btn2 = document.querySelector(".btn-2");
const square2 = document.querySelector(".square-2");
btn2.addEventListener("click", () => {
    square2.style.backgroundColor = "rgb(138, 238, 240)";
    console.log((square2.style.backgroundColor));
});
/*
Создать кнопку и квадрат с размерами 150х150px. 
При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
*/
const btn3 = document.querySelector(".btn-3");
const square3 = document.querySelector(".square-3");
btn3.addEventListener("click", () => {
    square3.classList.toggle("square-3-new");
});
/*
Создать кнопку и div с классом root. При клике на кнопку
в div создается параграф синего цвета. Текст параграфа произвольный.
*/
const text = "You are a wizzard!";
const container = document.querySelector(".root");
const btn4 = document.querySelector(".btn-4");
btn4.addEventListener("click", () => {
    container.insertAdjacentHTML("beforeend", `<p class="blue">${text}</p>`)
})
/*
Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди
параграфы синего и зеленого цветов. Первый цвет синий.
*/
const text1 = "Wow!";
const container1 = document.querySelector(".root-1");
const btn5 = document.querySelector(".btn-5");
btn5.addEventListener("click", () => {
    container1.insertAdjacentHTML("beforeend", 
    `<p class="blue">${text1}</p>
    <p class="green">${text1}</p>`)
})