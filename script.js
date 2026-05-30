const GRID = 16 * 16;
const container = document.querySelector(".container");


function createGrid() {
    for (let i = 0; i < GRID; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList = "grid";
        newDiv.id = i;
        container.appendChild(newDiv);
    }
}

createGrid();

container.addEventListener("mousemove",(e) => {
    let target = document.getElementById(e.target.id);

    target.style.background = "red";
    target.addEventListener("mouseleave", () => {
        target.style.background = "white";
    });
});
