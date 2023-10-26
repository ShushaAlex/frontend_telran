// const title = document.createElement("h1"); // create tag h1
// title.innerText = "Hello world!"; // add content
// const header = document.querySelector("header"); // find where to put h1
// header.append(title); // add h1 to target tag


// const text = document.createElement("p");
// text.innerText = "hello world"
// const div = document.querySelector(".item")
// div.append(text);

// div.insertAdjacentHTML("afterend", `<p class="item-2">My new text</p>`);


// for (let i = 0; i < names.length; i++) {
//     div.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`);
// }

// const text1 = "hello world!!!"
// header.insertAdjacentHTML("beforeend", `<h1>${text1}</h1>`);

const products = [
    {
        name: "Молоко",
        price: 500
    },
    {
        name: "Гречка",
        price: 700
    },
    {
        name: "Масло",
        price: 600
    },
    {
        name: "Хлеб",
        price: 100
    }
]
const item = document.querySelector(".item");
for (let i = 0; i < products.length; i++) {
        item.insertAdjacentHTML("beforeend", 
            `<div class="product"><h5>${products[i].name}</h5>
            <p>${products[i].price}</p></div>`);
}