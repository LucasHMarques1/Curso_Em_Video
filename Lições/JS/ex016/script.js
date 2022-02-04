function contar() {
    let num_inicio = document.getElementById("txt_ini");
    let num_fim = document.getElementById("txt_fim");
    let num_passo = document.getElementById("txt_passo");
    let msg = document.getElementById("msg");

    if (num_inicio.value.length == 0 || num_fim.value.length == 0 || num_passo.value.length == 0) {
        msg.innerHTML = `Impossivel Contar! `;
        alert("[ERRO] Faltam dados! ");
    } else {
        msg.innerHTML = "Contando: <br>";

        let i = Number(num_inicio.value);
        let f = Number(num_fim.value);
        let p = Number(num_passo.value);

        if (p <= 0){ //Se o PASSO foi MENOR que 0 OU NUMERO NEGATIVO
            alert("Passo Inválido! Considerando PASSO 1");
            num_passo.value = 1;
            p = 1;
        }

        if (i < f) { //Se precisar fazer em Ordem Crescente
            for (let num = i; num <= f; num += p) {
                msg.innerHTML += `\u{1F449}${num} `;
            }
        } else { //Se precisar fazer em Ordem Decrescente
            for (let num = i; num >= f; num -= p) {
                msg.innerHTML += `\u{1F449}${num} `;
            }
        }
        msg.innerHTML += `\u{1F3C1}`; //Emoji Bandeira, Colocar sempre entre \u{codigo_emoji} |Site Emoji: https://unicode.org/emoji/charts/full-emoji-list.html
    }
}