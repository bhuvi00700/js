function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
}

var person = new Person("John", "Smith", 1985);
var person_two = new Person("Jim", "Sean", 1995);
var person_three = new Person("Tom", "Cruise", 1974);

console.log(person);
console.log(person_two);
console.log(person_three);
