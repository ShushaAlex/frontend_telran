const form = document.querySelector("form");
const prodName = document.querySelector(".product-name");
const prodPrice = document.querySelector(".product-price")

const products = [
    {
        name: "bike",
        price: "40000"
    },
    {
        name: "scooter",
        price: "15000"
    },
    {
        name: "skates",
        price: "5000"
    },
]
const productsSection = document.querySelector(".products");

const clearFields = (arg) => {
    prodName.value = "";
    prodPrice.value = "";
}

const showProducts = () => {
    productsSection.innerHTML = "";
    products.forEach(product => {
        productsSection.innerHTML +=
        `<div class="product-card">
        <h5 class="product-card-name">${product.name}</h5>
        <p class="product-card-price">${product.price}</p>
        </div> `;
    })
}
showProducts();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newProd = {
        name: prodName.value,
        price: prodPrice.value
    }
    products.push(newProd);
    showProducts();
    clearFields();
})

/*  <div class="product-card">
        <h5 class="product-card-name">Велосипед</h5>
        <p class="product-card-price">40000</p>
    </div>
*/