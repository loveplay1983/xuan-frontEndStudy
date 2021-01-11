/****************************************************************************************************
code tricks:
1. Gen Random 
 Math.floor(Math.random() * 6);
2. rpsDatabase object for generating user and bot socres
*****************************************************************************************************/

// Rock, Paper, Scissor
function rpsGame(yourChoice) {
  var userChoice, botChoice;                       // user and bot                                
  userChoice = yourChoice.id;                      // user choice
  botChoice = numberToChoice(randToRpsInt());      // bot picks up a random choice
  result = decideWinner(userChoice, botChoice);    // [0, 1] human lost | bot won
  message = finalMessage(result);                  // { 'message': e'You won!', 'color': 'green'} which will help to yield the final display
  rpsFrontEnd(userChoice, botChoice, message);
}

/***************  Generate random choice from bot ********************/
function randToRpsInt() {
  // Gen random index
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  // Pick up random choice
  return ["rock", "paper", "scissor"][number];
}

// decide winner
function decideWinner(userChoice, botChoice) {
  /************************************************************************************************** 
   THe rpsDatabase is used for generating different choices in between user and computer.
   Each time user gets database[user][bot] number whereas computer gets database[bot][user]
  ****************************************************************************************************/
  var rpsDatabase = {
    "rock": { "scissor": 1, "rock": .5, "paper": 0 },
    "paper": { "rock": 1, "paper": .5, "scissor": 0 },
    "scissor": { "paper": 1, "scissor": .5, "rock": 0 }
  };

  var userScore = rpsDatabase[userChoice][botChoice];
  var botScore = rpsDatabase[botChoice][userChoice];

  return [userScore, botScore];
}


// final message
function finalMessage([userScore, botScore]) {
  if (userScore === 0) {
    return { "message": "You Lost!!!", "color": "red" };
  } else if (userScore === .5) {
    return { "message": "You tied!!!", "color": "yellow" };
  } else {
    return { "message": "You won!!!", "color": "green" };
  }
}

// final display
function rpsFrontEnd(userChoice, botChoice, message) {

  // Gets the rock, paper, scissor image source first and saves it to the imgDatabase
  var imgDatabase = {
    "rock": document.getElementById("rock").src,
    "paper": document.getElementById("paper").src,
    "scissor": document.getElementById("scissor").src
  }

  // remove imgs
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  // create new div, html for finall display
  var userDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  userDiv.innerHTML = "<img src='" + imgDatabase[userChoice] +
    "' height=120 width=110 style='box-shadow: 0px 10px 35px rgba(37, 50, 233, 0.8'>";

  messageDiv.innerHTML = "<h1 style='color: " + message['color'] +
    "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>";

  botDiv.innerHTML = "<img src='" + imgDatabase[botChoice] +
    "' height=120 width=110 style='box-shadow: 0px 10px 35px rgba(250, 35, 24, 0.8'>";

  document.getElementById("flex-box-rps-id").appendChild(userDiv);
  document.getElementById("flex-box-rps-id").appendChild(messageDiv);
  document.getElementById("flex-box-rps-id").appendChild(botDiv);
}



// refresh page
function refresh() {
  window.location.reload();
}