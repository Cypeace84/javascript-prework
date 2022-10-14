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

    let argComputerMove = getMoveName(randomNumber);

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

    let argPlayerMove = getMoveName(argPlayerInput);

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

    function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);}

    displayResult(argComputerMove, argPlayerMove)

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis !');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage ('Ja wygrywam !');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis !');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage ('Ty wygrywasz !');
        }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ja wygrywam !');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage ('Ja wygrywam !');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
            printMessage('Remis !');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage ('Ty wygrywasz !'); 
        } else {
            printMessage ('Nieznany ruch. Spróbuj jeszcze raz ! ')
        } 
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
  playGame  

 