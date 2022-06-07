class Game {
  constructor(bulbElements, switchElements, counter, level = 2) {
    

    this.switchElements = switchElements
    this.counter = counter
    this.intervalId = null
    this.tick = 0
    this.total = 0
    this.maxTotal = 10
   

  }

  start() {

    this.turnOnRandomBulb()

    this.intervalId = setInterval(() => {
      this.incCounter();

      this.tick++;
      if (this.tick > Math.random() * 10 + 8) {
        this.turnOnRandomBulb();
      }

      if (this.tick > 30) {
        this.tick = 0;
        this.addNewBulb(); // falta isto
      }
    }, 500);
  }

  gameOver() {
    console.log("gameOverrr")
    clearInterval(this.intervalId)
    this.intervalId = null

    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        this.turnOff()
      }
    })
  }



  addNewBulb() {
    // TODO: add new bulb to this.bulbs and to DOM
    
  

            
  }

  turnOnRandomBulb() {
    const indexBulb = Math.floor(Math.random() * this.bulbs.length)
    this.bulbs[indexBulb].turnOn()
    
  }

  incCounter() {
    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        this.total += 1
  
        this.counter.innerText = `${this.total}€`
      }
      
    })
  }

  checkCounter() {
    if (this.total >= this.maxTotal) {
       this.gameOver()
       console.log("eh")
     }
  }
}


