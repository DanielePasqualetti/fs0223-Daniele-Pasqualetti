//mi creo una classe che implementa l'interfaccia ISmartphone
var Smartphone = /** @class */ (function () {
    function Smartphone(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "Il suo credito residuo \u00E8 di ".concat(this.carica.toFixed(2), " Euro");
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costo = this.costoMinuto * min;
        if (this.carica > costo) {
            this.carica -= costo;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficente per effettuare la chiamata!");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
console.log("Informazioni del primo telefono");
var phone1 = new Smartphone(0);
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
var phone2 = new Smartphone(0);
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
var phone3 = new Smartphone(5);
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
