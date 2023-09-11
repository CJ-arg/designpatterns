class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observer.push(this.observer);
  }
  unSubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((element) => {
      element.refresh(data);
    });
  }
}