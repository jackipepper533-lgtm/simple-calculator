// Get the display element
const display = document.getElementById('display');

// Append number to display
function appendNumber(num) {
    display.value += num;
}

// Append operator to display
function appendOperator(operator) {
    // Prevent multiple operators in a row
    const lastChar = display.value[display.value.length - 1];
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && display.value !== '') {
        display.value += operator;
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        // Use eval to calculate the expression (be careful with eval in production)
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        // Show error message if calculation fails
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1000);
    }
}

// Allow keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Numbers and operators
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});