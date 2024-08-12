export default class CounterModel{
    constructor(initialSeconds = 0){
        this.countedSeconds = initialSeconds;
        this.interval = null;
        this.observers = [];

        this.notifyObservers();
    }

    getTime(){
        const hours = Math.floor(this.countedSeconds / 3600);
        let remainingSeconds = this.countedSeconds - (3600 * hours);

        const minutes = Math.floor(remainingSeconds / 60);
        remainingSeconds -= (60 * minutes);

        return {
            hours: this.formatTime(hours),
            minutes: this.formatTime(minutes),
            seconds: this.formatTime(remainingSeconds)
        }
    }

    getAvailableActions(){
        return {
            canBeStarted: !Boolean(this.interval),
            canBeStopped: Boolean(this.interval),
            canBeReseted: Boolean(this.countedSeconds)
        }
    }

    get state(){
        return {
            time: this.getTime(),
            actions: this.getAvailableActions()
        }
    }

    formatTime(timeUnits){
        return timeUnits > 9 ? String(timeUnits) : '0' + timeUnits;
    }

    start(){
        this.interval = setInterval(() => {
            this.countedSeconds++;
            this.notifyObservers();
        }, 1000);
        this.notifyObservers();
    }

    pause(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        }
        this.notifyObservers();
    }

    reset(){
        this.pause();
        this.countedSeconds = 0;
        this.notifyObservers();
    }

    addObserver(newObserver){
        this.observers.push(newObserver);
        newObserver.update(this.state);
    }

    notifyObservers(){
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.state);
        }
    }
}