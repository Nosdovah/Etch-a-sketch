//get Grid Container by class and id
const gridContainerClassName = document.getElementsByTagName("container")
const gridContainerIdName = document.getElementById('container')

//get grid each item by class
const gridItem = document.getElementsByTagName("item")
const gridItems = document.querySelectorAll('.item')

//get a list of all css value from the grid container
const containerObj = window.getComputedStyle(gridContainerIdName)

//get slider range value with it's class
const rangeInput = document.querySelectorAll(".sliderContainer input.slider")
//a function to get slider range value each time u slide it

//Menu button
const colorButton = document.querySelector('.btnColor')
const randomColorButton = document.querySelector('.btnRandom')
const eraserButton = document.querySelector('.btnErase')
const clearButton = document.querySelector('.btnClear')


rangeInput.forEach(slider => slider.addEventListener("input", function () {
    //Change grid rows and columns based on slider event
    let rangeSize = rangeInput[0].value;
    let changeValue = `repeat(${rangeSize},1fr)`

    gridContainerIdName.style.gridTemplateRows = changeValue
    gridContainerIdName.style.gridTemplateColumns = changeValue

    gridItemSizing(rangeSize)

}))
function gridItemSizing(size) {
    let rangeSize = size * size
    let buttonDel = document.querySelectorAll(".item")

    buttonDel.forEach(element => {
        element.remove()
    });

    for (let index = 0; index < rangeSize; index++) {
        //Create a button element into grid container as a child node
        //LAGG
        let div = document.createElement("div")
        div.className = "item"
        div.style.background = "white"
        div.style.borderColor ="white"
        gridContainerIdName.insertAdjacentElement("beforeend", div)

        //Coloring a button
        colorButton.addEventListener(('click'), function () {
            div.addEventListener(('mouseover'), function () {
                div.style.background = "black"
            })
        })
        randomColorButton.addEventListener(('click'), function () {
            div.addEventListener(('mouseover'),function() {
                let randColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
                div.style.background = `${randColor}`
            })
        })

        eraserButton.addEventListener(('click'), function () {
            div.addEventListener(('mouseover'),function() {
                div.style.background ="white"
            })
        })

        clearButton.addEventListener(('click'), function () {
            div.style.background = "white"
        })
 

    }
}
