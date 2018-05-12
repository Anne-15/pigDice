//business logic
var condition;
var element1 = function(currentScore) {
    var dice = Math.floor((Math.random() * 6) + 1);
    if (dice < 2) {
        var currentScore = 0;
        return currentScore;
    } else if (dice >= 2) {
        currentScore += dice
        var i = 0;
        return currentScore;
    };
};


var Player = function(result1, result2, play1, play2, ) {
    var result1 = 0;
    var result2 = 0
    var play1 = 0;
    var play2 = 0;
    var play = [];
}

function Play(numbers) {
    this.numbers = numbers;
};

$("#p1").text();
$("#p2").text();

//user interface logic
//roll dice
$(document).click(function() {
    $("#show").click(function() {

    });
});