function printNumber(data) {
    updateInput(data.value);
}

function printOperator(data) {
    updateInput(` ${data.value} `);
}

function updateInput(newValue, clear = false) {
    var div = document.getElementById('data');
    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function printOperation() {
    var data = document.getElementById('data').value;
    var result = validateOperator(data.split(' '));
    updateInput(result, true)
}

function validateOperator(arrayData) {
    var result;
    var number1 = Number(arrayData[0]);
    var number2 = Number(arrayData[2]);
    switch (arrayData[1]) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break
        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break
    }
    return result;
}

function clearInput() {
    updateInput('', true)
}


function sumarDosNumeros(numero1, numero2) {
    /**
     * && => Cuando se cumplen las dos
     * 
     * || => una se debe cumplir
     */
    if (numero1 || numero2) {
        /**
         * cafe
         * lugar
         * hora
         */
    }
}

//sumarDosNumeros(5, 5);