// const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]

const div = document.querySelector("div");
// names.forEach(name => {
//     div.insertAdjacentHTML("beforeend", 
//     `<p>${name}</p>`)
// });

// const products = [
//     {
//         name: "Молоко",
//         price: 500
//     },
//     {
//         name: "Гречка",
//         price: 600
//     },
//     {
//         name: "Масло",
//         price: 850
//     },
// ]
// products.forEach(product => {
//     div.innerHTML += `<div class="product">
//     <h5>${product.name}</h5>
//     <p>${product.price}</p>
// </div>`
// })

// const title = document.querySelector("h1");
// title.classList.add("new-item")
// console.log(title.classList)

/* <div class="todo-item">
<h5>${todo}</h5>
</div> */
const todos = ["Сварить суп", "Сделать ДЗ", "Убраться дома", "Поваляться"]
const todoList = document.querySelector(".todo-list")
todos.forEach(todo => {
    todoList.innerHTML += `<div class="todo-item">
    <h5>${todo}</h5>
    </div>`
});

const todoDivs = document.querySelectorAll(".todo-item")
todoDivs.forEach(todo => {
    todo.addEventListener("click", function() {
        todo.classList.toggle("active")
    })
})

const selectAllBtn = document.querySelector(".select-all")
selectAllBtn.addEventListener("click", () => {
    todoDivs.forEach(todo => {
        todo.classList.add("active")
    });
});

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => {
    todoDivs.forEach(todo => {
        todo.classList.remove("active")
    });
});