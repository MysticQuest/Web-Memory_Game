var buttonIds = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

var gamePattern = [];
var playerPattern = [];


//press any key to start/diplays level
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    started = true;
  }
});

//resets level and game pattern
function gameOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
