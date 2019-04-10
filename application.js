function defineVars() {
    form = document.getElementsByTagName('form')[0];
    firstInput = document.getElementsByName('firstInput')[0];
    secondInput = document.getElementsByName('secondInput')[0];
}

function validateNumbers() {
    if (!isDecimal(firstInput.value)) {
        document.getElementById('firstValidator').innerText = 'Please enter a valid decimal value';
    }
    else {
        document.getElementById('firstValidator').innerText = '';
    }
    if (!isBinary(secondInput.value)) {
        document.getElementById('secondValidator').innerText = 'Please enter a valid binary value';
    }
    else {
        document.getElementById('secondValidator').innerText = '';
    }
}

function decToBin(decimalInput) {
    decimalInput = Number(decimalInput)
    let numberRemaining = decimalInput
    let binaryOutput = ''
    for (let i = 0; Math.pow) {//find highest value

    }
    for (let i = 0; Math.pow(2,i) < decimalInput; i++) {
        if (numberRemaining > Math.pow(2,i)) {
            binaryOutput += '1'
        }
    }
    return answer;
}

function binToDec(binaryInput) {
    if (typeof binaryInput != 'string') {
        binaryInput += '';
    }
    let answer = 0;
    for (let i = 0; i < binaryInput.length; i++) {
        if (binaryInput[binaryInput.length - (i + 1)] == '1') {
            answer += Math.pow(2,i);
        }
    }
    return answer;
}

function isDecimal(number) {
    if (typeof number != 'string') {
        number += '';
    }
    if (number == '') {
        return false;
    }
    if (/\D+/.test(number)) {
        return false;
    }
    return true;
}

function isBinary(number) {
    if (typeof number != 'string') {
        number += '';
    }
    if (number == '') {
        return false;
    }
    for (let i = 0; i < number.length; i++) {
        if (number[i] != '1' && number[i] != '0') {
            return false;
        }
    }
    return true;
}
