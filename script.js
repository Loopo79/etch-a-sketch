const gridSizeInput = document.querySelector("#grid-size-input");
const gridSizeForm = document.querySelector("#grid-size-form");
const gridContainer = document.querySelector("#grid-container");
const gridSizeInputButton = document.querySelector("#grid-size-input-button");

function getGridSize() {
    let gridSize = Number(gridSizeInput.value);

    if (gridSize < 1 || 100 < gridSize || isNaN(gridSize)) {
        alert("Size of the grid should be between 1 and 100");
        return;
    }
    return gridSize;
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGridRow(rowSize) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    for (let i = 0; i < rowSize; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        row.appendChild(pixel);
    }
    return row;
}

function setGrid(gridSize) {
    clearGrid();
    for (let i = 0; i < gridSize; i++) {
        gridContainer.appendChild(createGridRow(gridSize));
    }
}

gridSizeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setGrid(getGridSize());
});
