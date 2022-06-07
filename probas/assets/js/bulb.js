class Bulb {
  constructor(bulbElement, switchElement) {
    this.bulbElement = bulbElement;
    this.switchElement = switchElement
    this.on = false;

    this.setListener()
  }
   
  

  turnOn() {
    this.on = true;
    this.bulbElement.classList.remove("off")
    this.bulbElement.classList.add("on")
    this.switchElement.classList.remove("off")
    this.switchElement.classList.add("on")
    
  }

  setListener() {
    this.switchElement.addEventListener("click", () => {
      this.toggle()
    })
  }

  turnOff() {
    this.on = false;
    this.bulbElement.classList.add("off")
    this.bulbElement.classList.remove("on")
    this.switchElement.classList.remove("on")
    const clickOn = document.getElementById("switch-click")
    clickOn.play()

  }

  toggle() {
    if (this.on) {
      this.turnOff()
    } else {
      this.turnOn();
    }
  }

  
}
