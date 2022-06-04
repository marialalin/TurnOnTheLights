class Game {
  constructor(bulbElements, switchElements, counter) {
    this.bulbs = [new Bulb(bulbElements[0], switchElements[0])];
    this.counter = counter;
    this.intervalId = null;
    this.ticks = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.incCounter();

      this.tick++;

      if (this.tick > Math.random() * 5 + 3) {
        this.turnOnRandomBulb();
      }

      if (this.tick > 20) {
        this.tick = 0;
        this.addNewBulb();
      }
    }, 500);
  }

  addNewBulb() {
    // TODO: add new bulb to this.bulbs and to DOM
  }

  turnOnRandomBulb() {
    // TODO: filter off bulbs
    // select random off bulb
    // on() bulb
  }

  incCounter() {
    // TODO: iterate over this.bulbs and inc counter for on bulbs
  }
}
