function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}
function closest(player1, player2, correctNumb) {
    var player1diff = Math.abs(correctNumb - player1);
    var player2diff = Math.abs(correctNumb - player2);
    if (player1 === correctNumb) {
        return "Il giocatore 1 ha indovinato correttamente il numero!";
    }
    else if (player2 === correctNumb) {
        return "Il giocatore 2 ha indovinato correttamente il numero!";
    }
    else if (player1diff < player2diff) {
        return "Il giocatore 1 si è avvicinato di più al risultato!";
    }
    else if (player2diff < player1diff) {
        return "Il giocatore 2 si è avvicinato di più al risultato!";
    }
    else {
        return "PAREGGIO! Entrambi sono alla stessa distanza dal numero randomico";
    }
}
var player1num = 29;
var player2num = 71;
var currentNumb = randomNumber();
console.log("Numero casuale:", currentNumb);
console.log("Risultato:", closest(player1num, player2num, currentNumb));
