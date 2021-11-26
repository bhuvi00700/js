function User(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
}

var person = new User("John", "Smith", 1985);
var person_two = new User("Jim", "Sean", 1995);
var person_three = new User("Tom", "Cruise", 1974);

console.log(person);
console.log(person_two);
console.log(person_three);
