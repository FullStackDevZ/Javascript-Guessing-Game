var wins = 0;
var losses = 0;
var GuessesLeft = 10;

var guesses = []; // Holds user guesses
var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Letters assigned to computer

//Makes the computer pick a random letter
var computerPicks = compLetters[Math.floor(Math.random() * compLetters.length)];


// Update guesses left
function GuessesLeftMSG() {
    document.getElementById("guesses-left").textContent;
    
};

// What the user has guessed so far
    // Separates the guesses via commas
    // = guesses.join(", ");
    // YourGuessesMSG.textContent = "Your guesses" + userGuess;


// Update wins


// Update losses

// print out in reset
function reset() {
    guessesLeft = 10;
    guesses = [];
    wins = 0;
    losses = 0;
}; 

// computerPicks();

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// updateGuessesLeft();

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
        // and +1 to losses
        else if (userGuess != computerPicks) {
            GuessesLeft--;
            guesses.push(userGuess); //adds news element to userGuess
            document.getElementById("guesses-left").textContent = GuessesLeft;
            document.getElementById("guesses-so-far").textContent = guesses;
        
            // document.getElementById("losses2").textContent = losses;
            // lossesMSG();
            // GuessesLeftMSG();
        }

        //Once the # of guesses reaches 0, restart the game
        else if (GuessesLeft === 0) {
            losses++;
            // document.getElementById("guesses-left").textContent = GuessesLeft;
            reset();
        }
    }

    
    //    var title = document.getElementById("play").textContent;
    // var computerGuess = document.getElementById("computer").textContent;
};
