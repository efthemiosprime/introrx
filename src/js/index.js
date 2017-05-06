import Rx from 'rxjs/Rx';

var button = document.querySelector('.button');
var label = document.querySelector('h2');

var clickStream = Rx.Observable.fromEvent(button, 'click');
var doubleClickStream = clickStream;

doubleClickStream.subscribe (event => {
    label.textContent = 'double click';
})
