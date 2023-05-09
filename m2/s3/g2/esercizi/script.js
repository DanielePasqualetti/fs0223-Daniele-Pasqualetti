//mi creo il riferimento all'input field e ai bottoni del form
let nameField = document.querySelector("#name")
let saveButton = document.querySelector("#save-button")
let deleteButton = document.querySelector("#delete-button")


// inserisco un comportamento custom al click
saveButton.addEventListener("click", function(e){
    //prevengo il default del bottone del form
    e.preventDefault()
    //creo una nuova variabile del contenuto del input
    let nameFieldContent = nameField.value
    //console.log("Questo è il testo dell'input:", nameFieldContent)
    //salvo il contenuto dell'input nel local storage
    localStorage.setItem("name", nameFieldContent)
})

deleteButton.addEventListener("click", function(e){
    //prevengo il default del bottone del form
    e.preventDefault()
    //rimuovo il contenuto dell'input nel local storage
    localStorage.removeItem("name")
    //rimuovo il contenuto dell'input anche dall'input stesso
    nameField.value = ""
})

//////////////////////////////////////////////////////////////

//creo una funzione per avviare il contatore
let startCounter = function () {
    //verifico con getItem se il valore del contatore è gia presente in sessionStorage
    if (sessionStorage.getItem("counterValue")) {
    //se presente recupera il valore e lo converte in un numero intero
    let counter = parseInt(sessionStorage.getItem("counterValue"))
    //aggiorno il contatore nella pagina
    document.querySelector("#counter").textContent = "Questa finestra è aperta da " + counter + " secondi."

    //aggiorno il contatore ogni secondo
    setInterval(function(){
        counter++
        //aggiorno il contatore della pagina
        document.querySelector("#counter").textContent = "Questa finestra è aperta da " + counter + " secondi."
        //salvo con setItem il valore aggiornato in sessionStorage
        sessionStorage.setItem("counterValue", counter)
    }, 1000)
    } else {
        //se il valore del contenitore non è presente in sessionStorage, imposto a 0
        let counter = 0
        //aggiorno il contatore della pagina
        document.querySelector("#counter").textContent = "Questa finestra è aperta da " + counter + " secondi."

        //aggiorno il contatore ogni secondo
    setInterval(function(){
        counter++
        //aggiorno il contatore della pagina
        document.querySelector("#counter").textContent = "Questa finestra è aperta da " + counter + " secondi."
        //salvo con setItem il valore aggiornato in sessionStorage
        sessionStorage.setItem("counterValue", counter)
        }, 1000)
    }
}

//avvio il contatore quando la pagina viene caricata
window.addEventListener("load", startCounter)