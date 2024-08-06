import CounterModel from "./counter-model.js";
import CounterView from "./counter-view.js";

console.log('main.js loaded..');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const counterM = new CounterModel();
const counterV = new CounterView();
counterM.addObserver(counterV);

// const counterV2 = new CounterView();
// counterM.addObserver(counterV2);


start.addEventListener('click', () => counterM.start());
pause.addEventListener('click', () => counterM.pause());
reset.addEventListener('click', () => counterM.reset());

// const counter = document.querySelector('.container');

// const hoursModel = new CounterModel('hours');
// const hoursView = new CounterView(counter, hoursModel);

// const minutesModel = new CounterModel('minutes');
// const minutesView = new CounterView(counter, minutesModel);

// const secondsModel = new CounterModel('seconds');
// const secundesView = new CounterView(counter, secondsModel);