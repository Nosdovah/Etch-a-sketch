//get Grid Container by class and id
const gridContainerClassName = document.getElementsByTagName("container")
const gridContainerIdName = document.getElementById('container')

//get grid each item by class
const gridItem = document.getElementsByTagName("item")

//get a list of all css value from the grid container
const containerObj = window.getComputedStyle(gridContainerIdName)

//get slider range value with it's class
const rangeInput = document.querySelectorAll(".sliderContainer input.slider")
//a function to get slider range value each time u slide it

//Menu button
const colorButton = document.querySelector('.btnColor')
const randomColorButton = document.querySelector('.btnRandom')
const eraserButton = document.querySelectorI('.btnErase')
const clearButton = document.querySelector('.btnClear')


rangeInput.forEach(slider => slider.addEventListener("input", function () {
    //Change grid rows and columns based on slider event
    let rangeSize = rangeInput[0].value;
    let changeValue = `repeat(${rangeSize} ,1fr)`

    gridContainerIdName.style.gridTemplateRows = changeValue
    gridContainerIdName.style.gridTemplateColumns = changeValue

    gridItemSizing(rangeSize)

}))

// gridItem.forEach(button => button.addEventListener("click") ,function() {
//     let button = document.querySelector('item')
// })



function gridItemSizing(size) {
    let rangeSize = rangeInput[0].value * rangeInput[0].value
    let buttonDel = document.querySelectorAll(".item")

    buttonDel.forEach(element => {
        element.remove()
    });

    for (let index = 0; index < rangeSize; index++) {
        //Create a button element into grid container as a child node
        let button = document.createElement("button")
        button.className = "item"
        gridContainerIdName.insertAdjacentElement("beforeend", button)

    
    }
}

//Testing
function blackColor (buttonObj) {
    buttonObj.style.color = "black";
}

function randomColor(buttonObj) {
    let randColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    buttonObj.style.color = `${randColor}`
}

function erase(buttonObj) {
    buttonObj.style.color = "white"
}

function clear(buttonObj) {
    buttonObj.forEach(element => {
        element.style.color = "white"
    });
}

