function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex"); //radsex[0] = Masculino e radsex[1] = Feminino
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute("src", "fotos/bebe_homem.jpg");
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "fotos/jovem_homem.jpg");
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "fotos/homem.jpg");
            } else {
                //idoso
                img.setAttribute("src", "fotos/idoso_homem.jpg");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute("src", "fotos/bebe_mulher.jpg");
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "fotos/jovem_mulher.jpg");
            } else if (idade < 50) {
                //adulta
                img.setAttribute("src", "fotos/mulher.jpg");
            } else {
                //idosa
                img.setAttribute("src", "fotos/idosa_mulher.jpg");
            }
        }
        res.innerHTML = genero;
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}