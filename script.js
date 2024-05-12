function adicionarAoDisplay(valor) {
    document.getElementById('display').value += valor;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    var expressao = document.getElementById('display').value;
    var resultado = eval(expressao);
    document.getElementById('display').value = resultado;
}

function calcularRaiz() {
    var expressao = document.getElementById('display').value;
    var resultado = Math.sqrt(eval(expressao));
    document.getElementById('display').value = resultado;
}

function abrirParentese() {
    document.getElementById('display').value += '(';
}

function fecharParentese() {
    document.getElementById('display').value += ')';
}

    