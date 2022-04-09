let userScore = 0;
let botScore = 0;

let temp = document.getElementById("temp");
let result = document.getElementById("result");
let BotP = document.getElementById("BotScore");
let PlayerP = document.getElementById("PlayerScore");

function computerPlay() {
  let arr = [1, 2, 3];
  let random = arr[Math.floor(Math.random() * 3)];
  let bot;
  switch (random) {
    case 1:
      bot = 'pedra';
      break;
    case 2:
      bot = 'papel';
      break;
    default:
      bot = 'tesoura';
  }
  return bot;
}


function PedraClick() {
    let player = 'pedra'
    botNumber = computerPlay()

    
    if (player == botNumber){
      temp.innerHTML = "Bot Escolheu pedra"
      result.innerHTML = "Empate"
    } else if (botNumber == "tesoura") {
      userScore += 1;
      temp.innerHTML = "Bot Escolheu tesoura"
      result.innerHTML = "Você Venceu"
      PlayerP.innerHTML = "Player Score - " + userScore
    } else if (botNumber == "papel") {
      botScore += 1;
      temp.innerHTML = "Bot Escolheu papel"
      result.innerHTML = "O bot Venceu"
      BotP.innerHTML = "Bot Score - " + botScore
  }
}

function PapelClick() {
    let player = 'papel'
    botNumber = computerPlay()

    
    if (player == botNumber){
      temp.innerHTML = "Bot Escolheu papel"
      result.innerHTML = "Empate"
    } else if (botNumber == "pedra") {
      userScore += 1;
      temp.innerHTML = "Bot Escolheu tesoura"
      result.innerHTML = "Você Venceu"
      PlayerP.innerHTML = "Player Score - " + userScore
    } else if (botNumber == "tesoura") {
      botScore += 1;
      temp.innerHTML = "Bot Escolheu papel"
      result.innerHTML = "O bot Venceu"
      BotP.innerHTML = "Bot Score - " + botScore
  }
}

function TesouraClick() {
    let player = 'tesoura'
    botNumber = computerPlay()

    
    if (player == botNumber){
      temp.innerHTML = "Bot Escolheu tesoura"
      result.innerHTML = "Empate"
    } else if (botNumber == "papel") {
      userScore += 1;
      temp.innerHTML = "Bot Escolheu tesoura"
      result.innerHTML = "Você Venceu"
      PlayerP.innerHTML = "Player Score - " + userScore
    } else if (botNumber == "pedra") {
      botScore += 1;
      temp.innerHTML = "Bot Escolheu papel"
      result.innerHTML = "O bot Venceu"
      BotP.innerHTML = "Bot Score - " + botScore
  }
}
