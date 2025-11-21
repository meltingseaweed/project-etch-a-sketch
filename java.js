//const { createElement } = require("react");

const container = document.querySelector("#container");

let numOfBoxes = 64;

function createboxes (num) {
    for (i = 0; i < numOfBoxes; i++) {
    const boxes= document.createElement("div");
    boxes.classList.toggle("box");
    container.appendChild(boxes);
}
}
createboxes(numOfBoxes);

const boxes = document.querySelectorAll(".box")
addColor(boxes);
removeColor(boxes);

// Challenge 1: Randomize colors for mouse event
// Challenge 2: Darkening Effect / Increase Opacity
let opac = 0.1;
function addColor (boxes) {
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        // Randomize color
        let r = Math.floor(Math.random() * 256 );
        let g = Math.floor(Math.random() * 256 );
        let b = Math.floor(Math.random() * 256 );
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        box.style.opacity = `${opac}`;
        if (opac < 1) {
            opac += 0.1;
        }
    });
});
}

function removeColor (boxes) {
boxes.forEach(box => {
    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "grey";
    });
}); 
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    numOfBoxes = prompt("Enter a number between 1 and 100");
    console.log(numOfBoxes);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    opac = 0.1;
    createboxes(numOfBoxes);
    const boxes = document.querySelectorAll(".box")
    addColor(boxes);
    removeColor(boxes);
})
