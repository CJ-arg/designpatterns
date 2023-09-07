function sum(a, b) {
  return a + b;
}
let res = sum(2, 2);
console.log(res);
let res2;
const fsum = sum;

res2 = fsum(5, 6);
console.log(res2);

function operation(fn, a, b) {
  console.log("accion");
  console.log(fn(a, b));
}
operation(sum, 10, 5);

let funcionAnonima = () => console.log("FA");
funcionAnonima();
operation((x, z) => x * z, 10, 5);
operation(
  (a, b) => {
    const c = a + b;
    return c * 2;
  },
  2,
  2
);

//foreach
const names = ["pedro", "pablo", "luis"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort();
console.log(names);

const namesToUpper = names.map((name) => name.toUpperCase());
console.log(namesToUpper);
console.log(names);

//reduce
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((ac, number) => ac + number, 0);
console.log(total);

// programacion orientada a OBJETOS
// Clase
class Drink {
  constructor(name) {
    this.name = name;
  }
  info() {
    return "El nombre de la bebida es: " + this.name;
  }
}
//funcional
function Drink2(name) {
  this.name = name;
  this.info = function () {
    return "El nombre de la bebida es: " + this.name;
  };
}
const drink = new Drink("agua");
console.log(drink.info());

const drink2 = new Drink2("agua2");
console.log(drink2.info());

// herencia
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name);
    this.alcohol = alcohol;
  }
  info() {
    return super.info() + " " + this.alcohol;
  }
}
const beer = new Beer("Quilmes", 7);
console.log(beer.info());
