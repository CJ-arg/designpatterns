interface IObserver<T>>{
refresh(value:T) : void;
}

interface ISubject<T>{
observers: IObserver<T>[];

subscribe(observer: IObserver<T>) : void;
unsubscribe(observer: IObserver<T>) : void;
notyfy(value: T) : void;
}

class Subject<T> implements ISubject<T>{
observers: IObserver<T>[];

constructor(){
this.observers =[];
}
subscribe(observer: IObserver<T>) {
    this.observers.push(observer)
}
}