const bulbElements = [
    { name: "bulb", img: "images/bulb1-grey.png", state: "bulb-off", alt: "bulb-icon-off"} ,
    { name: "bulb", img: "images/bulb1-yellow.png", state: "bulb-on" , alt: "bulb-icon-on"} 
]

const switchElement = [
    { name: "switch rotate", img:"images/switcher.png" }

] 


const game = new Game(
    bulbElements,
    switchElement,
    document.getElementById("counter"),
);

document.addEventListener("DOMContentLoaded", (event) => {
    let html = ''
    game.arrayBulbs.forEach((bulbAndSwitch, index) => {
        let left = (index + 1) * 300 - (!index ? 0 : 50);
        html +=  `<div class="bulb-container index-${index + 1} off" >`
        bulbAndSwitch.bulbElement.forEach((bulbElement) => {
            html += `
            <img class="${bulbElement.name} index-${index + 1} ${bulbElement.state}" src= "${bulbElement.img}" alt="${bulbElement.alt}" style="left: ${left}px">
            `
        })    
        html += `</div>`

        html += `<div class="switch-container index-${index + 1} off">`
        bulbAndSwitch.switchElement.forEach((switchElement) => {
            html += `<img class="${switchElement.name}" src="${switchElement.img}" >
            `
        })
        html += `</div>`

        document.querySelector(".game-panel").innerHTML = html   

        bulbAndSwitch.setListener()
    })

    
})


    



//game.start()
//game.checkCounter()


