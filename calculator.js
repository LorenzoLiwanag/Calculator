const display = document.querySelector("#calculator-display");
const numberButtons = document.querySelectorAll(".number-btn");
const clearButton = document.querySelector("#clear-btn");
const numbersContainer = document.querySelector("#numbers-container");
const operationsContainer = document.querySelector("#operations-container");

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


const addNumberEventListeners = () => {
    document.querySelectorAll("number-btn").forEach(numberButton => {
        numberButton.addEventListener("click", () => {
            display.value += numberButton.innerHTML;
        })
    });


    clearButton.addEventListener("click", () => {
        display.value = "";
    })
}

const addOperationEventListeners = () => {
    document.querySelectorAll(".operation-btn").forEach(operationButton => {
        operationButton.addEventListener("click", () => {
            display.value += operationButton.innerHTML;
        });
    });

}

displayNumbers();
displayOperations();
addNumberEventListeners();
addOperationEventListeners();