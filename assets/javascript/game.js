// Global variables
// ==================================

// create an array of words
var words = ["kylo ren", "mace windu", "lando", "c-3po", "obi-wan", "rey", "luke", "yoda",]
// choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];


// Dom manipulation

var docUnderScore = document.getElementsByClassName("underScore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

// testing
console.log(chosenWord);

// explain to the user how to start the game
alert("Guess a Star Wars Character! Press OK, then type any letter to begin the game.");



// creates underscores based on length of word
var generateUnderScore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }

    return underScore;
    
}


console.log(generateUnderScore());

// gets users guess


document.addEventListener("keypress", (event) => {
    
 var keyWord = String.fromCharCode(event.keyCode);
    console.log(keyWord);
    // if user guess is right
    if (chosenWord.indexOf(keyWord) > -1) {

        // add to right words array
        rightWord.push(keyWord);
        // replace underscore with right varter
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightGuess[0].innerHTML = rightWord;

        // checks to see if user word matches guesses
    if (underScore.join("") == chosenWord) {
            alert("You Win! To play again, refresh the page!");
      }
    }

        else {
            wrongWord.push(keyWord);
            docWrongGuess[0].innerHTML = wrongWord;
        }
        
    

});





// check if guess is right
// if right push to right array
// if wrong push to wrong array

