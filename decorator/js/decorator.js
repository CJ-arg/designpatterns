class ProductComponent {
  constructor(name) {
    this.name = name;
  }
  getDetail() {
    return `${this.name}`;
  }
}

class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }
  getDetail() {
    this.productComponent.getDetail();
  }
}

class ComercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }
  getDetail() {
    return `${this.tradename} ${this.brand}` + super.getDetail();
  }
}

const productComponent = new ProductComponent("Cerveza");
