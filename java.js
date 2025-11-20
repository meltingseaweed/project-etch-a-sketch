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
addcolor(boxes);
removeColor(boxes);
function addcolor (boxes) {
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "orange";
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
    createboxes(numOfBoxes);
    const boxes = document.querySelectorAll(".box")
    addcolor(boxes);
    removeColor(boxes);
})