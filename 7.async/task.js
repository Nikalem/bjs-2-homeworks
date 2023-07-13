class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if((!time) || (typeof callback !== 'function')) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
        return true;
    }

    checkTimeZero(x){
        return (x < 10) ?  "0" + x : x;
    }

    getCurrentFormattedTime(){
        const curDate = new Date();
        let hours = this.checkTimeZero(curDate.getHours());
        let minut = this.checkTimeZero(curDate.getMinutes());
        return `${hours}:${minut}`;
    }

    start(){
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) =>{
                if (this.getCurrentFormattedTime() === alarm.time) {
                    alarm.canCall = false;
                    alarm.callback(); 
                }
            });
        }, 1000);
    }

    stop() {
        if(!this.intervalId) {
            return;
        }
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
    }
    
    clearAlarms() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
}

/*
function testCase() {
    const alarmClock = new AlarmClock();

    alarmClock.addClock('20:56', () => console.log('1 будильник'));
    alarmClock.addClock('20:57', () => console.log('2 будильник'));
    alarmClock.addClock('20:58', () => console.log('3 будильник'));
    alarmClock.removeClock('20:57');
    alarmClock.start();
    alarmClock.stop();
    alarmClock.clearAlarms();
  //  alarmClock.stop();
   // alarmClock.start();
}
*/