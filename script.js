const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList = "grid";
        container.appendChild(newDiv);
    }
}

createGrid();
