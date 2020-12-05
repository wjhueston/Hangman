$(document).ready(function () {
        var holidayTooltip = document.getElementById('holidayTip');

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            holidayTooltip.style.top = (y + 20) + 'px';
            holidayTooltip.style.left = (x + 20) + 'px';
        };
    //The assignment starts here. I really like the tooltip text that follows the mouse, so I put it above.
    var dictionary = ["Ornament",
        "Evergreen",
        "Bright",
        "Family",
        "Menorah",
        "Presents",
        "Reindeer",
        "Memories",
        "Vacation",
        "Holiday",
        "Desserts",
        "Shopping",
        "Blizzard",
        "Music",
        "Candles",
        "Comfort",
        "Warmth"]
    window.onload= Hangman
    function Hangman(event) {
        event.preventDefault()
        var wrongGuesses = 0
        var randomNumber = Math.floor(Math.random() * 17)
        var randomWord = dictionary[randomNumber]
        var wordArray = randomWord.split('')
        var gameArray = []
        $("#wrongGuesses").text("Wrong Guesses: " + wrongGuesses)
        for (var i = 0; i < wordArray.length; i++) {
            gameArray.push("-")
        }
        gameArray.toString = function () {
            return this.join('')
        }
        $("#theWord").text(gameArray.toString())
        $("button").click(LetterCheck)
        function LetterCheck(event) {
            event.preventDefault()
            var selectedLetter = event.target.getAttribute('data-letter')
            var index = wordArray.indexOf(selectedLetter)
            wordArray[0] = wordArray[0].toLowerCase()
            if (index !== -1) {
                while(wordArray.includes(selectedLetter)){
                    wordArray[index] = "-"
                    if (index === 0) {
                        gameArray[index] = selectedLetter.toUpperCase()
                    } else {
                        gameArray[index] = selectedLetter
                    }
                    index=wordArray.indexOf(selectedLetter)
                }

            } else {
                wrongGuesses++
            }
            $("#wrongGuesses").text("Wrong Guesses: " + wrongGuesses)
            $("#theWord").text(gameArray.toString())
            if(wrongGuesses >= 6 || !gameArray.includes('-')){
                var complete;
                if (wrongGuesses >= 6) {
                    complete = "For the crime of not guessing the right letters, the jury finds you guilty!"
                    $(".letterButton").hide()
                } else {
                    complete = "You guessed the right letters, the jury finds you not guilty!"
                    $(".letterButton").hide()
                }
                $("#completionMessage").text(complete)
            }
        }

    }
}
)