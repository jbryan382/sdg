function main() {
  // Variables
  let player1Choice = ''

  let player2Choice = ''

  // Function to handle player selection
  function handlePlayerSelection() {
    console.log(document.querySelector('img.lizard').className)
    if (player1Choice !== '') {
      player2Choice = 'lizard'

      console.log(`Player 2's choice: ${player2Choice}`)
    } else {
      player1Choice = document.querySelector('img.lizard').className
      console.log(`Player 1's choice: ${player1Choice}`)
    }
    if (player1Choice === player2Choice) {
      window.alert('Draw!')
    }
  }
  // Doc QS and event listener
  document
    .querySelector('img.lizard')
    .addEventListener('click', handlePlayerSelection)
}

document.addEventListener('DOMContentLoaded', main)
