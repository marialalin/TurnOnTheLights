const bulbElements = [
    { name: "bulb", img: "bulb1-grey.png", state: "bulb-off", level: "level1" , alt: "bulb-icon-off"} ,
    { name: "bulb", img: "bulb1-yellow.png", state: "bulb-on" , alt: "bulb-icon-on"} 
]

const switchElement = [
    { name: "switch", img: "switcher.png", level: "level1" }

] 


const game = new Game(
    bulbElements,
    switchElement,
    document.getElementById("counter"),
);

    document.addEventListener("load", (event) => {
        let html = `<div class="bulb-container ${bulbElements.level}" >`
        game.bulbElements.forEach((bulbElement) => {
            html += `
            <img class="${bulbElement.name} ${bulbElement.state}" src= "${bulbElement.img}" alt="${bulbElement.alt}">
            `
        })
        
        html += `</div>`;
        html += `<div class="switch-container $.level}" >`;
    })


    document.querySelector(".game-panel").textContent = 
    


game.start()
game.checkCounter()


