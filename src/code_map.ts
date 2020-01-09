import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

Observable.create((obs: any) => {
    obs.next("hey guys");
})
    .map((val: any) => {
        return val.toUpperCase()
    })
    .subscribe((x: any) => addItem(x))

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

