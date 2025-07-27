const randomNumber = parseInt(Math.random() *100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHi =  document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // it will validate whether the number is between 1 to 100 or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a number more than 1')
    } else if(guess>100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess) // array bnte jara h
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess()
        }
    }

}

function checkGuess(guess){
    // it will check our guess is equal to random number , greate or samller
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    // it will display the array of guess and the remaining guesses
    userInput.value = '' // mtlb ye jo hmne input liya tha uske khali krr rha hsmjh baat ko jaruri h
    guessSlot.innerHTML +=`${guess} ` // space diya dhyan se dekh
    numberGuess++;
    remaining.innerHTML = `${11-numGuess}`
}


function displayMessage(message){
    // it will display message yes you are right or the number low or high
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame(false);
    newGame();
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        //now we will reset our whole item
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = []
        numGuess= 1
        guessSlot.innerHTML =''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
