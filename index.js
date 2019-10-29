var buttonIds = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

var gamePattern = [];
var playerPattern = [];


//press any key to start
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    started = true;
    nextLevel();
  }
});

//resets level and game pattern
function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").click(function() {

  var clickedButton = $(this).attr("id"); //gets the id of the obj that was clicked
  playerPattern.push(clickedButton); //and pushes it in the pattern

  playSound(clickedButton);
  animatePress(clickedButton);
  checkPattern(playerPattern.length-1);
});

function nextLevel() {
  playerPattern = []; //resets pattern
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);//creates gamePattern
  var randomButton = buttonIds[randomNumber];
  gamePattern.push(randomButton);

  $("#" + randomButton).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomButton);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkPattern (currentLevel) {

  if (gamePattern[currentLevel] === playerPattern[currentLevel]) {
    if (playerPattern.length === gamePattern.length){
      setTimeout(function () {
        nextLevel();
      }, 1000);
    }
  } else {
    gameOver();
  }
}
