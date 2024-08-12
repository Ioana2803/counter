import CounterModel from "./counter-model.js";
import CounterView from "./counter-view.js";

const counterV1 = new CounterView(
    document.querySelector('.parent'), 
    new CounterModel());