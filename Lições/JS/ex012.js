var agora = new Date()
var hora = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`
console.log(`Agora são exatamente ${hora}.`);
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora <= 18) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite");
}