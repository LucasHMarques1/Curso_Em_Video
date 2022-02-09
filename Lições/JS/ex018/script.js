var numeros = [];
var resposta = document.getElementById("resposta");
var num_maior = null;
var num_menor = 100;
var valor_tudo = null;
var media = null;

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar_numero() {
    let numero = document.getElementById("numero");
    let select = document.getElementById("numeros_adicionados");
    resposta.innerHTML = '';

    if(isNumero(numero.value) && !inLista(numero.value, numeros)){
        select.innerHTML += `<option>Valor ${numero.value} adicionado. </option>`
        numeros.push(Number(numero.value));
    } else {
        alert("Valor Inválido ou já cadastrado na lista");
    }
}

function finalizar() {
    for (num = 0; num < Number(numeros.length); num++) {
        valor_tudo += numeros[num]
        if (num_maior < numeros[num]) {
            num_maior = numeros[num];
        }
        if (num_menor > numeros[num]) {
            num_menor = numeros[num];
        }
    }
    media = valor_tudo / Number(numeros.length);

    resposta.innerHTML = `<p>Ao todo, temos ${Number(numeros.length)} números cadastrados</p>`;
    resposta.innerHTML += `<p>O maior valor informado foi ${num_maior}.</p>`;
    resposta.innerHTML += `<p>O menor valor informado foi ${num_menor}.</p>`;
    resposta.innerHTML += `<p>Somando todos os valores, temos ${valor_tudo}.</p>`;
    resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}