// Função para limpar o visor da calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
    document.querySelector('.result-preview').textContent = ''; // Limpa o resultado prévio
}

// Função para adicionar um caractere ao visor da calculadora
function appendToDisplay(character) {
    document.getElementById('display').value += character;
    calculatePreview(); // Calcula o resultado prévio
}

// Função para calcular o resultado da expressão no visor
function calculate() {
    var expression = document.getElementById('display').value;

    try {
        var result = eval(expression); // Avalia a expressão usando a função eval do JavaScript
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro'; // Em caso de erro, exibe 'Erro' no visor
    }
}

// Função para alternar entre inserir um parêntese de abertura ou de fechamento
function toggleParentheses() {
    var display = document.getElementById('display');
    var currentValue = display.value;

    // Verifica se o último caractere do valor atual é um número ou um parêntese de fechamento
    if (currentValue === '' || isOperator(currentValue.charAt(currentValue.length - 1)) || currentValue.charAt(currentValue.length - 1) === '(') {
        // Se sim, insere um parêntese de abertura
        display.value += '(';
    } else if (currentValue.charAt(currentValue.length - 1) === ')') {
        // Se o último caractere for um parêntese de fechamento, insere um operador de multiplicação e um parêntese de abertura
        display.value += '*(';
    } else {
        // Se não, insere um parêntese de fechamento
        display.value += ')';
    }
}

// Função para alternar entre transformar o número em positivo ou negativo
function toggleSign() {
    var display = document.getElementById('display');
    var currentValue = display.value;

    // Verifica se o valor atual começa com um sinal de menos (-)
    if (currentValue.startsWith('-')) {
        // Se sim, remove o sinal de menos
        display.value = currentValue.substring(1);
    } else {
        // Se não, adiciona um sinal de menos
        display.value = '-' + currentValue;
    }
}

// Função auxiliar para verificar se um caractere é um operador
function isOperator(character) {
    return ['+', '-', '*', '/'].indexOf(character) !== -1;
}
