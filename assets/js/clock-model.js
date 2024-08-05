export default class ClockModel{
    constructor(initialSeconds = 0){
        this.countedSeconds = initialSeconds;
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
}