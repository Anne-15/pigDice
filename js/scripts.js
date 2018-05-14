//business logic
condition;
var counter = math.floor((math.random) + 1);
var dice = (1, 2, 3, 4, 5, 6);
var dice = 0;
if (index === 0) {
    counter = null;
    return null;
}
elseif(index > 2) {
    counter += dice;
    var i = 0
    return counter;
}

//constructures
var Player = function(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
}
Player.prototype.counter = function() {
    return "this.player1" + "," + "this.player2"
}



//user interface
//play button 
$(document).click(function() {
    $("button#play").click(function() {

    });
});