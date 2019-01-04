class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    const clock = new Date();  
    this.hours = clock.getHours();
    this.minutes = clock.getMinutes();
    this.seconds = clock.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }
  
  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    const time = (`${this.hours}:${this.minutes}:${this.seconds}`);
    console.log(time);
  }
  
  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();