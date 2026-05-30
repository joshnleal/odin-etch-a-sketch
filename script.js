let gridWidth = 16; 
const grid = gridWidth * gridWidth;
const BLOCK_PIXEL_WIDTH = 25;

const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < grid; i++) {
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
