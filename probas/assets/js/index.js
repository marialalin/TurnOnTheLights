const game = new Game();
   


const gameStart = document.getElementById("game-start")
gameStart.addEventListener("click", () => {
    document.getElementById("game-start").classList.add("hidden")
    document.getElementById("game-canvas").classList.remove("hidden")
    if(game.intervalId === null) {
        game.start()
    }
})


const restart = document.getElementById("game-over")
restart.addEventListener("click", () => {
  if (game.intervalId === null) {
      location.reload()
  } 
})



