# Project releted to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code
## Project 1
``` JavaScript

console.log("om patel")

const button = document.querySelectorAll(".button")
const body = document.querySelector("body")


button.forEach(function (button){
  console.log(button)
    button.addEventListener('click' , function(e){
      // console.log(e);
      console.log(e.target);

      if(e.target.id === 'grey'){
        body.style.background = e.target.id
        body.style.color = 'white'
      }
      if(e.target.id === 'white'){
        body.style.background = e.target.id
        body.style.color = 'grey'
      }
      if(e.target.id === 'blue'){
        body.style.background = e.target.id
        body.style.color = 'yellow'
      }
      if(e.target.id === 'yellow'){
        body.style.background = e.target.id
        body.style.color = 'blue'
      }
    })
})

```

## Project 2

``` JavaScript
const form = document.querySelector('form')

form.addEventListener('submit' , function(e){

  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == '' || height<0 || isNaN(height)){
    results.innerHTML = 'please enter valid number';
  }else if(weight == '' || weight<0 || isNaN(weight)){
    results.innerHTML = 'please enter valid number';
  }else{
   const bmi =  (weight/((height * height)/10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;
  }

})

```
## project 4 

``` JavaScript


const randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


let prevGuess = [];
let numGuess = 1;
let playGame = true;


const p = document.createElement('p');

if(playGame){
  submit.addEventListener("click" , function(e){
    e.preventDefault();

   const guess =  parseInt(userInput.value)
   console.log(guess)
   validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("कृपया एक valid नंबर डालें");
  } else if (guess < 1) {
    alert("नंबर 1 से बड़ा होना चाहिए");
  } else if (guess > 100) {
    alert("नंबर 100 से छोटा होना चाहिए");
  } else {
    prevGuess.push(guess);
    
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Random Number था ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("🎉 बधाई हो! आपने सही नंबर guess किया!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("📉 आपका guess बहुत low है");
  } else if (guess > randomNumber) {
    displayMessage("📈 आपका guess बहुत high है");
  }
}


function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess} chances बचे हैं`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess} chances बचे हैं`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}




```
## project 5 

``` JavaScript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let setInteravalId;

let StartChangingColor = function () {
   if(setInteravalId == null){
    setInteravalId = setInterval( ChangingColor , 900)
   }
  
  function ChangingColor(){
    document.body.style.backgroundColor = randomColor();
  }

};

start.addEventListener('click' , StartChangingColor);
stop.addEventListener('click' , function(){
  clearInterval(setInteravalId)
  setInteravalId = null;
});




```