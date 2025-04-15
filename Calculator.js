const firstValue = document.querySelector("#firstValue");
const operator = document.querySelector("#operator");
const secondValue = document.querySelector("#secondValue");
const numberBtns = document.querySelectorAll(".numberBtn");
const operationBtns = document.querySelectorAll(".operationBtn");
const clearScreenBtn = document.querySelector("#clearBtn");
const resultBtn = document.querySelector("#resultBtn");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (operator.textContent === "") {
            firstValue.textContent += button.innerHTML;
        } else {
            secondValue.textContent += button.innerHTML;
        }
    });
});

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (firstValue.textContent !== "" && operator.textContent === "") {
            operator.textContent = button.innerHTML;
        }
    });
});


clearScreenBtn.addEventListener("click", () => {
    firstValue.textContent = ""
    secondValue.textContent = "";
    operator.textContent = "";
    result.textContent = "";
});


const performOperation = (number1, operator, number2) => {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "x":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}

const result = document.querySelector("#result");

resultBtn.addEventListener("click", () => {
    const num1 = parseFloat(firstValue.textContent);
    const num2 = parseFloat(secondValue.textContent);

    if (firstValue.textContent === "" || operator.textContent === "" || secondValue.textContent === "") {
        return;
    }

    const answer = performOperation(num1, operator.textContent, num2);

    result.textContent = answer;
    firstValue.textContent = "";
    secondValue.textContent = "";
    operator.textContent = "";
});

