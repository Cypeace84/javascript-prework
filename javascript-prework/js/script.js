function playGame(argPlayerInput) {
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nozyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
  

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}   else if(randomNumber == 2){
    computerMove = 'papier';
}   else {
    computerMove = 'nozyce';
}
printMessage('Mój ruch to: ' + argComputerMove);*/

    /*let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + argPlayerInput);

    let playerMove = getMoveName(argPlayerInput);

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

    function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
        if( computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'kamień' && playerMove == 'kamień'){
            printMessage('Remis !');
        } else if (computerMove == 'kamień' && playerMove == 'nozyce'){
            printMessage ('Ja wygrywam !');
        } else if (computerMove == 'papier' && playerMove == 'papier'){
            printMessage('Remis !');
        } else if (computerMove == 'papier' && playerMove == 'nozyce'){
            printMessage ('Ty wygrywasz !');
        }else if (computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Ja wygrywam !');
        } else if (computerMove == 'nozyce' && playerMove == 'papier'){
            printMessage ('Ja wygrywam !');
        } else if (computerMove == 'nozyce' && playerMove == 'nozyce'){
            printMessage('Remis !');
        } else if (computerMove == 'nozyce' && playerMove == 'kamień'){
            printMessage ('Ty wygrywasz !'); 
        } else {
            printMessage ('Nieznany ruch. Spróbuj jeszcze raz ! ')
        } 
    }
    displayResult(computerMove, playerMove)
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(argPlayerInput = 1);
    }); 
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(argPlayerInput = 2);
    }); 
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(argPlayerInput = 3);
    });
  
 