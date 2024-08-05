import ClockModel from "./clock-model.js";
import ClockView from "./clock-view.js";

console.log('main.js loaded..');

const clock = new ClockModel(3601);
console.log(clock.getTime());

// const clock = document.querySelector('.container');

// const hoursModel = new ClockModel('hours');
// const hoursView = new ClockView(clock, hoursModel);

// const minutesModel = new ClockModel('minutes');
// const minutesView = new ClockView(clock, minutesModel);

// const secondsModel = new ClockModel('seconds');
// const secundesView = new ClockView(clock, secondsModel);