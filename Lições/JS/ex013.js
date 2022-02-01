var agora = new Date();
var diaSem = agora.getDay();

console.log(`Número corresponde ao dia da semana: ${diaSem}`);
/* 
Domingo       [0]
Segunda-Feira [1]
Terça-Feira   [2]
Quarta-Feira  [3]
Quinta-Feira  [4]
Sexta-Feira   [5]
Sabádo        [6]
*/

switch (diaSem) {
    case 0:
        console.log("Hoje é Domingo");
        break
    case 1:
        console.log("Hoje é Segunda-Feira");
        break
    case 2:
        console.log("Hoje é Terça-Feira");
        break
    case 3:
        console.log("Hoje é Quarta-Feira");
        break
    case 4:
        console.log("Hoje é Quinta-Feira");
        break
    case 5:
        console.log("Hoje é Sexta-Feira");
        break
    case 6:
        console.log("Hoje é Sabado");
        break
    default:
        console.log("[ERRO] Dia Inválido!");
        break
}