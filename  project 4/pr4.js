let random = parseInt(Math.random()*100 +1); // this is used to generate the random number between 1 to 100

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('#lowOrHi');
const startOver = document.querySelector('.resultParas');  // ???

const p = document.createElement('p'); // we will create a new para in which some info will be written out

let prevGuess = [];
let numGuess = 1; // ???

let PlayGame= true;

if(PlayGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please give a valid number`);
    } else if(guess<1){
        alert(`Please enter a number more than 1`);
    } else if(guess>100){
        alert(`Please enter a number smaller than 100`);
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess); // ???
            displaymessage(`Game Over. Random number was ${random}`);
            endGame();
        } else{
            displaymessage(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if( guess === random){
        displaymessage(`You guessed it right`);
        endGame();
    } else if(guess<random){
        displaymessage('Number is too low');
    } else if(guess>random){
        displaymessage('Number is too high');
    }
}

function displayGuess(guess){
    userinput.value = ''; // ??
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled', ''); // ???
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
    startOver.appendChild(p);
    PlayGame = false;
    newGame();
}

function newGame(){
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random()*100 +1);
        prevGuess=[];
        numGuess= 1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11- numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);

        PlayGame=true;
    });

}