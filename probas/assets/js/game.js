class Game {
  constructor(numBulbs) {
    this.bulbsContainer = document.querySelector(".game-panel") 
    this.counter = document.getElementById("counter")
    this.intervalId = null
    this.tick = 0
    this.tock = 0
    this.total = 0
    this.maxTotal = 20

    this.bulbs = [new Bulb(), new Bulb()]
    this.createBulbs() 
    
  }

  createBulbs() {
    this.bulbsContainer.innerHTML = ""
    this.bulbs.forEach((bulb) =>{
      this.bulbsContainer.append(bulb.bulbElement)
      this.bulbsContainer.append(bulb.switchElement)
    })
  }

  addNewBulbs() {
    this.bulbs.push(new Bulb())
    this.bulbs.push(new Bulb())
  }
  
  

  start() {
    this.intervalId = setInterval(() => {
      this.incCounter();
      this.tick++
  

      if (this.tick > Math.random() * 3 + 5) {
        this.turnOnRandomBulb()
        this.tick = 0
      }

    }, 500);
  }

  gameOver() {
    clearInterval(this.intervalId)
    this.intervalId = null

    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        bulb.turnOff()
      }
    })

    //document.querySelector("game-panel").classList.add("visibility")

  }



  turnOnRandomBulb() {
    const randomBulb = Math.floor(Math.random() * this.bulbs.length)
    this.bulbs[randomBulb].turnOn()
    
  }

  incCounter() {
    
    this.bulbs.forEach((bulb) => {
      if (bulb.on) {
        
        this.total += 1
        this.checkCounter()
        
        this.counter.innerText = `${this.total}`
      }
      
    })
  }


  checkCounter() {
    if (this.total >= 150) {
      this.counter.classList.add("yellow-background")
    } 
    if (this.total >= 180) {
      this.counter.classList.add("red-background")
    }
    if (this.total >= this.maxTotal) {
       this.gameOver()
     }
  }
}


