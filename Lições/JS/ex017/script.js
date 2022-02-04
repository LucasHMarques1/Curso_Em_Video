function gerar_tabuada() {
    let numero = document.getElementById("num");
    let tabuada = document.getElementById("res_tabuada");

    if (numero.value.length == 0) {
        alert("[ERRO] Faltam dados! ");
    } else {
        tabuada.innerHTML = "";
        let num_tabuada = Number(numero.value);
        for (let num = 0; num <= 10; num++) {
            tabuada.innerHTML += (`<option value="${num}">${num_tabuada} x ${num} = ${num_tabuada * num}</option>`);
        }
    }
}