const screen = document.getElementById("display-screen");
const numberButtons = document.querySelectorAll(".numberBtn");
const operationButtons = document.querySelectorAll(".operationBtn");
const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");

numberButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        screen.value += button.innerHTML;
    });
})

operationButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        screen.value += button.innerHTML;
    });
})

deleteBtn.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
})

clearBtn.addEventListener("click", () => {
    screen.value = null;
})

const add = (x, y) => {}