var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//Detect when a keyboard key has been pressed using jQuery
$(document).keypress(function(){
    if(!started){
        //Changes the h1 title to Level 0 and increases by 1 everytime a key is pressed
        $("#level-title").html("Level " + level);
        nextSequence();
        started = true; //Game has started
    }
});

//Detect when a button has been clicked on
$(".btn").click(function(){

    var userChosenColour = $(this).attr("id"); //Check the ID of what button has been clicked
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});

//Next Sequence Function
function nextSequence(){

    userClickedPattern = [];
    level++; //Increases level var by 1
    $("#level-title").html("Level " + level);

    //Generates random number between 0 and 3
    var randomNum = Math.floor(Math.random()* 4);

    var randomChosenColour = buttonColours[randomNum];
    //Adds item onto end of gamePattern array
    gamePattern.push(randomChosenColour);

    //Select button with same ID as the random chosen colour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play a mp3 file associated with that colour from sounds folder
    playSound(randomChosenColour);

};


//CHECK USER'S ANSWER FUNCTION SECTION

function checkAnswer(currentLevel){


    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success")

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000); 
        }

    }else{

        console.log("False")

        //GAME OVER
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        
        $("level-title").html("Game Over, Press Any Key To Restart");
    
        //Call the start over function to reset the game if the answer is wrong
        startOver();
    };


};

//SOUND AND ANIMATION SECTION

//Play Sound Function
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3"); //Plays mp3 file of the colour that was selected
    audio.play(); 
};


//Function to animate buttons
function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};

//RESTART THE GAME
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

