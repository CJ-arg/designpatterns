console.log("Hola desde Typescript");

class DrinkTs {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  info(): string {
    return this.name;
  }
}
const drinkTs = new DrinkTs("jugo");
console.log(drinkTs.info());

//herencia

//interface
interface Product {
  price: number;
  getPrice(): string;
}

class BeerTs extends DrinkTs implements Product {
  private alcohol: number;
  price: number;
  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }
  getPrice(): string {
    return "$ " + this.price;
  }
  info(): string {
    return super.info() + " " + this.alcohol;
  }
}
// implementacion de interface
class Snack implements Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getPrice(): string {
    return "El precio es $ " + this.price;
  }
}
const beerTs = new BeerTs("Quilmes", 7, 800);
console.log(beerTs.info());
const products: Product[] = [
  new BeerTs("Corona", 6.5, 1000),
  new BeerTs("Bud", 6.5, 1000),
  new Snack("Doritos", 1000),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}
getPrices(products);
