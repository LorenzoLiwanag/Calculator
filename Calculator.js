const firstValue = document.querySelector("#firstValue");
const operator = document.querySelector("#operator");
const secondValue = document.querySelector("#secondValue");
const numberBtns = document.querySelectorAll(".numberBtn");
const operationBtns = document.querySelectorAll(".operationBtn");
const decimalBtn = document.querySelector("#decimalBtn");
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

deleteBtn.addEventListener("click", () => {
    if (!operationSelected && firstValue.textContent.length > 0) {
        firstValue.textContent = firstValue.textContent.slice(0, -1);
    } else if (operationSelected && secondValue.textContent.length > 0) {
        secondValue.textContent = secondValue.textContent.slice(0, -1);
    }
});


decimalBtn.addEventListener("click", () => {
    if (decimalBtn.innerHTML === "." && 
        ((!operationSelected && firstValue.textContent.includes(".")) ||
         (operationSelected && secondValue.textContent.includes(".")))) {
        return;
    }

    if (!operationSelected) {
        firstValue.textContent += decimalBtn.innerHTML;
    } else {
        secondValue.textContent += decimalBtn.innerHTML;
    }
});


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
        if (operator.textContent === "") {
            operator.textContent = button.innerHTML;
            operationSelected = true;
        }
    })
})

const operate = () => {
    firstNumber = parseFloat(firstValue.textContent);
    operation = operator.textContent;
    secondNumber = parseFloat(secondValue.textContent);

    if (isNaN(firstNumber) || isNaN(secondNumber)) return;

    const output = selectOperation(firstNumber, operation, secondNumber);

    firstValue.textContent = output.toString();
    secondValue.textContent = "";
    operator.textContent = "";
    operationSelected = false;

}

resultBtn.addEventListener("click", operate);
