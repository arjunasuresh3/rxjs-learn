import { Observable } from "rxjs/Observable";

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var subscription = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

var subscription2 = observable.subscribe(
    (x: any) => addItem(x)
);

subscription.add(subscription2);

setTimeout(() => {
    subscription.unsubscribe();
}, 6001);

