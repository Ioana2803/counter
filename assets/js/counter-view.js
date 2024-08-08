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
        
        this.hText = document.createElement('div');
        this.hText.classList.add(`hoursT`);
        this.hoursBox.append(this.hText);
        
        this.tick = document.createElement('div');
        this.tick.classList.add('text');
        this.tick.innerText = ':';
        this.parentDOMElement.append(this.tick);
        

        this.minutesBox = document.createElement('div');
        this.minutesBox.classList.add(`minutes`, 'box');
        this.parentDOMElement.append(this.minutesBox);
        
        this.mText = document.createElement('div');
        this.mText.classList.add(`minutesT`);
        this.minutesBox.append(this.mText);

        this.tick = document.createElement('div');
        this.tick.classList.add('text');
        this.tick.innerText = ':';
        this.parentDOMElement.append(this.tick);


        this.secondsBox = document.createElement('div');
        this.secondsBox.classList.add(`seconds`, 'box');
        this.parentDOMElement.append(this.secondsBox);
    
        this.sText = document.createElement('div');
        this.sText.classList.add(`secondsT`);
        this.secondsBox.append(this.sText);
    }
    
    update(time){
        // console.log(time);
        this.sText.innerText = time.seconds;
        this.mText.innerText = time.minutes;
        this.hText.innerText = time.hours;
    }
}