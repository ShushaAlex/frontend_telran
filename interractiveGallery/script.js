const imagesDiv = document.querySelectorAll(".gallery-item");
const srcsImg = ["./images/bratwurst.jpg", "./images/moss.jpg", "./images/mushrooms.jpg", "./images/pinecones.jpg"];

for (let i = 0; i < imagesDiv.length; i++) {
    imagesDiv[i].insertAdjacentHTML("afterbegin",
    `<img class="img-item" src="${srcsImg[i]}" alt="">`)
}
const images = document.querySelectorAll(".img-item");
console.log(images)
const mainImg = document.querySelector(".main-image")

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        mainImg.setAttribute("src", images[i].src)
    })
}
