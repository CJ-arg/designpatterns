// component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(commercialInfoProduct.getDetail());
