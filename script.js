const gridSizeInput = document.querySelector("#grid-size-input");
const gridSizeForm = document.querySelector("#grid-size-form");

gridSizeForm.addEventListener("submit", (e) => e.preventDefault());

gridSizeInput.addEventListener("keyup", (e) => {
    let gridSize = Number(gridSizeInput.value);

    if (gridSize < 1 || 100 < gridSize || isNaN(gridSize)) {
        alert("Size of the grid should be between 1 and 100");
        return;
    }
    // setGrid(gridSize);
});
