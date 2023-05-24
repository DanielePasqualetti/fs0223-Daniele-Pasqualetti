//funzioni assegnate ad una variabile

const prova: Function = function (): void {
 //void => la funzione non restituisce dati
 console.log("test");
};
//

//funzioni classiche

function funzioneProva(): string {
 return "Stringa restituita";
}

funzioneProva();

//funzioni parametriche

function creaHTMLBold(testo: string) {
 document.write(`<b>${testo}</b>`);
}

//il dollaro è il nome della nostra funzione in questo caso
function $(selettore: string): HTMLElement | null {
 return document.querySelector(selettore);
}

//il punto di domanda interrompe la lettura dell'oggetto qualora fosse null
$("#test")?.style.color;

//un altro modo è
let test = $("#test");
if (test) {
 test.style.color;
}

//funzioni freccia

// let test1 = function () {
//  return "ciao";
// };

let test1 = (): string => "ciao";

//la tipizzazione dei parametri obbliga ad usare le tonde anche quando abbiamo un solo parametro
let moltiplica = (a: number): number => a * 2;

//funzione freccia void

let test2 = (): void => {
 console.log("prova void");
};

//parametri facoltativi
//b è facoltativo ed ha un valore di default
//c è facoltativo ma non ha un valore di default
let somma = function (a: number, b: number = 0, c?: number): number {
 if (!c) c = 0; //gestisco la mancanza di c per spegnere l'errore nel return
 return a + b + c;
};

somma(1, 2);
