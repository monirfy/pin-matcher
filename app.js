function generatePin() {
    const getPin = Math.trunc(Math.random() * (9999 - 1000) + 1000);
    document.querySelector('#typePin').value = '';
    const pinNumber = document.querySelector('.pin-num');
    pinNumber.textContent = getPin;
}

// Pin Verify
function verifyPin() {
    const pinNumber = document.querySelector('.pin-num').textContent;
    const typedPin = document.querySelector('#typePin').value;
    if (pinNumber === typedPin) {
        document.getElementById('typePin').classList = 'success';
        displayMessage('block', 'none');
    } else {
        document.getElementById('typePin').classList = 'error';
        displayMessage('none', 'block');
    }
}
// Display Error Message
function displayMessage(successMessgae, warningDisplay) {
    const correctPin = document.getElementById('pinSucess');
    correctPin.style.display = successMessgae;
    const inCorrectPin = document.getElementById('pinWrong');
    inCorrectPin.style.display = warningDisplay;
}

// Handle Calculator Button Event
const buttonContainer = document.getElementById('digits-container');

buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            document.querySelector('#typePin').value = '';
        }
    } else {
        const typedInput = document.getElementById('typePin');
        typedInput.value = typedInput.value + digit;
    }
});
