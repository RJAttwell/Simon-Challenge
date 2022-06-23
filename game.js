buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence(){

    var randomNum = Math.random();
    randomNum = Math.floor((randomNum * 3)+1);

};

var randomChosenColour = buttonColours[randomNum];
gamePattern.push(randomChosenColour);

$("button").on("click", function(){
    $("button").animate(
        {
            opacity: 0.5,
            margin: "10%"
        }
    );
});