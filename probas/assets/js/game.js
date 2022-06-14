class Game {
  constructor(numBulbs) {
    this.bulbsContainer = document.querySelector(".game-panel");
    this.counter = document.getElementById("counter");
    this.intervalId = null;
    this.tick = 0;
    this.tock = 0;
    this.total = 0;
    this.maxTotal = 200;
    this.yellowTop = 100;
    this.redTop = 160;

    this.bulbsIds = [1, 2, 3, 4, 5];
    this.shuffledBulbsId = this.bulbsIds.sort(() => Math.random() - 0.5);

    this.switchsIds = [1, 2, 3, 4, 5];
    this.shuffledSwitchsIds = this.switchsIds.sort(() => Math.random() - 0.5);

    this.bulbs = [];

    for (let i = 0; i <= 1; i++) {
      this.addNewBulb();
    }
  }

  createBulbs() {
    this.bulbsContainer.innerHTML = "";
    this.bulbs.forEach((bulb) => {
      this.bulbsContainer.append(bulb.bulbElement);
      this.bulbsContainer.append(bulb.switchElement);
    });
  }

  addNewBulb() {
    if (this.bulbsIds.length > 0) {
      const bulbId = this.shuffledBulbsId.pop();
      const switchId = this.shuffledSwitchsIds.pop();
      this.bulbs.push(new Bulb(bulbId, switchId));
      this.createBulbs();
    }
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.incCounter();
        this.tick++;
        this.tock++;
        const music1 = document.getElementById("music1")
        music1.play()
        music1.volume = 0.7
        music1.loop = true;

        if (this.tick > Math.random() * 3 + 1) {
          this.turnOnRandomBulb();
          this.tick = 0;
        }

        if (this.tock >= 20) {
          this.addNewBulb();
          this.tock = 0;
        }
      }, 700);
    }
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    
    const breakingBulbs = document.getElementById("breaking-bulbs")
    breakingBulbs.play()
    
    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        bulb.turnOff();
      } 
    });


    setTimeout(() => {
      document.querySelector(".game-panel").classList.add("hidden")
      document.querySelector(".bill-panel").classList.add("hidden")
      document.getElementById("game-over").classList.add("game-over")
      document.querySelector(".btn-try-again").style.display = "block"
      const music2 = document.getElementById("music2")
      music2.pause()
      const music3 = document.getElementById("music3")
      music3.pause()
    }, 1200);

  
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
    } else if (this.total >= this.redTop) {
      this.counter.classList.add("red-background")
      const music3 = document.getElementById("music3")
      music3.play()
      music3.loop = true;
    } else if (this.total >= this.yellowTop) {
      this.counter.classList.add("yellow-background");
      const music2 = document.getElementById("music2")
      music2.play()
      music2.volume = 0.3
      music2.loop = true;
    }
  }
}
