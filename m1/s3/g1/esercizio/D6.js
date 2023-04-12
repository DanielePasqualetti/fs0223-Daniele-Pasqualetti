/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1, l2) {
    return l1 * l2
}
console.log(area(10,12));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
    if (x != y) {
        return x + y
    }else {
        return (x + y)*3
    }
}
console.log(crazySum(2,5));
console.log(crazySum(2,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a, b=19) {
    if (a > b) {
        return (a - b)*3
    }else{
        return (b - a)
    }
}
console.log(crazyDiff(25));
console.log(crazyDiff(4));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n > 20 && n <= 100 || n == 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(1));
console.log(boundary(56));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith("EPICODE ")) {
        return stringa
    } else{
        return "EPICODE " + stringa

    }
}
console.log(epify("Ciao Michele"));
console.log(epify("EPICODE Ciao Michele"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(positivo) {
    if (positivo % 3 == 0 || positivo % 7 == 0 )
    {
        return "divisibile"
    } else {
        return "non divisibile"
    }
}
console.log(check3and7(18));
console.log(check3and7(14));
console.log(check3and7(16));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    return stringa.split("").reverse().join("")
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(scioglilingua) {
    let wordsArray = scioglilingua.split(" ");//divido tra loro le parole dove c'è lo spazio
    let capitalizedWords = [];//creo un array vuoto che restituirò alla fine della funzione
    for(let word of wordsArray){//ciclo l'array

        let firstLetter = word[0].toUpperCase();//ottengo la prima lettera della parola che sto ciclando e la trasformo in maiuscolo
        let parolaSenzaIniziale = word.slice(1);//prelevo la sottostringa della parola, contenente tutti i caratteri a partire dal secondo (compreso)
        word = firstLetter + parolaSenzaIniziale;//concateno l'iniziale maiuscola con il resto della parola
        capitalizedWords.push(word);//inserisco nell'array
    }
    return capitalizedWords.join(" ");
}

let risultato = upperFirst("sopra la panca la capra campa");

console.log(risultato);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1)
}
console.log(cutString("Antonio"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() *11))
}
console.log(giveMeRandom(10));