let display = document.getElementById('display');
let result = '';

function appendToDisplay(value) {
    result += value;
    display.value = result;
}

function clearDisplay() {
    result = '';
    display.value = '';
}

function calculateResult() {
    try {
        result = eval(result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
