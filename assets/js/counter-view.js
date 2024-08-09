export default class CounterView{
    constructor(parentDOMElement){
        this.parentDOMElement = parentDOMElement;
        
        this.init();
    }
    
    init(){
        console.log('Initialising Counter DOM elements...');
        
        //creating container div
        this.containerDiv = document.createElement('div');
        this.containerDiv.classList.add('container');
        this.parentDOMElement.append(this.containerDiv);

        //creating counter div
        this.counterDiv = document.createElement('div');
        this.counterDiv.classList.add('counter');
        this.containerDiv.append(this.counterDiv);

        // creating the counter boxes
        this.hoursBox = document.createElement('div');
        this.hoursBox.classList.add(`hours`, 'box');
        this.counterDiv.append(this.hoursBox);
        
        this.hText = document.createElement('div');
        this.hText.classList.add(`hoursT`);
        this.hoursBox.append(this.hText);
        
        this.tick = document.createElement('div');
        this.tick.classList.add('separators');
        this.tick.innerText = ':';
        this.counterDiv.append(this.tick);
        

        this.minutesBox = document.createElement('div');
        this.minutesBox.classList.add(`minutes`, 'box');
        this.counterDiv.append(this.minutesBox);
        
        this.mText = document.createElement('div');
        this.mText.classList.add(`minutesT`);
        this.minutesBox.append(this.mText);

        this.tick = document.createElement('div');
        this.tick.classList.add('separators');
        this.tick.innerText = ':';
        this.counterDiv.append(this.tick);


        this.secondsBox = document.createElement('div');
        this.secondsBox.classList.add(`seconds`, 'box');
        this.counterDiv.append(this.secondsBox);
    
        this.sText = document.createElement('div');
        this.sText.classList.add(`secondsT`);
        this.secondsBox.append(this.sText);

        //creating buttons div
        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.classList.add('buttons');
        this.containerDiv.append(this.buttonsDiv);

        //creating the start button
        this.startBtn = document.createElement('button');
        this.startBtn.classList.add('start', 'btnSt');
        this.buttonsDiv.append(this.startBtn);
        this.startBtn.innerText = 'Start';

        //creating the pause button
        this.pauseBtn = document.createElement('button');
        this.pauseBtn.classList.add('pause', 'btnSt');
        this.buttonsDiv.append(this.pauseBtn);
        this.pauseBtn.innerText = 'Pause';

        //creating the reset button
        this.resetBtn = document.createElement('button');
        this.resetBtn.classList.add('reset', 'btnSt');
        this.buttonsDiv.append(this.resetBtn);
        this.resetBtn.innerText = 'Reset';
    }
    
    update(state){
        // console.log(state);
        this.sText.innerText = state.time.seconds;
        this.mText.innerText = state.time.minutes;
        this.hText.innerText = state.time.hours;

        this.startBtn.disabled = state.actions.canBeStarted ? false : true;
        this.pauseBtn.disabled = state.actions.canBeStopped ? false : true;
        this.resetBtn.disabled = state.actions.canBeReseted ? false : true;
    }
}