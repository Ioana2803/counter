import ClockModel from "./clock-model.js";
import ClockView from "./clock-view.js";

console.log('main.js loaded..');

const clock = document.querySelector('.container');

const clockModel = new ClockModel(valueName);
const hoursView = new ClockView(clock, clockModel);
const minutesView = new ClockView(clock, clockModel);
const secundesView = new ClockView(clock, clockModel);