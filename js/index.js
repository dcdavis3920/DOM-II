// Your code goes here
// let sampleButton = document.querySelector('.sampleButton');
// sampleButton.addEventListener('click', (event) => {
//   alert('You Clicked the Sample Button!')
// })

const Body = document.querySelector("a:nth-of-type(3)");
Body.addEventListener("dblclick", (event) => {
    alert("What, do you want")
})

let mouseDown = document.querySelector('.nav-link');
mouseDown.addEventListener('click', (event) => {
  mouseDown.style.backgroundColor= "red";
  event.preventDefault();
})

let mouseOver = document.querySelector('p:nth-of-type(2)');
mouseOver.addEventListener('mouseover', (event) => {
  mouseOver.style.backgroundColor= "green";
})

let wheelOver = document.querySelector('body');
wheelOver.addEventListener('wheel', (event) => {
  wheelOver.style.backgroundColor= "purple";
})



let variable2 = document.querySelector('header')
variable2.addEventListener('drag', (event) => {
    variable2.style.backgroundColor = 'green';
})

let focusOn = document.querySelector('p');
focusOn.addEventListener('contextmenu', (event) => {
  focusOn.style.color= "orange";
  event.stopPropagation();
})
let focusOn1 = document.querySelector('.intro');
focusOn1.addEventListener('contextmenu', (event) => {
  focusOn1.style.color= "purple";
})

let focusOn2 = document.querySelector('.home');
focusOn2.addEventListener('contextmenu', (event) => {
  focusOn2.style.color= "yellow";
}) 

let mouseOut = document.querySelector('.nav-link');
mouseOut.addEventListener('mouseout', (event) => {
  mouseDown.style.backgroundColor= "black";
})

const wheel2 = document.querySelector("body");
wheel2.addEventListener("buttonDown", (event) => {
    alert("What, are you looking for")
})

const blackOut = document.querySelector("body");
blackOut.addEventListener("click", (event) => {
    blackOut.style.backgroundColor= "black";
})

const clicked = document.querySelector(".btn");
clicked.addEventListener("dblclick", (event) => {
    clicked.style.color= "orange";
})
