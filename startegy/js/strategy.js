class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }
  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }
  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}
class FoeringSaleStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }
  getDollarPrice() {
    return 20;
  }
}

const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountStrategy(0.16, 3);
const foreingSale = new FoeringSaleStrategy();
const sale = new SaleContext(regularSale);
console.log(sale.calculate(10));
sale.setStrategy(discountSale);
console.log(sale.calculate(10));
sale.setStrategy(foreingSale);
console.log(sale.calculate(10));

const data = [
  {
    name: "CORONA",
    country: "Mexico",
    info: "https://californiaranchmarket.com/cdn/shop/products/001740.jpg?v=1614673997",
  },

  {
    name: "MICHELOB",
    country: "Mexico",
    info: "https://californiaranchmarket.com/cdn/shop/products/006034_31bdc8af-3807-427f-8dab-a8f5a99d4159.jpg?v=1621448776",
  },
  {
    name: "INSURGENTE",
    country: "Mexico",
    info: "https://californiaranchmarket.com/cdn/shop/products/101875.jpg?v=1621448839",
  },
];
class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }
  setStrategy() {
    this.strategy = this.strategy;
  }
  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHtml = data.reduce((ac, item) => {
      return (
        ac +
        `<div id="content">   <h2>${item.name} </h2> <p>${item.country} </p></div <hr/>`
      );
    }, "");
  }
}
const info = new InfoContext(new ListStrategy(), data, content);
