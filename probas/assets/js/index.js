const bulbElement = [
    { name: "bulb", level: "level1", img: "bulb1-grey.png", state: "bulb-off" }
    { name: "bulb", level: "level1", img: "bulb1-yellow.png", state: "bulb-on"}
]

const switchElement = [
    { name: "switch", level: "level1", img: "switcher.png" }

] 


const game = new Game(
    bulbElement,
    switchElement,
    document.getElementById("counter")
);

    document.addEventListener("load", (event) => {
        let html = ""
        game.bulbElement.forEach((pic) => {
            html += `
            <div id="bulb-container">
            <img class="bulb one visible" src="/assets/images/bulb1-yellow.png" alt="bulb-icon-off">
            `
        })
    })
    document.querySelector(".game-panel").createElement("div")
    


game.start()
game.checkCounter()


<div id="bulb-container">
                    <img class="bulb one visible" src="/assets/images/bulb1-yellow.png" alt="bulb-icon-off">
                    <img class="bulb one oculto" src="/assets/images/bulb1-grey.png" alt="bulb-icon-on">
                </div>