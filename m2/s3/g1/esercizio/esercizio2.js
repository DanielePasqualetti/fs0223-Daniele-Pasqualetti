class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  const petForm = document.getElementById('petForm');
  const petList = document.getElementById('petList');

  petForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);

    const li = document.createElement('li');
    li.textContent = `L'animale di ${pet.ownerName} si chiama ${pet.petName}, è un ${pet.species}, più precisamente un ${pet.breed}`;
    petList.appendChild(li);

    petForm.reset();
  });