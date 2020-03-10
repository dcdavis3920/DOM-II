// Your code goes here
// let sampleButton = document.querySelector('.sampleButton');
// sampleButton.addEventListener('click', (event) => {
//   alert('You Clicked the Sample Button!')
// })

const Body = document.querySelector("body");
Body.addEventListener("keydown", (event) => {
    alert("What, do you want")
})

let mouseDown = document.querySelector('.nav-link');
mouseDown.addEventListener('mousedown', (event) => {
  mouseDown.style.backgroundColor= "red";
})

let mouseOver = document.querySelector('p');
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
focusOn.addEventListener('mouseover', (event) => {
  focusOn.style.color= "orange";
})

let mouseOut = document.querySelector('.nav-link');
mouseOut.addEventListener('mouseout', (event) => {
  mouseDown.style.backgroundColor= "yellow";
})

const wheel2 = document.querySelector("body");
wheel2.addEventListener("wheel", (event) => {
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
