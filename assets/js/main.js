import CounterModel from "./counter-model.js";
import CounterView from "./counter-view.js";

console.log('main.js loaded..');
const counter = document.querySelector('.counter');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const counterM = new CounterModel();
const counterV = new CounterView(counter);
counterM.addObserver(counterV);

// const counterV2 = new CounterView();
// counterM.addObserver(counterV2);


start.addEventListener('click', () => counterM.start());
pause.addEventListener('click', () => counterM.pause());
reset.addEventListener('click', () => counterM.reset());