function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
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