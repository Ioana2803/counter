export default class CounterView{
    constructor(parentDOMElement){
        this.parentDOMElement = parentDOMElement;

        // this.counterModel = counterModel;

        this.init();
    }

    init(){
        console.log('Initialising Counter DOM elements...');

        //creating the counter boxes
        // const valueName = this.counterModel.valueName;

        // this.counterBoxes = document.createElement('div');
        // this.counterBoxes.classList.add(`${valueName}`, 'box');
        // this.parentDOMElement.append(this.counterBoxes);

        // this.text = document.createElement('div');
        // this.text.classList.add(`${valueName}T`, 'text');
        // this.text.innerText = "00";
        // this.counterBoxes.append(this.text);

        // this.tick = document.createElement('div');
        // this.tick.classList.add('text');
        // this.tick.innerText = ':';
        // this.parentDOMElement.append(this.tick);
    }

    update(time){
        console.log(time);
    }
}