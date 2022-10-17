function playGame(argPlayerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nozyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  console.log('Gracz wpisał: ' + argPlayerInput);

  const playerMove = getMoveName(argPlayerInput);

  displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});

/*if(randomNumber == 1){
  computerMove = 'kamień';
}   else if(randomNumber == 2){
    computerMove = 'papier';
}   else {
    computerMove = 'nozyce';
}
printMessage('Mój ruch to: ' + argComputerMove);*/

/*let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nozyce';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + argPlayerMove);*/
