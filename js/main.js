/*----- constants -----*/
const WORDS = [
  'black hole',
  'planets',
  'space force',
  'light speed',
  'interstellar',
  'exploration',
  'cosmic',
  'sputnik',
  'gravity',
  'asteroid',
  'galaxy',
  'star'
];

/*----- app's state (variables) -----*/
let wrongGuesses;  // Array to hold incorrect letters
let secret;  // Array of the chars for the randomly selected word
let guess;  // Array of current guessed letters
let gameStatus;  // null -> game in progress; 'W' -> won; 'L' -> lost

/*----- cached element references -----*/
const replayBtn = document.getElementById('play-again-btn');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
  wrongGuesses = [];
  const rndIdx = Math.floor(Math.random() * WORDS.length);
  secret = WORDS[rndIdx].split('');
  // map always returns a NEW array of the same # of elements
  guess = secret.map(ltr => ltr === ' ' ? ' ' : '_');
  gameStatus = null;
  render();
}

function render() {
  // render the message
  // render the spaceman
  // render the guess
  // render the buttons
  renderButtons();
}

function renderButtons() {

  replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}
