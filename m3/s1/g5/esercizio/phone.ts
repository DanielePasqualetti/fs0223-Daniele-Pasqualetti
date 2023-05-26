//creo un'interfaccia che mi descrive le proprietà e i metodi che un oggetto Smartphone dovrà avere.
interface ISmartphone {
 carica: number; //credito residuo disponibile per le chiamate
 numeroChiamate: number; //numero chiamate effettuate
 costoMinuto: number; //costo per minuto di chiamata

 ricarica(euro: number): void; //incremento il credito residuo del valore indicato
 numero404(): string; //restituisce una stringa con il credito rimanente
 getNumeroChiamate(): number; //restituisce il numero di chiamate effettuate
 chiamata(min: number): void; //effettua virtualmente una chiamata, bisogna indicare il numero di minuti di durata della chiamata e riduce il credito residuo di conseguenza, se la chiamata parte incrementa il contatore delle chiamate
 azzeraChiamate(): void; //reimposta il contatore delle chiamate a zero.
}

//mi creo una classe che implementa l'interfaccia ISmartphone
class Smartphone implements ISmartphone {
 carica: number;
 numeroChiamate: number;
 costoMinuto: number;

 constructor(carica: number) {
  this.carica = carica;
  this.numeroChiamate = 0;
  this.costoMinuto = 0.2;
 }

 ricarica(euro: number): void {
  this.carica += euro;
 }

 numero404(): string {
  return `Il suo credito residuo è di ${this.carica.toFixed(2)} Euro`;
 }

 getNumeroChiamate(): number {
  return this.numeroChiamate;
 }

 chiamata(min: number): void {
  let costo = this.costoMinuto * min;
  if (this.carica > costo) {
   this.carica -= costo;
   this.numeroChiamate++;
  } else {
   console.log("Credito insufficente per effettuare la chiamata!");
  }
 }

 azzeraChiamate(): void {
  this.numeroChiamate = 0;
 }
}

console.log("Informazioni del primo telefono");
let phone1 = new Smartphone(0);
console.log(phone1);
phone1.ricarica(10);
console.log("Carica attuale", phone1.carica, "Euro");
phone1.chiamata(4);
phone1.chiamata(2);
console.log(phone1.getNumeroChiamate(), "chiamate effettuate");
phone1.azzeraChiamate();
console.log(phone1.getNumeroChiamate(), "chiamate effettuate dopo il reset");
console.log(phone1.numero404());

console.log("Informazioni del secondo telefono");
let phone2 = new Smartphone(0);
console.log(phone2);
phone2.ricarica(0);
console.log("Carica attuale", phone2.carica, "Euro");
phone2.chiamata(1);
phone2.ricarica(5);
phone2.chiamata(2);
console.log(phone2.getNumeroChiamate(), "chiamate effettuate");
phone2.azzeraChiamate();
console.log(phone2.getNumeroChiamate(), "chiamate effettuate dopo il reset");
console.log(phone2.numero404());

console.log("Informazioni del terzo telefono");
let phone3 = new Smartphone(5);
console.log(phone3);
phone3.ricarica(5);
console.log("Carica attuale", phone3.carica, "Euro");
phone3.chiamata(12);
phone3.chiamata(24);
phone3.chiamata(2);
phone3.chiamata(4);
console.log(phone3.getNumeroChiamate(), "chiamate effettuate");
phone3.azzeraChiamate();
console.log(phone3.getNumeroChiamate(), "chiamate effettuate dopo il reset");
console.log(phone3.numero404());
