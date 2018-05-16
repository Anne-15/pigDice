//business logic
condition;
var counter = math.floor((math.random) + 1);
var dice = (1, 2, 3, 4, 5, 6);
if (index === 0) {
    counter = null;
    return null;
} else if (index > 2) {
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
        if (index === 0) {
            result1 = dice(result1);
            if (result1 > 1) {
                $("#dice").text(result1 - dice);
            } else {
                $("#dice").text("2");
            }
            counter = result1
            $("#score").text(result1)
            if (result1 === 0) {
                index = 1;
                dice = 0;
                $("#player1").hide();
                $("#player2").show();
            } else if ((result1 + total1) = 100) {
                total1 += result1;
                $("#result1").text(total1);
                alert("Player 1 Win!");
                index = 2;
            }
        } else if (index === 1) {
            result2 = dice(result2);
            if (result2 > 0) {
                $("#dice").text(result2 - dice);
            } else {
                $("#dice").text("1");
            }
            counter = result2
            $("#score").text(result2)
            if (result2 === 0) {
                index = 0;
                dice = 0;
                $("#player2").hide();
                $("#player1").show();
            } else if ((result2 + total2) = 100) {
                total2 += result2;
                $("#result2").text(total2);
                alert("Player 2 Win!");
                index = 2;
            }
        }
    });
});

$("button#pass").click(function() {
    if (index === 1) {
        index = 0;
        dice = 0;
        total2 += result2;
        $("#result2").text(total2);
        $("#score").text(0)
        result2 = 0;
        $("#player2").hide();
        $("#player1").show();
    } else if (index === 0) {
        index = 1;
        dice = 0;
        total1 += result1;
        $("#result1").text(total1);
        $("#score").text(0)
        result1 = 0;
        $("#player1").hide();
        $("#player2").show();
    }
});

$("button#restart").click(function() {
    total1 = 0;
    total2 = 0;
    index = 0;
    result1 = 0;
    result2 = 0;
    $("#player2").hide();
    $("#player1").show();
    $("#score").text(0)
    $("#result1").text(0);
    $("#result2").text(0);
});