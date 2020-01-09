import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

from([
    { first: 'arjun', last: "suresh", age: 33 },
    { first: 'arjun2', last: "suresh2", age: 33 },
    { first: 'arjun3', last: "suresh3", age: 33 },
])
    .pluck('first')
    .subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}