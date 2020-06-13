/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = 1;

var score1DOM = document.querySelector('#score-0');
var score2DOM = document.querySelector('#score-1');
var current1DOM = document.querySelector('#current-0');
var current2DOM = document.querySelector('#current-1');
var diceDOM = document.querySelector('.dice');
var btn_rollDOM = document.querySelector('.btn-roll');
var btn_holdDOM = document.querySelector('.btn-hold');

diceDOM.style.display = 'none';
current1DOM.textContent='0';
current2DOM.textContent='0';
score1DOM.textContent='0';
score2DOM.textContent='0';



function roll(){
  dice = Math.floor(Math.random()*6)+1;
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice +'.png';
  if(dice!=1){
    roundScore += dice;
    if(activePlayer==0){
      current1DOM.textContent = roundScore;
      current2DOM.textContent = '0';
    }else{
      current1DOM.textContent = '0';
      current2DOM.textContent = roundScore;
    }
  }else{
    roundScore = 0;
    current1DOM.textContent = '0';
    current2DOM.textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
  }

}
function hold(){
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  scores[activePlayer]+=roundScore;
  if(activePlayer==0){
    roundScore=0
    activePlayer=1
    score1DOM.textContent = scores[0];
    current1DOM.textContent = roundScore;
  }else{
    roundScore=0
    activePlayer=0
    score2DOM.textContent = scores[1];
    current2DOM.textContent = roundScore;
  }

}

btn_rollDOM.addEventListener('click', roll)
btn_holdDOM.addEventListener('click', hold)
