class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    // console.log("ingresa a constructor");
    this.random = Math.random();
    if (Singleton.instance) {
      // console.log("ya existe en constructor");
      return Singleton.instance;
    }
    // console.log("no existe, se crea");
    Singleton.instance = this;
  }
}
const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3.random);
console.log(singleton === singleton2);
console.log(singleton2 === singleton3);
