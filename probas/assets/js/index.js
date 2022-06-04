document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector(".switcher")


    switcher.addEventListener("click", function () {
        
        document.querySelectorAll("#bulb-container img")
        .forEach((image) => {
    
            if (image.className.includes("visible")){
                image.classList.add("oculto")
                image.classList.remove("visible")
                document.querySelector('.switcher')
                .classList.remove("rotation")
                //setInterval(stop)
                
            } else {
                image.classList.add("visible")
                image.classList.remove("oculto")
                document.querySelector('.switcher')
                .classList.add("rotation")
                //setInterval
            
            } 

        })    
    })

})




 
    /*
    SEN FOREACH
    
    switcher.addEventListener("click", function () {
        const bombilla = document.querySelector("#bulb-container img")
        if (bombilla.className.includes("visible")) {
            bombilla.classList.add("oculto")
            bombilla.classList.remove("visible")
        } else {
            bombilla.classList.add("visible")
            bombilla.classList.remove("oculto")
        }

    })*/


/*  
 CON HIDDEN/VISIBLE
 
 if ().) {
            document.getElementById("bulb-container").style.visibility = 'hidden'
            console.log('heeeu')
        } else {
            document.getElementById("bulb-container").style.visibility = 'visible'
        } */



/*
CON REMOVE-CHILD. MÓVESE O HTML
const switcher = document.getElementById("switcher")

switcher.addEventListener("click", function () {
    const div = document.getElementById("bulb-container")
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
    console.log("hey")
})*/


//AUDIO
 /*const audio = document.createElement("audio")
                audio.setAttribute("src")
                audio.play()*/