
// Create variable for DOM manipulation
const inButton = document.querySelector(".header .input");
const container = document.querySelector(".container");

//Add event listener to update grid width
inButton.addEventListener('click', updateGrid);

//Create variable to store needed grid width
let gridNum;

//Function to update grid number when clicked via prompt
function updateGrid () {

    //Delete all current grid
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }

    //Prompt grid number then Check validity of the input
    do {gridNum = prompt('Please input integer equal or less then 100');}
        while (!parseInt(gridNum) || gridNum > 100 || gridNum < 0);

    generateGrid(gridNum);
    
}


//Function to generate DOM of the grid
function generateGrid (gridNum) {
    for (i = 1; i <= gridNum; i++) {
        const gridVer = document.createElement('div');
        gridVer.classList.add('gridVer');

        for (j = 1; j <= gridNum; j++) {
            const gridHor = document.createElement('div');
            gridHor.classList.add('gridHor');

            gridHor.addEventListener('mouseover', changeColor);

            gridVer.appendChild(gridHor);
        }

        container.appendChild(gridVer);
    }
}

//Change color when hovered
function changeColor () {
    this.classList.add('recolorGrid');
}


//Initial grid
gridNum = 16;
generateGrid(gridNum);