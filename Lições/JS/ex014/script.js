function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12){
        //Bom Dia!
        img.src = "fotos/manhã.jpg";
        document.body.style.background = "#e2cd9f";
    } else if(hora < 18){
        //Boa Tarde!
        img.src = "fotos/tarde.jpg";
        document.body.style.background = "green";
    } else{
        //Boa Noite!
        img.src = "fotos/noite.jpg";
        document.body.style.background = "black";
    }
}