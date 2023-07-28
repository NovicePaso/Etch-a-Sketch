function createGrid(gridLength){
    for (let i = 0; i < gridLength; i++){
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        document.querySelector(".grid-container").appendChild(gridColumn);
        for(let j = 0; j < gridLength; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridColumn.appendChild(gridElement);
    }
}
}

// user selects size input of grid
document.querySelector("#selector").addEventListener("click", function(){
var input = prompt("How many number of squares per side?", 16);
if (input > 100){
    alert("Maximum input is 100");
    input = 0;
}
else if (input < 0){
    alert("Must be a positive integer");
    input = 0;
}
else if (isNaN(input)){
        alert("Please input a number");
        input = 0;
}

var gridColumns = document.querySelectorAll(".grid-column");
for (let i = 0; i < gridColumns.length; i++){
    gridColumns[i].remove(".grid-column");
}
createGrid(input);

// set up "hover" effect with addEventListener for when a mouse enters a "grid-element".  use parameter "once"
var fillGrid = document.getElementsByClassName("grid-element");

for(let i = 0; i < fillGrid.length; i++){
    fillGrid[i].addEventListener("mouseover", function(){
        fillGrid[i].classList.add("filled-element")
    });
}
// on click event, removes filled element
for(let i = 0; i< fillGrid.length; i++){
    fillGrid[i].addEventListener("click", function(){fillGrid[i].classList.remove("filled-element")});
}
})


