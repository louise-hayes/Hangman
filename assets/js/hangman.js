// variables ***************************************

var wordsArray = ["picture", "sunny", "adam", "ben", "codersrock"];
var guessWord;
var winCntr = 0;
// .split --will split the string into an array using what ever seperator you specify, in this case '' blank, so everything is seperated
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet);

// set variable counter - the number of tries
var triesCount = 0;
// note to self for later numTriesDiv.innerHTML = "text to go in div NoOfTries"
// can also put h1 in here and change innerHTML to insertAdjacentHTML
var numTriesDiv = document.getElementById("noOfTries");
var guessDiv = document.getElementById("guess");
var randomWord;
var alphabetDiv = document.getElementById("alphabet");


//Functions *****************************************

//  find a random word from the wordsArray. Returns a random word
function pickword() {
    var randNo = Math.floor(Math.random() * wordsArray.length);
    var chosenWord = wordsArray[randNo];
    return chosenWord;
}

// return event - the letter!
function checkLetter(event) {
    // event.srcElement.id requested to the letter
    var letter = event.currentTarget.id;
    console.log(letter);
    var posIndex = 0;
    var letterElement = document.getElementById(event.srcElement.id);
    letterElement.style.color = "red";
    IsLetterInRandomWord(letter, 0);
    showGuess();
    triesCount++;
    numTriesDiv.innerHTML = ("Number of Tries: " + triesCount);
    var newDiv = document.createElement("winDiv");
    newDiv.innerHTML = (" Number of Wins: " + winCntr);
    numTriesDiv.appendChild(newDiv);



    // showguess to browser in div guess


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
    }
    return false;

}

// show guess in div guess
function showGuess() {
    var guessString = "";
    for (var i = 0; i < guessWord.length; i++) {
        guessString = guessString + guessWord[i] + ",";
    }
    guessDiv.innerHTML = ("Word : " + guessString);


    if (guessWord.join("") == randomWord) {
        winCntr++;

        //alert("Hurray you won!!");


    }

}

// called when reset button clicked
function resetButton() {

    console.log("resetting");
    triesCount=0;
    
    init();

}




// Begin //
function init() {
    // initialise alphabetDiv
    // same as document.getElementById("goy").innerHTML = "";
    // alphabetDiv.innerHTML = "";
    document.getElementById("alphabet").innerHTML = "";
    // initialise all Div's
    document.getElementById("guess").innerHTML = "";
    document.getElementById("noOfTries").innerHTML = "";
    numTriesDiv.innerHTML = ("Number of Tries: " + triesCount);
    var newDiv = document.createElement("winDiv");
    newDiv.innerHTML = (" Number of Wins: " + winCntr);
    numTriesDiv.appendChild(newDiv);
    
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
    guessWord = [];
    triesCount = 0;
    randomWord = pickword();


    // find a random word from wordsArray and returns randomWord


    console.log("chosen random word is " + randomWord);

    // populate guessWord with dashes 
    for (var i = 0; i < randomWord.length; i++) {
        guessWord.push('_');
    }

    console.log("guessWOrd is " + guessWord);
    showGuess();
}
init();