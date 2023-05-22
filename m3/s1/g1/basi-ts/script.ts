console.log("hello world!");
console.log("hi");

let nome: string = "Mario";
let anni: number = 30;
let boolean: boolean = false;

let array: any[] = [20, "testo", true];
let arrayString: string[] = ["stringa"];
let arrayNumber: number[] = [12, 14, 234, 345, 543];

nome = "Marco";

let vuota: undefined | number;

vuota = 0;

/* tipizzazione oggetti */

let user: { nome: string } = {
 nome: "Mario",
};

console.log(user.nome);

//tipizzazione funzioni
let salutoVar: Function = (): void => {
 console.log("Ciao!");
};

function saluto(): void {
 console.log("Ciao!");
}

saluto();

function restituisciSaluto(): string {
 return "Ciao!";
}
