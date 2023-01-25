// JavaScript Document
console.log("hi");

var kruisje

var button

kruisje = document.querySelector("li button div svg");

button = document.querySelector("li button");

button.addEventListener("mouseenter", verander);
button.addEventListener("mouseleave", verander);

function verander() {
kruisje.classList.toggle("hover");
}

var evenementData = document.querySelector("main ol:nth-of-type(2)");


button.addEventListener('click', () => {
  evenementData.classList.remove("left")
})

var evenement = document.querySelectorAll("main ol:nth-of-type(1)>li");

evenement.forEach((item, i) => {
  item.addEventListener('click', () => {
    console.log('worky');
    evenementData.classList.add("left")
  })
})
