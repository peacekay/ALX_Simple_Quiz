
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if(number2 === 0) {
        return "cannot divide by zero"
    }
    return number1 / number2;
}

// update results
function updateResult(result) {
    document.getElementById("calculation-result").textContent = result;
}

// input values

function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return {number1, number2};
}

// event listener

document.getElementById("add").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    updateResult(add(number1, number2));
})

document.getElementById("subtract").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    updateResult(subtract(number1, number2));
})

document.getElementById("multiply").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    updateResult(multiply(number1, number2));
})

document.getElementById("divide").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    updateResult(add(number1, number2));
})
