buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence(){

    var randomNum = Math.floor(Math.random()* 4);

    var randomChosenColour = buttonColours[randomNum];
    gamePattern.push(randomChosenColour);

    //Select button with same ID as the random chosen colour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play a mp3 file associated with that colour from sounds folder
    var randomSound = new Audio("sounds/" + randomChosenColour + ".mp3");
    randomSound.play(); 

};


$("keydown", function(event){


    
})