import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";

var obs1 = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

var obs2 = new Subject;

setTimeout(() => {
    obs2.next('hey')
}, 3000)

var newObs = obs1.skipUntil(obs2);

newObs.subscribe(
    (x: any) => addItem(x)
);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}