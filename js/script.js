/*
    This program will print the numbers from 1 to 100, except when the number
    is divisible by 3 (fizz), 5 (buzz), or both (fizz buzz).
*/

$(document).ready( function() {
    // When the button is pressed, clear the container for the printout,
    // get the input, make sure it's a valid number
    var number;
    $('#inputNumber').submit(function(e) {
        $('div.result').empty();
        number = $('#inputNumber input').val();
        e.preventDefault();
        this.reset();
        number = validateInput(Number(number));
    });
});

function validateInput(userNumber) {
    // Set the warning string to false
    console.log(warning);
    var warning = "";

    // If the number is valid, print the analysis and conversion
    // If not, present some validation messages
    if ( userNumber >= 15 && userNumber <= 1500 ) {
        $('div.result p').replaceWith('<p>' + fizzBuzz(userNumber) + '</p>');
    } else if ( userNumber < 15 ) {
        warning = "Your number is too low.";
    } else if ( userNumber > 1500 ) {
        warning = "Your number is too high.";
    } else {
        warning = "Please enter a valid number.";
    }

    // If a warning message exists, print it to the results container
    if (warning) {
        console.log(warning);
        $('div.result p').replaceWith('<p>' + warning + '</p>');
    }
}

// This function takes an integer and performs the 'fizzbuzz' test
function fizzBuzz(maxInteger) {
    for (var i=1; i <= maxInteger; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('div.result').append('<p>FizzBuzz</p>');
        } else if (i % 3 === 0) {
            $('div.result').append('<p>Fizz</p>');
        } else if (i % 5 === 0) {
            $('div.result').append('<p>Buzz</p>');
        } else {
            $('div.result').append('<p>' + i + '</p>');
        }
    }
}