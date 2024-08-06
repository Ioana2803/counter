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

    formatTime(timeUnits){
        return timeUnits > 9 ? String(timeUnits) : '0' + timeUnits;
    }

    start(){
        this.interval = setInterval(() => {
            this.countedSeconds++;
            this.notifyObservers();
        }, 1000)
    }

    pause(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset(){
        this.pause();
        this.countedSeconds = 0;
        this.notifyObservers();
    }

    addObserver(newObserver){
        this.observers.push(newObserver);
        newObserver.update(this.getTime());
    }

    notifyObservers(){
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.getTime());
        }
    }
}