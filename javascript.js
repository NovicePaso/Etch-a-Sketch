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

createGrid(16);

// set up "hover" effect with addEventListener for when a mouse enters a "grid-element".  use parameter "once"
var fillGrid = document.getElementsByClassName("grid-element");


for(let i = 0; i < fillGrid.length; i++){
    fillGrid[i].addEventListener("mouseover", function(){fillGrid[i].classList.add("filled-element")});
}


// on click event, adds class to colored-element
/* for(let i = 0; i< fillGrid.length; i++){
    fillGrid[i].addEventListener("click", function(){fillGrid[i].classList.add("colored-element")});
} */