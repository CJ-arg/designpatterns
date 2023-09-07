class SingletonTs {
  private static instance: SingletonTs;
  public random: number;
  private constructor() {
    this.random = Math.random();
  }
  public static getInstance(): SingletonTs {
    if (!this.instance) {
      this.instance = new SingletonTs();
    }
    return this.instance;
  }
}
const singletonTs = SingletonTs.getInstance();
const singletonTs2 = SingletonTs.getInstance();
console.log(singletonTs.random);
console.log(singletonTs2.random);
singletonTs.random = 7;
console.log(singletonTs.random);
console.log(singletonTs2.random);
