// const contents1 = document.querySelectorAll(".item-1 p");
// const item1 = document.querySelector(".item-1");
// item1.addEventListener("click", () => {
//     contents1.forEach(text => {
//         text.classList.toggle("hidden");
//     })
// })

// const contents2 = document.querySelectorAll(".item-2 p");
// const item2 = document.querySelector(".item-2");
// item2.addEventListener("click", () => {
//     contents2.forEach(text => {
//         text.classList.toggle("hidden");
//     })
// })

/* 
`<div class="item">
<p class="en">${}</p>
<p class="de hidden">${}</p>
</div>`
*/

const words = [
    {
        en: "eng1",
        de: "de1"
    },
    {
        en: "eng2",
        de: "de2"
    },
    {
        en: "eng3",
        de: "de3"
    },
]

const main = document.querySelector("main");
words.forEach(word => {
    main.insertAdjacentHTML("beforeend", 
    `<div class="item">
    <p class="en">${word.en}</p>
    <p class="de hidden">${word.de}</p>
    </div>`)
})

const items = document.querySelectorAll(".item")
items.forEach(item => {
    item.addEventListener("click", () => {
        const texts = item.querySelectorAll("p");
        texts.forEach(text => {
            text.classList.toggle("hidden")
        })
    })
})

const engBtn = document.querySelector(".english")
const deBtn = document.querySelector(".deutsch")
const deTexts = document.querySelectorAll(".de")
const enTexts = document.querySelectorAll(".en")

engBtn.addEventListener("click", () => {
    enTexts.forEach(text => {
        text.classList.remove("hidden")
    })
    deTexts.forEach(text => {
        text.classList.add("hidden")
    })
})

deBtn.addEventListener("click", () => {
    enTexts.forEach(text => {
        text.classList.add("hidden")
    })
    deTexts.forEach(text => {
        text.classList.remove("hidden")
    })
})