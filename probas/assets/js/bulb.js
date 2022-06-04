class Bulb {
  constructor(bulbElement, switchElement) {
    this.bulbElement = bulbElement;
    this.switchElement = switchElement;
    this.on = false;

    this.setListeners();
  }

  on() {
    this.on = true;
    this.bulbElement.classList.remove("off");
    this.bulbElement.classList.add("on");
  }

  off() {
    this.on = false;
    this.bulbElement.classList.add("off");
    this.bulbElement.classList.remove("on");
  }

  toggle() {
    if (this.on) {
      this.off();
    } else {
      this.on();
    }
  }

  setListeners() {
    this.switchElement.addEventListener("click", () => {
      this.toggle();
    });
  }
}
