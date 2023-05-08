//creo la lista vuota da popolare con i pet che registrerò nel form
let petList = [];

//seleziono dall'HTML i 4 input field
let petNameField = document.querySelector('#petName')
let ownerNameField = document.querySelector('#ownerName')
let speciesField = document.querySelector('species')
let breedField = document.querySelector('breed')

//creo la classe pet, che genererà oggetti tutti uguali di tipo pet
class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
}


const test = new Pet('fufy','stefano','topino','boh')
console.log(test);