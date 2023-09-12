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
rangeInput.forEach(slider => slider.addEventListener("input", function () {
    //Change grid rows and columns based on slider event
    let changeValue = `repeat(${rangeInput[0].value},100px)`

    gridContainerIdName.style.gridTemplateRows = changeValue
    gridContainerIdName.style.gridTemplateColumns = changeValue

    //Create a button element into grid container as a child node
    let button = document.createElement("button")
    button.className = "item"
    button.id = "item"
    
    //still dont know the logic behind create grid element
    //document.getElementById("container").appendChild(button)
}))




const gridCointainerList = document.querySelectorAll('.container')
gridCointainerList.forEach(item => item.addEventListener('click', function () {

    // let changeValue = `repeat(${4},100px)`
    // gridContainerIdName.style.gridTemplateRows = changeValue

}))



const button = document.querySelectorAll('.item')
button.forEach(node => node.addEventListener('click', function (element) {
    //console.log(element.currentTarget.classList.value)
}))