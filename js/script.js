const input = document.querySelector("input");
const buttons = document.querySelectorAll(".insert");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input.value += button.value;
    })
})

function calculator() {
    const div = document.querySelector(".input");
    const element = document.querySelector(".input > #result");

    if (div.contains(element)) {
        element.remove();
    }
    
    var result = parseFloat(eval(input.value));
    const input_result = document.createElement("input");
    input_result.readOnly = "true";
    input_result.id = "result";
    input_result.value = result;
    div.appendChild(input_result)
    
}

function deleteLastNumber() {
    input.value = input.value.substring(0, input.value.length-1);
}

function deleteAll() {
    input.value = input.value.substring(0, input.value.length-input.value);
}