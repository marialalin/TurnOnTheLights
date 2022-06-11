class Game {
  constructor(numBulbs) {
    this.bulbsContainer = document.querySelector(".game-panel");
    this.counter = document.getElementById("counter");
    this.intervalId = null;
    this.tick = 0;
    this.tock = 0;
    this.total = 0;
    this.maxTotal = 50;

    this.bulbsIds = [1, 2, 3, 4, 5] 
    this.shuffledBulbsId = this.bulbsIds.sort(() => Math.random()-0.5)
    
    this.switchsIds = [1, 2, 3, 4, 5]
    this.shuffledSwitchsIds= this.switchsIds.sort(() => Math.random()-0.5)

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

  
  addNewBulb() {
    if (this.bulbsIds.length > 0) {
      const bulbId = this.shuffledBulbsId.pop()
      const switchId = this.shuffledSwitchsIds.pop()
      this.bulbs.push(new Bulb(bulbId, switchId))
      this.createBulbs()
    } 
   
  }

  start() {
    this.intervalId = setInterval(() => {
      this.incCounter();
      this.tick++;
      this.tock++;

      if (this.tick > Math.random() * 1 + 3) {
        this.turnOnRandomBulb();
        this.tick = 0;
      }

      if (this.tock >= 40) {
        this.addNewBulb()
        this.tock = 0;
      }
    }, 300);
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
      document.querySelector(".game-panel").classList.add("hidden")
      document.querySelector(".bill-panel").classList.add("hidden")
      document.getElementById("game-over").classList.add("game-over")
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
    } else if (this.total >= 180) {
      this.counter.classList.add("red-background");
    } else if (this.total >= 150) {
      this.counter.classList.add("yellow-background");
    }
  }
}
