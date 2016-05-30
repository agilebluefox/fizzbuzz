/*
    This program will print the numbers from 1 to 100, except when the number
    is divisible by 3 (fizz), 5 (buzz), or both (fizz buzz).
*/

$(document).ready( function() {
    // When the button is pressed, clear the container for the printout,
    // get the input, make sure it's a valid number, then perform the test.
    var number;

    $('#inputNumber').submit(function(e) {
        // Clear out the results container when the user submits to
        // prevent previous results from appearing.
        $('div.result').empty();
        number = $('#inputNumber input').val();
        e.preventDefault();
        this.reset();
        var validNumber = validateInput(+number);
        if (validNumber) {
            fizzBuzz(validNumber);
        }
    });

    function validateInput(userNumber) {
        // Set the warning string to false
        var warning = "";

        // If the number is valid, print the analysis and conversion
        // If not, present some validation messages.
        if ( userNumber >= 15 && userNumber <= 1500 ) {
            // Return the number if it's valid.
            return userNumber;
        } else if ( userNumber < 15 ) {
            warning = "Your number is too low.";
        } else if ( userNumber > 1500 ) {
            warning = "Your number is too high.";
        } else {
            warning = "Please enter a valid number.";
        }
        printMessage(warning);
        // Return an undefined value if there was an error
        return;
    }

    function printMessage(message) {
        // If a warning message exists, print it to the results container.
        if (message) {
            console.log(message);
            // Use the append function to add the new paragraph
            // to the results container.
            $('div.result').append('<p>' + message + '</p>');
        }
    }

    // This function takes an integer and performs the 'fizzbuzz' test.
    function fizzBuzz(maxInteger) {
        var result = null;
        for (var i=1; i <= maxInteger; i++) {
            if (i % 15 === 0) {
                result = "FizzBuzz";
            } else if (i % 3 === 0) {
                result = "Fizz";
            } else if (i % 5 === 0) {
                result = "Buzz";
            } else {
                result = i;
            }
            // Use the append function to add the results to the container.
            $('div.result').append('<p>' + result + '</p>');
        }
    }

});

