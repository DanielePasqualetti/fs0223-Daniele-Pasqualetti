class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  // Creazione di istanze della classe User
  const user1 = new User("Alice", "Rossi", 30, "Roma");
  const user2 = new User("Bob", "Verdi", 25, "Milano");
  const user3 = new User("Charlie", "Bianchi", 30, "Firenze");
  
  // Esempio di utilizzo del metodo di confronto dell'età
  console.log(user1.compareAge(user2)); // Output: Alice è più vecchio di Bob
  console.log(user1.compareAge(user3)); // Output: Alice ha la stessa età di Charlie
  console.log(user2.compareAge(user3)); // Output: Bob è più giovane di Charlie
  