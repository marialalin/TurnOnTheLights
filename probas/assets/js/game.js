class Game {
  constructor(numBulbs) {
    this.bulbsContainer = document.querySelector(".game-panel");
    this.counter = document.getElementById("counter");
    this.intervalId = null;
    this.tick = 0;
    this.tock = 0;
    this.total = 0;
    this.maxTotal = 100;

    this.bulbsIds = [1, 2, 3, 4, 5, 6] // random
    this.switchsIds = [1, 2, 3, 4, 5, 6]

    this.bulbs = [];
    
    for (let i = 0; i <= 1; i++) {
      this.addNewBulb()
    }

  }



  createBulbs() {
    this.bulbsContainer.innerHTML = "";
    this.bulbs.forEach((bulb) => {
      this.bulbsContainer.append(bulb.bulbElement);
      this.bulbsContainer.append(bulb.switchElement);
    });
  }

  start() {
    this.intervalId = setInterval(() => {
      this.incCounter();
      this.tick++;
      this.tock++;

      if (this.tick > Math.random() * 3 + 5) {
        this.turnOnRandomBulb();
        this.tick = 0;
      }

      if (this.tock >= 20) {
        this.addNewBulb()
        this.tock = 0;
      }
    }, 500);
  }

  addNewBulb() {
    if (this.bulbsIds.length > 0) {
      const bulbId = this.bulbsIds.pop()
      const switchId = this.switchsIds.pop()
      this.bulbs.push(new Bulb(bulbId, switchId))
      this.createBulbs()
    } 
   
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        bulb.turnOff();
      }
    });
    setTimeout(() => {
      document.querySelector(".game-panel").classList.add("visibility");
      document.querySelector(".bill-panel").classList.add("visibility");
    }, 1000);
  }

  turnOnRandomBulb() {
    const randomBulb = Math.floor(Math.random() * this.bulbs.length);
    this.bulbs[randomBulb].turnOn();
  }

  incCounter() {
    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        this.total += 1;
        this.checkCounter();

        this.counter.innerText = `${this.total}`;
      }
    });
  }

  checkCounter() {
    if (this.total >= this.maxTotal) {
      this.gameOver();
    } else if (this.total >= 8) {
      this.counter.classList.add("red-background");
    } else if (this.total >= 5) {
      this.counter.classList.add("yellow-background");
    }
  }
}
