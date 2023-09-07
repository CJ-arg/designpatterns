class SaleContext {
  constructor(strategy) {
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

const regularSale = new RegularSaleStrategy(0.16);
const sale = new SaleContext(regularSale);
console.log(sale.calculate(10));
