class Person {
  constructor(name, lastName, age, country, city, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }
  getFullName() {
    return this.name + " " + this.lastName;
  }
}
class FormBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }
}
