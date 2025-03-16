const display = document.querySelector("#calculator-display");

const numberButtons = document.querySelectorAll(".number-btn");
const clearButton = document.querySelector("#clear-btn");

numberButtons.forEach(numberButton => {
    display.value = "";
    numberButton.addEventListener("click", () => {
        display.value += numberButton.innerHTML;
    })
});


clearButton.addEventListener("click", () =>{
    display.value = "";
})
