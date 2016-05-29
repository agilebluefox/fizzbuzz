/*
    This program will print the numbers from 1 to 100, except when the number
    is divisible by 3 (fizz), 5 (buzz), or both (fizz buzz).
*/

$(document).ready( function() {
    for (var i=1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('body').append('<p>FizzBuzz</p>');
        } else if (i % 3 === 0) {
            $('body').append('<p>Fizz</p>');
        } else if (i % 5 === 0) {
            $('body').append('<p>Buzz</p>');
        } else {
            $('body').append('<p>' + i + '</p>');
        }
    }
});
