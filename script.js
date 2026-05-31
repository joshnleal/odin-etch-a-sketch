const BLOCK_PIXEL_WIDTH_AND_HEIGHT = 25;
const MAX_GRID_WIDTH = 50; // Applies to height as well
const MIN_GRID_WIDTH = 1; // This too

const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent = "Reset";
btn.style.margin = "50px";
btn.style.padding = "5px 10px";
btn.style.borderRadius = "8px";
body.insertBefore(btn, container);        

// Initialize the first grid (16 x 16)
let gridWidth = 16; 
let gridHeight = 16;
let grid = 0;
setGridValue();
createGrid();

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
        newDiv.style.width = `${BLOCK_PIXEL_WIDTH_AND_HEIGHT}px`;
        newDiv.style.height = `${BLOCK_PIXEL_WIDTH_AND_HEIGHT}px`;
        newDiv.style.background = "white";
        container.appendChild(newDiv);
    }
    
    container.style.width = `${BLOCK_PIXEL_WIDTH_AND_HEIGHT * gridWidth}px`;
}

function deleteGrid() {
    for (let i = 0; i < getGridValue(); i++){
        container.removeChild(container.firstChild);
    }
}

container.addEventListener("mousemove",(e) => {
    let target = document.getElementById(e.target.id);

    if (target.style.background == "white") {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        target.style.background= `rgba(${r}, ${g}, ${b})`;
        target.style.opacity = "1.0";
    }

    target.style.opacity = `${target.style.opacity - 0.1}`;
});

btn.addEventListener("click", (e) => {
    alert("Create a new grid");
    
    let validInput = false;
    do {
        gridWidth = Number(prompt("Width of the grid (1 - 50)", "16"));
        validInput = (gridWidth <= MAX_GRID_WIDTH && gridWidth >= MIN_GRID_WIDTH) 
    } while (!validInput)
        
    validInput = false;
    do {
        gridHeight = Number(prompt("Height of the grid (1 - 50)", "16"));
        validInput = (gridHeight <= MAX_GRID_WIDTH && gridHeight >= MIN_GRID_WIDTH) 
    } while (!validInput)
        
    if (container.hasChildNodes()) { 
        deleteGrid(); 
    }
    
    // Unfocus button
    e.target.blur();
    
    setGridValue();
    
    createGrid();
});
