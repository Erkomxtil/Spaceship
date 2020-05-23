let log = console.log
const arrowMove = () => {
  let spaceship = document.getElementById("ship")
  let documentWidth = window.innerWidth
  let documentHeight = window.innerHeight
  let leftRightMove = 0
  let UpDownMove = 0
  log(spaceship.offsetLeft)
  document.addEventListener("keydown", (e) => {
    let shipPositionLeftRight = spaceship.offsetLeft
    let shipPositionUpDown = spaceship.offsetTop
    log(shipPositionLeftRight)
    if(shipPositionLeftRight > 0){
      if (e.key == 'ArrowLeft') {
        leftRightMove -= 2
        spaceship.style.left = 50 + leftRightMove + "%"
      }
    }
    if(shipPositionLeftRight < documentWidth - 80) {
      if (e.key === 'ArrowRight') {
        leftRightMove += 2
        log(leftRightMove + 'right')
        spaceship.style.left = 50 + leftRightMove + "%"
      }
    }
    if (shipPositionUpDown > 0) {
      if (e.key === 'ArrowUp') {
        UpDownMove -= 2
        spaceship.style.top = 50 + UpDownMove + "%"
      }
    }
    if (shipPositionUpDown < documentHeight - 60) {
      if (e.key === 'ArrowDown') {
        UpDownMove += 2
        spaceship.style.top = 50 + UpDownMove + "%"
      }
    }
  })
}

arrowMove()