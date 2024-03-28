

const display = document.getElementById('display');

function apagar() {
    display.value = '';
}

function appendToDisplay(num) {
    display.value += num;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } 
    catch(error) {
        display.value = 'Error';
    }
}