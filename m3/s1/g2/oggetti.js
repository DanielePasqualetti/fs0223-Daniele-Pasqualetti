"use strict";
{
    //Modalità js
    let user = {
        nome: 'mario',
        cognome: 'rossi'
    };
    console.log(user.nome);
    //Modalità ts
    //anni è una prop facoltativa
    let userTipizzato = {
        nome: 'mario',
        cognome: 'rossi'
    };
    //quando si lavora con gli oggetti ts vuole avere certezza della forma di ogni oggetto
}
{
    class User {
        constructor(_nome, _cognome, _anni) {
            this.nome = _nome;
            this.cognome = _cognome;
            this.anni = _anni;
        }
    }
    //posso creare un oggetto a mano
    let userTipizzato = {
        nome: 'mario',
        cognome: 'rossi'
    };
    //posso istanziare una classe
    let userTipizzato2 = new User('Maria', 'Bianchi');
}
//# sourceMappingURL=oggetti.js.map