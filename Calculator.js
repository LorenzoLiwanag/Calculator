const display = document.querySelector("#calculator-display");
const numberButtons = document.querySelectorAll(".number-btn");
const clearButton = document.querySelector("#clear-btn");
const numbersContainer = document.querySelector("#numbers-container");
const operationsContainer = document.querySelector("#operations-container");
const deleteBtnsContainer = document.querySelector("#delete-buttons-container");


const displayNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numberSize = numbers.length;

    for (let i = 0; i < numberSize; i++) {
        const numberBtn = document.createElement("button")
        numberBtn.classList.add("number-btn");
        numberBtn.textContent = numbers[i];
        numbersContainer.appendChild(numberBtn);
    }
}

const displayOperations = () => {
    const operations = ['+', '-', '*', '/',];
    const operationsSize = operations.length;

    for (let i = 0; i < operationsSize; i++) {
        const operationBtn = document.createElement("button");
        operationBtn.classList.add("operation-btn");
        operationBtn.textContent = operations[i];
        operationsContainer.appendChild(operationBtn);

    }

}


const displayDeleteBtns = () => {
    const deleteButtons = ["Clear", "Del"];
    const deleteButtonsSize = deleteButtons.length;

    for (let i = 0 ; i < deleteButtonsSize; i++) {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = deleteButtons [i];
        deleteBtnsContainer.appendChild(deleteBtn); 
    }
}

displayNumbers();
displayOperations();
displayDeleteBtns();

const displayToScreen = () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach (button => {
        button.addEventListener("click", () => {
            display.textContent = button.innerHTML;
        })
    })
}

displayToScreen();
