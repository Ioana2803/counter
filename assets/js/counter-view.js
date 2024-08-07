export default class CounterView{
    constructor(parentDOMElement){
        this.parentDOMElement = parentDOMElement;

        // this.counterModel = counterModel;
        
        this.init();
    }
    
    init(){
        console.log('Initialising Counter DOM elements...');
        
        // creating the counter boxes
        this.hoursBox = document.createElement('div');
        this.hoursBox.classList.add(`hours`, 'box');
        this.parentDOMElement.append(this.hoursBox);
        
        this.hext = document.createElement('div');
        this.text.classList.add(`hoursT`);
        this.text.innerText = "00";
        this.hoursBox.append(this.text);
        
        this.tick = document.createElement('div');
        this.tick.classList.add('text');
        this.tick.innerText = ':';
        this.parentDOMElement.append(this.tick);
        
        this.minutesBox = document.createElement('div');
        this.minutesBox.classList.add(`minutes`, 'box');
        this.parentDOMElement.append(this.minutesBox);
        
        this.text = document.createElement('div');
        this.text.classList.add(`minutesT`);
        this.text.innerText = "00";
        this.minutesBox.append(this.text);

        this.tick = document.createElement('div');
        this.tick.classList.add('text');
        this.tick.innerText = ':';
        this.parentDOMElement.append(this.tick);


        this.secondsBox = document.createElement('div');
        this.secondsBox.classList.add(`seconds`, 'box');
        this.parentDOMElement.append(this.secondsBox);
    
        this.sText = document.createElement('div');
        this.sText.classList.add(`secondsT`);
        this.sText.innerText = "00";
        this.secondsBox.append(this.sText);
    }
    
    update(time){
        console.log(time);
    }
}