import {  Subject, BehaviorSubject } from "rxjs";

var subject = new BehaviorSubject('First');

var ob1 = subject.subscribe(
    data => addItem('obs 1: ' + data),
    err => addItem("err: " + err),
    () => addItem("obs 1 completed")
);

subject.next('1st thing has been sent');

var ob2 = subject.subscribe(
    data => addItem('obs 2: ' + data),
    err => addItem("err: " + err),
    () => addItem("obs 2 completed")
);

subject.next('2nd thing has been sent');
subject.next('3rd thing has been sent');

ob2.unsubscribe();

subject.next('4th thing has been sent');

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

