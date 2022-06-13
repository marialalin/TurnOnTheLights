const BULB_IMAGE_ON = "/assets/images/bulb1-yellow.png"
const BULB_IMAGE_OFF = "/assets/images/bulb1-grey.png"
const SWITCH_IMAGE = "/assets/images/switcher.png"

class Bulb {
  constructor(bulbId, switchId ) {
    this.bulbId = bulbId
    this.switchId = switchId
    this.bulbElement = this.createBulbHtml()
    this.switchElement = this.createSwitchHtml()
    this.on = false
    this.setListener()
  }
   
  createBulbHtml() {
    const bulb = document.createElement("img")
    bulb.classList.add("bulb") 
    bulb.classList.add(`bulb-${this.bulbId}`)
    bulb.src = BULB_IMAGE_OFF
    return bulb

  }
  
  createSwitchHtml() {
    const $switch = document.createElement("img")
    $switch.classList.add("switch") 
    $switch.classList.add(`switch-${this.switchId}`)
    $switch.src = SWITCH_IMAGE
    return $switch
  }

  turnOn() {
    this.on = true;
    this.bulbElement.src = BULB_IMAGE_ON
    this.switchElement.classList.add("rotate")
    
  }

  turnOff() {
    this.on = false;
    this.bulbElement.src = BULB_IMAGE_OFF
    this.switchElement.classList.remove("rotate")
    
  }

  setListener() {
    this.switchElement.addEventListener("click", () => {
      if (this.on) {
        this.turnOff()
      } else {
        this.turnOn()
      }
    })

  }

}

