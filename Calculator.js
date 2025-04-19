const firstValue = document.querySelector("#firstValue");
const operator = document.querySelector("#operator");
const secondValue = document.querySelector("#secondValue");
const result = document.querySelector("#result");
const numberBtns = document.querySelectorAll(".numberBtn");
const operationBtns = document.querySelectorAll(".operationBtn");
const clearScreenBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const resultBtn = document.querySelector("#resultBtn");

let screenCleared = false;
let operationSelected = false;

clearScreenBtn.addEventListener("click", () => {

    firstValue.textContent = "";
    operator.textContent = "";
    operationSelected = false;
    secondValue.textContent = "";
    screenCleared = true;
})

const selectOperation = (firstNumber, operation, secondNumber) => {
    switch (operation) {
        case "+": return firstNumber + secondNumber;
        case "-": return firstNumber - secondNumber;
        case "x": return firstNumber * secondNumber;
        case "/": return firstNumber / secondNumber;

    }
}

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (!operationSelected) {

            firstValue.textContent += button.innerHTML;
        } else if (operationSelected) {
            secondValue.textContent += button.innerHTML;
        }
    })
})

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        operator.textContent = button.innerHTML;
        operationSelected = true;
    })
})

const operate = (firstNumber, operation, secondNumber) => {
    firstNumber = parseInt(firstValue.textContent);
    operation = operator.textContent;
    secondNumber = parseInt(secondValue.textContent);

    result.textContent = selectOperation(firstNumber, operation, secondNumber);

    firstValue.textContent = "";
    secondValue.textContent = "";
    operator.textContent = "";
    operationSelected = false;

    return result.textContent;
}

resultBtn.addEventListener("click", () => {
    operate(firstValue, operator, secondValue);
});
