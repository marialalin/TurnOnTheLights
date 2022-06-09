class Bulb {
  constructor(bulbElement, switchElement) {
    this.bulbElement = bulbElement;
    this.switchElement = switchElement
    this.on = false;

  }
   
  

  turnOn(index) {
    this.on = true;
    const bulbContainer = document.querySelector(`.bulb-container.${index}`)
    const switchContainer = document.querySelector(`.switch-container.${index}`)
    bulbContainer.classList.remove("off")
    bulbContainer.classList.add("on")
    switchContainer.classList.remove("off")
    switchContainer.classList.add("on")
    switchContainer.querySelector("img").classList.remove("rotate")
    const clickOff = document.getElementById("clickOff")
    clickOff.play()
    
  }

  turnOff(index) {
    this.on = false;
    const bulbContainer = document.querySelector(`.bulb-container.${index}`)
    const switchContainer = document.querySelector(`.switch-container.${index}`)
    bulbContainer.classList.add("off")
    bulbContainer.classList.remove("on")
    switchContainer.classList.remove("on")
    switchContainer.classList.add("off")
    switchContainer.querySelector("img").classList.add("rotate")
    const clickOn = document.getElementById("switch-click")
    clickOn.play()

  }

  setListener() {
    document.querySelectorAll('.switch-container').forEach((s) => {
      s.addEventListener('click', (event) => {
        const arrayClass = event.currentTarget.className.split(' ');
        this.toggle(arrayClass[1])
      })
    })
   
  }


  toggle(index) {
    if (this.on) {
      this.turnOff(index)
    } else {
      this.turnOn(index);
    }
  }

  

}


