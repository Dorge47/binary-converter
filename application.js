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

function notParseInt(input) {
    let answer = 0;
    if (typeof input != 'string') {
        input += '';
    }
    for (i = 0; i < input.length; i++) {
        switch (input[input.length - (i + 1)]) {
            case '0':
                break;
            case '1':
                answer += Math.pow(10, i);
                break;
            case '2':
                answer += (2 * Math.pow(10, i));
                break;
            case '3':
                answer += (3 * Math.pow(10, i));
                break;
            case '4':
                answer += (4 * Math.pow(10, i));
                break;
            case '5':
                answer += (5 * Math.pow(10, i));
                break;
            case '6':
                answer += (6 * Math.pow(10, i));
                break;
            case '7':
                answer += (7 * Math.pow(10, i));
                break;
            case '8':
                answer += (8 * Math.pow(10, i));
                break;
            case '9':
                answer += (9 * Math.pow(10, i));
                break;
            default:
                return NaN;
        }
    }
    return answer;
}

function decToBin(decimalInput) {
    decimalInput = Number(decimalInput);
    if (decimalInput == 0) {
        return '0';
    }
    var lowestPower;
    var lowestIterator;
    let numberRemaining = decimalInput;
    let binaryOutput = '';
    for (let i = 0; Math.pow(2,i) <= decimalInput; i++) {//find lowest power of 2 greater than decimalInput
        secondLowestPower = Math.pow(2, (i + 1));
        secondLowestIterator = i;
    }
    for (let i = 0; i <= secondLowestIterator; i++) {
        if (Math.pow(2, (secondLowestIterator - i)) > numberRemaining) {
            binaryOutput += 0;
        }
        else {
            binaryOutput += 1;
            numberRemaining -= Math.pow(2, (secondLowestIterator - i));
        }
    }
    return binaryOutput;
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
