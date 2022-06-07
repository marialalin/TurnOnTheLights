class Game {
  constructor(bulbElements, switchElements, counter) {
    this.bulbs = [
      new Bulb(bulbElements[0], switchElements[0]),
      new Bulb(bulbElements[1], switchElements[1]),
      new Bulb(bulbElements[2], switchElements[2]),
      new Bulb(bulbElements[3], switchElements[3])
    ]

    this.switchElements = switchElements
    this.counter = counter
    this.intervalId = null
    this.tick = 0
    this.total = 0
    this.maxTotal = 0
   

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
        this.addNewBulb();
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
        this.maxTotal = this.total += 1
  
      this.counter.innerText = `${this.total}€`
      }
      
    })

  }
}


