let gridWidth = 16; 
let gridHeight = 16;
let grid = 0;
setGridValue();
const BLOCK_PIXEL_WIDTH = 25;

const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent = "Reset";
body.appendChild(btn);

function setGridValue() {
    grid = gridWidth * gridHeight;
}

function getGridValue() {
    return grid;
}

function createGrid() {
    for (let i = 0; i < getGridValue(); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList = "grid";
        newDiv.id = i;
        container.appendChild(newDiv);
    }

    container.style.width = `${BLOCK_PIXEL_WIDTH * gridWidth}px`;
}

createGrid();

container.addEventListener("mousemove",(e) => {
    let target = document.getElementById(e.target.id);
    
    target.style.background = "red";
});

btn.addEventListener("click", () => {
    alert("Create a new grid");
    
    
    let validInput = false;
    do {
        gridWidth = Number(prompt("Width of the grid (1 - 50)", "16"));
        console.log(gridWidth < 51 && gridWidth > 0);
        if (gridWidth == Number && gridWidth < 51 && gridWidth > 0) { 
            validInput = true; 
        }
    } while (!validInput)

    validInput = false;
    do {
        gridHeight = Number(prompt("height of the grid (1 - 50)", "16"));
        if (gridHeight == Number && gridHeight < 51 && gridWidth > 0) { 
            validInput = true; 
        }
    } while (!validInput)
        
    setGridValue();
    createGrid();
});
        