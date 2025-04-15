const firstValue = document.querySelector("#firstValue");
const operator = document.querySelector("#operator");
const secondValue = document.querySelector("#secondValue");
const numberBtns = document.querySelectorAll(".numberBtn");
const operationBtns = document.querySelectorAll(".operationBtn");
const clearScreenBtn = document.querySelector("#clearBtn");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (firstValue.textContent === "") {
            firstValue.textContent = button.innerHTML;
        } else {
            secondValue.textContent = button.innerHTML;
        }
    })
})

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        operator.textContent = button.innerHTML;
    })
})

clearScreenBtn.addEventListener("click", () => {
    firstValue.textContent = ""
    secondValue.textContent = "";
    operator.textContent = "";
})