function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Erro';
    }
}

// Permitir teclado
document.getElementById('result').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calculate();
    }
});
