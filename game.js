buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

//Next Sequence Function
function nextSequence(){

    var randomNum = Math.floor(Math.random()* 4);

    var randomChosenColour = buttonColours[randomNum];
    gamePattern.push(randomChosenColour);

    //Select button with same ID as the random chosen colour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play a mp3 file associated with that colour from sounds folder
    playSound(randomChosenColour);

};


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

});

//Play Sound Function
function playSound(name){
    var randomSound = new Audio("sounds/" + randomChosenColour + ".mp3");
    randomSound.play(); 
};


//Function to animate buttons
function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
       }, 100);
};