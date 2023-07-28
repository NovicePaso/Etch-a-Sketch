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

//generates random color for filled-element
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter(index){
    return hexCharacters[index];
}

function generateNewColor(){
    let hexColorRep = "#";
    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor(Math.random()*hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }
    return hexColorRep;
}

// set up "hover" effect with addEventListener for when a mouse enters a "grid-element"
var fillGrid = document.getElementsByClassName("grid-element");

for(let i = 0; i < fillGrid.length; i++){
    fillGrid[i].addEventListener("mouseover", function(){
        const newColor = generateNewColor();
        fillGrid[i].classList.add("filled-element");
        this.style.backgroundColor = newColor;
    });
}

// on click event, removes filled element color
for(let i = 0; i< fillGrid.length; i++){
    fillGrid[i].addEventListener("click", function(){
        fillGrid[i].classList.remove("filled-element")
        this.style.backgroundColor = null;
    });
}
})


