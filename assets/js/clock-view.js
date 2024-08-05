export default class ClockView{
    constructor(parentDOMElement, clockModel){
        this.parentDOMElement = parentDOMElement;

        this.clockModel = clockModel;

        this.init();
    }

    init(){
        console.log('Initialising Clock DOM elements...');

        //creating the clock boxes
        const valueName = this.clockModel.valueName;

        this.clockBoxes = document.createElement('div');
        this.clockBoxes.classList.add(`${valueName}`, 'box');
        this.parentDOMElement.append(this.clockBoxes);

        this.text = document.createElement('div');
        this.text.classList.add(`${valueName}T`, 'text');
        this.text.innerText = "00";
        this.clockBoxes.append(this.text);

        this.tick = document.createElement('div');
        this.tick.innerText = ':';
        this.parentDOMElement.append(this.tick);
    }
}