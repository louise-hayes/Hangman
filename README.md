

## Welcome to Hangman - a Web App Game built using dynamically updated HTML powered by JavaScript.

The app randomly picks a word from an array, and the user has to guess which word the app chose. 
The user is presented with the following information:

![screen shot 2019-03-06 at 20 13 25](https://user-images.githubusercontent.com/29293985/53925024-6fdda680-404c-11e9-8f21-ff8135fc7913.png)

## Files in the App:

index.html
assets/css/style.css
assets/js/hangman.js

Launch the App: https://louise-hayes.github.io/Hangman/
Git: https://github.com/louise-hayes/Hangman/


test it out using the following word 'codersrock'.
Wins: (# of times the user has guessed the word correctly)
Losses: (# of times the user has failed to guess the word correctly after exhausting all guesses)
Guesses Remaining: (# of guesses left. This will update)
Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
Press any key to get started!


If the word is madonna, it will display like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, they are revealed: m a d o _  _ a.
After the user wins/loses the game automatically chooses another word and makes the user play it.




