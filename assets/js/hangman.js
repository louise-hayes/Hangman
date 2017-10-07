// variables ***************************************

var wordsArray = ["picture", "sunny", "adam", "ben", "codersrock", "oisin"];
var guessWord;
var lettersUsed = [];
var winCntr = 0;
const totalGuesses = 10;
var guessesRemaining = totalGuesses;

// .split --will split the string into an array using what ever seperator you specify, in this case '' blank, so everything is seperated
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet);

// set variable counter - the number of tries
// var triesCount = 0;
// note to self for later numTriesDiv.innerHTML = "text to go in div NoOfTries"
// can also put h1 in here and change innerHTML to insertAdjacentHTML
var numTriesDiv = document.getElementById("noOfTries");
var guessDiv = document.getElementById("guess");
var winDiv = document.getElementById("winDiv");
var alphabetDiv = document.getElementById("alphabet");
var numGuessesDiv = document.getElementById("numGuessesDiv");
var rightDiv = document.getElementById("rightDiv");

var letter = "";
var hasWon = 0;
var randomWord;

//Functions *****************************************

//  find a random word from the wordsArray. Returns a random word
function pickword() {
    var randNo = Math.floor(Math.random() * wordsArray.length);
    var chosenWord = wordsArray[randNo];
    return chosenWord;
}

// return event - the letter!
function checkLetter(event) {
    if (guessesRemaining !== 0) {
        rightDiv.innerHTML = ("");

        // event.srcElement.id requested to the letter
        letter = event.currentTarget.id;
        console.log(letter);
        var posIndex = 0;
        var letterElement = document.getElementById(event.srcElement.id);
        letterElement.style.color = "red";
        // guessesRemaining--;
        winDiv.innerHTML = (" Number of Wins: " + winCntr);
        numGuessesDiv.innerHTML = ("Guesses Remaining: " + guessesRemaining);

        if (lettersUsed.indexOf(letter) == -1 || (guessesRemaining === totalGuesses)) {
            guessesRemaining--;
            console.log("letter not typed already or first time" + lettersUsed.indexOf(letter));
        }
        lettersUsed.push(letter);


        IsLetterInRandomWord(letter, 0);
        showGuess();



    } 

}


// Is player letter in randomWord
function IsLetterInRandomWord(letter, checkIndex) {
    // check for falsey which is if its first letter of the randomWord so index 0

    if (checkIndex < randomWord.length && randomWord.indexOf(letter, checkIndex) !== -1) {

        // letter is in the randomWord
        console.log("Found a match " + letter);
        // Populate the guessed letter into the guessWord in right position

        // if a letter is in the array twice you must place it twic so
        // so you need to check is this letter in the random word more than once
        // recursive function - if match call itself again and pass another arg called position and use that to check with that position until its false.
        // 
        checkIndex = randomWord.indexOf(letter, checkIndex);
        console.log("letter " + "checkIndex " + checkIndex);
        guessWord[checkIndex] = letter;

        //check if it is in the word multiple times in a recursive function 


        IsLetterInRandomWord(letter, checkIndex + 1);
        return true;
    } else if (guessesRemaining == 0){
        showGuess();
        rightDiv.innerHTML = ("You have lost...The winning word was: " + randomWord);
        init();
    }



    return false;

}

// show guess in div guess
function showGuess() {
    var guessString = "";
    for (var i = 0; i < guessWord.length; i++) {
        guessString = guessString + guessWord[i] + ",";
    }
    guessDiv.innerHTML = ("Word : " + guessString.substring(0, guessString.length - 1));
    numGuessesDiv.innerHTML = (" Guesses Remaining: " + guessesRemaining);
    if (guessWord.join("") == randomWord) {
        winCntr++;
        winDiv.innerHTML = (" Number of Wins: " + winCntr);
        guessesRemaining = totalGuesses;
        numGuessesDiv.innerHTML = (" Guesses Remaining: " + guessesRemaining);
        rightDiv.innerHTML = ("Well Done...The winning word was: " + randomWord);
        // alert("you won!! " + winCntr + "guessesRemaining = " + guessesRemaining);
        init();

    }

}

// called when reset button clicked
function resetButton() {
    console.log("resetting");
    
    init();
}




// Begin //
function init() {
    guessWord = [];
    lettersUsed = [];
    letter = "";
    guessesRemaining = totalGuesses;
    randomWord = pickword();

    console.log("chosen random word is " + randomWord);
    document.getElementById("guess").innerHTML = "";

    document.getElementById("alphabet").innerHTML = "";
    document.getElementById("winDiv").innerHTML = "";
    document.getElementById("numGuessesDiv").innerHTML = "";
    // document.getElementById("rightDiv").innerHTML = "";
    // rightDiv.innerHTML = ("");
    winDiv.innerHTML = (" Number of Wins: " + winCntr);
    numGuessesDiv.innerHTML = (" Guesses Remaining: " + guessesRemaining);

    for (var i = 0; i < alphabet.length; i++) {
        // creating anchor element which is a link for each letter in alphabet  
        var aTag = document.createElement('a');
        //linking to itself
        aTag.setAttribute('href', "#");
        //displaying the link in the browser
        aTag.innerHTML = alphabet[i];
        //this creates the ahref # id 'letter'
        aTag.id = alphabet[i];
        //creating the event on clikc, and calling checkLetter function, 
        aTag.addEventListener("click", checkLetter, false);
        //adding the link to the <div id="alphabet">  so it will appear in correct div in browser
        alphabetDiv.appendChild(aTag);
    }
    
    console.log("chosen random word is " + randomWord);
    // populate guessWord with dashes 
    for (var i = 0; i < randomWord.length; i++) {
        guessWord.push('_');
    }

    console.log("guessWOrd is " + guessWord);
    showGuess();
}

init();