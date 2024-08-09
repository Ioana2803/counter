import CounterModel from "./counter-model.js";
import CounterView from "./counter-view.js";

console.log('main.js loaded..');
const container = document.querySelector('.parent');

const counterM = new CounterModel();

const counterV1 = new CounterView(container);
counterM.addObserver(counterV1);

// const counterV2 = new CounterView(container);
// counterM.addObserver(counterV2);

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');


start.addEventListener('click', () => counterM.start());
pause.addEventListener('click', () => counterM.pause());
reset.addEventListener('click', () => counterM.reset());