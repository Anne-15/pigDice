//business logic
var condition;
var player = function(currentScore) {
    var dice = (1, 2, 3, 4, 5, 6);
    if (dice < 1) {
        var currentScore = 0;
        return null;
    } else if (dice >= 2) {
        currentScore += numbers
        var i = 0;
        return currentScore;
    };
};


var Game = function(result1, result2, result1, result2) {
    this.result1 = result1;
    this.result2 = result2;
    this.result1 = result1;
    this.result2 = result2;
}
$("#p1").text();
$("#p2").text();
$("#dice").text();
$("#result1").text();
$("#result2").text();


//user interface logic
//roll dice

$("button#show").click(function() {
    if (index === 0) {
        p1 = player(p1);
        if (p1 > 0) {
            $("#dice").text(p1);
        } else {
            $("#dice").text("1");
        }
        dice = p1
        $("#roll").text(result1)
        if (p1 === 0) {
            index = 1;
            dice = 0;
            $("#player1").hide();
            $("#player2").show();
        } else if ((p1 + total1) = 100) {
            total1 += result1;
            $("#p1").text(total1);
            alert("Player 1 Wins!");
            index = 2;
        };
    };
    if (index === 1) {
        p2 = player(p2);
        if (p2 > 0) {
            $("#dice").text(p2);
        } else {
            ("#dice").text("1");
        }
        dice = p2
        $("#roll").text(result2)
        if (p2 === 0) {
            index = 1;
            dice = 0;
            $("#player1").show();
            $("#player2").hide();
        } else if ((p2 + total2) = 100) {
            total2 += result2;
            $("p2").text(total2);
            alert("Player 2 Wins!")
            index = 2;
        };
    };
});
//pass 
$("button#pass").click(function() {
    if (index === 1) {
        index = 0;
        dice = 0;
        total2 += result2;
        $("#result2").text(total2);
        $("#rolll").text(0)
        result2 = 0;
        $("#player2").hide();
        $("#player1").show();
    } else if (index === 0) {
        index = 1;
        dice = 0;
        total1 += result1;
        $("#result1").text(total1);
        $("#roll").text(0)
        result1 = 0;
        $("#player1").hide();
        $("#player2").show();
    }
});