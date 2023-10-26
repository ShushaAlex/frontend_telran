/* 
Написать цикл, который создает множество параграфов с каждым десятым числом 
в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
Добавить созданные параграфы в div с классом numbers. 
*/
const body = document.querySelector("body");
body.insertAdjacentHTML("beforeend", `<div class="numbers"></div>`);
const divNumbers = document.querySelector(".numbers");
for (let i = 50; i <= 100; i += 10) {
    divNumbers.insertAdjacentHTML("afterbegin", `<p>${i}</p>`)
}

/*
Написать цикл, который проходится по массиву строк, для каждой строки создает
параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
*/
const strings = ["I", "am", "JS", "star", "!"];
body.insertAdjacentHTML("beforeend", `<div class="strings-container"></div>`);
const divStrContainer = document.querySelector(".strings-container");
for (let i = 0; i < strings.length; i++) {
    divStrContainer.insertAdjacentHTML("beforeend", `<p>${strings[i]}</p>`);
}

/*
Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и 
age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. 
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
Добавить все карточки в div с классом users_container.
*/
const users = [
    {
        firstName: "Alex",
        lastName: "Sun",
        age: 27
    },
    {
        firstName: "Korzhik",
        lastName: "Moon",
        age: 4
    },
    {
        firstName: "Tim",
        lastName: "Star",
        age: 54
    },
    {
        firstName: "JD",
        lastName: "Sky",
        age: 18
    }
]

body.insertAdjacentHTML("beforeend", `<div class="users-container"></div>`);
const divUsersContainer = document.querySelector(".users-container");
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        divUsersContainer.insertAdjacentHTML("beforeend",
                                            `<div class="user">
                                            <h5>${users[i].firstName}</h5>
                                            <h5>${users[i].lastName}</h5>
                                            <p>Age: ${users[i].age}</p>
                                            </div>`)
    }
}
