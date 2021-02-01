function generatePin() {
    const getPin = Math.trunc(Math.random() * (9999 - 1000) + 1000);
    document.querySelector('#typePin').value = '';
    const pinNumber = document.querySelector('.pin-num');
    pinNumber.textContent = getPin;
    document.getElementById('bodySuccess').style.backgroundColor = '#10101b';
}

// Pin Verify
function verifyPin() {
    const pinNumber = document.querySelector('.pin-num').textContent;
    const typedPin = document.querySelector('#typePin').value;

    if (pinNumber === typedPin) {
        document.getElementById('typePin').classList = 'success';
        displayMessage('block', 'none');
        document.getElementById('bodySuccess').style.backgroundColor = '#4cd137';
    } else {
        displayMessage('none', 'block');
        let count = Number(document.getElementById('countTry').textContent) - 1;
        if (count > 0 || count == 0) {
            document.getElementById('countTry').textContent = count;
        } else {
            document.getElementById('tryblock').style.display = 'block';
            document.getElementById('generatePin').style.display = 'none';
        }
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

function backSpace() {
    var currentInput = document.getElementById('typePin').value;
    document.getElementById('typePin').value = currentInput.substr(0, currentInput.length - 1);
}
