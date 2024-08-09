export default class CounterView{
    constructor(counterDOMElement, buttonsDOMElement){
        this.counterDOMElement = counterDOMElement;
        this.buttonsDOMElement = buttonsDOMElement;
        
        this.init();
    }
    
    init(){
        console.log('Initialising Counter DOM elements...');
        
        // creating the counter boxes
        this.hoursBox = document.createElement('div');
        this.hoursBox.classList.add(`hours`, 'box');
        this.counterDOMElement.append(this.hoursBox);
        
        this.hText = document.createElement('div');
        this.hText.classList.add(`hoursT`);
        this.hoursBox.append(this.hText);
        
        this.tick = document.createElement('div');
        this.tick.classList.add('separators');
        this.tick.innerText = ':';
        this.counterDOMElement.append(this.tick);
        

        this.minutesBox = document.createElement('div');
        this.minutesBox.classList.add(`minutes`, 'box');
        this.counterDOMElement.append(this.minutesBox);
        
        this.mText = document.createElement('div');
        this.mText.classList.add(`minutesT`);
        this.minutesBox.append(this.mText);

        this.tick = document.createElement('div');
        this.tick.classList.add('separators');
        this.tick.innerText = ':';
        this.counterDOMElement.append(this.tick);


        this.secondsBox = document.createElement('div');
        this.secondsBox.classList.add(`seconds`, 'box');
        this.counterDOMElement.append(this.secondsBox);
    
        this.sText = document.createElement('div');
        this.sText.classList.add(`secondsT`);
        this.secondsBox.append(this.sText);

        //creating the start button
        this.startBtn = document.createElement('button');
        this.startBtn.classList.add('start', 'btnSt');
        this.buttonsDOMElement.append(this.startBtn);
        this.startBtn.innerText = 'Start';

        //creating the pause button
        this.pauseBtn = document.createElement('button');
        this.pauseBtn.classList.add('pause', 'btnSt');
        this.buttonsDOMElement.append(this.pauseBtn);
        this.pauseBtn.innerText = 'Pause';

        //creating the reset button
        this.resetBtn = document.createElement('button');
        this.resetBtn.classList.add('reset', 'btnSt');
        this.buttonsDOMElement.append(this.resetBtn);
        this.resetBtn.innerText = 'Reset';
    }
    
    update(state){
        console.log(state);
        this.sText.innerText = state.time.seconds;
        this.mText.innerText = state.time.minutes;
        this.hText.innerText = state.time.hours;

        this.startBtn.style.display = state.actions.canBeStarted ? 'inline-block' : 'none';
        this.pauseBtn.style.display = state.actions.canBeStopped ? 'inline-block' : 'none';
        this.resetBtn.style.display = state.actions.canBeReseted ? 'inline-block' : 'none';
    }
}