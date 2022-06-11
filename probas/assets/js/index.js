const game = new Game();
   


game.start()
const gameStart = document.getElementById("game-start")
gameStart.addEventListener("click", () => {
    if(game.intervalId !== null) {
        game.start()
    }
})


const restart = document.getElementById("game-over")
restart.addEventListener("click", () => {
  if (game.intervalId === null) {
      location.reload()
  } 
})



