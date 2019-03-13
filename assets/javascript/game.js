var wins = 0;
var losses = 0;
var GuessesLeft = 10;

var guesses = []; // Holds user guesses
var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Letters assigned to computer

//Makes the computer pick a random letter
var computerPicks = compLetters[Math.floor(Math.random() * compLetters.length)];


// print out in reset
function reset() {
    GuessesLeft = 10;
    guesses = [];
    compLetters;
    // document.getElementById("guesses-so-far").textContent;
}; 

// Letters the user can enter
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

document.onkeyup = function (event) {

    var userGuess = event.key;

    console.log(userGuess);
    
    if (letters.indexOf(userGuess) > -1) {

        // If the userGuess matches the Computer: +1 win, Still 10 guesses
        if (userGuess === computerPicks) {
            wins++;
            document.getElementById("wins2").textContent = wins;
            reset();
        }

        // If they choose incorrectly decrement -1 from guesses left
        else if (userGuess != computerPicks) {
            GuessesLeft--;
            guesses.push(userGuess); //adds news element to userGuess
            document.getElementById("guesses-left").textContent = GuessesLeft;
            document.getElementById("guesses-so-far").textContent = guesses;
        }

        //Once the # of guesses reaches 0, restart the game
        else if (GuessesLeft === 0) {
            losses++;
            guesses.push(losses);
            document.getElementById("losses2").textContent = losses;
            reset();
        }

    }

    
    //    var title = document.getElementById("play").textContent;
    // var computerGuess = document.getElementById("computer").textContent;
};
