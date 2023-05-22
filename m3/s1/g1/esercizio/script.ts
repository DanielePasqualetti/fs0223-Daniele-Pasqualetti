function randomNumber(): number {
 return Math.floor(Math.random() * (100 - 1) + 1);
}

function closest(
 player1: number,
 player2: number,
 correctNumb: number
): string {
 const player1diff = Math.abs(correctNumb - player1);
 const player2diff = Math.abs(correctNumb - player2);

 if (player1 === correctNumb) {
  return "Il giocatore 1 ha indovinato correttamente il numero!";
 } else if (player2 === correctNumb) {
  return "Il giocatore 2 ha indovinato correttamente il numero!";
 } else if (player1diff < player2diff) {
  return "Il giocatore 1 si è avvicinato di più al risultato!";
 } else if (player2diff < player1diff) {
  return "Il giocatore 2 si è avvicinato di più al risultato!";
 } else {
  return "PAREGGIO! Entrambi sono alla stessa distanza dal numero randomico";
 }
}

const player1num = 29;
const player2num = 71;
const currentNumb = randomNumber();

console.log("Numero casuale:", currentNumb);
console.log("Risultato:", closest(player1num, player2num, currentNumb));
