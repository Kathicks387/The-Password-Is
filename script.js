// Assignment Code
var generateBtn = document.querySelector("#generate");
var begin;
var confirmCapitalLetters;
var confirmSmallLetters;
var confirmNumbers;
var confirmSpecialCharacters;

var selections;
special = ["!", "@", "#","$", "%", "^", "&", "*" ];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



//Add event listener to generate button
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

alert("Hello!  Let's get you a password.  Please press the Generate Password button to begin.");

function generatePassword() {
    
    begin = parseInt(prompt("How many characters would you like to have in your password? Please choose between 8 and 128 characters"));
 
    if (!begin) {
      alert("We must have a password length in order to create your password.");
      generatePassword();
    }
    else if (begin < 8 || begin > 128) {
   
        begin = parseInt(alert("You must choose a password length between 8 and 128"));
      generatePassword();
    } 
    else {
        confirmCapitalLetters = confirm("Would you like to have capital letters in your password?");
        confirmSmallLetters = confirm("Would you like to have small letters in your password?");
        confirmNumbers = confirm("Would you like to have numbers in your password?");
        confirmSpecialCharacters = confirm("Would you like to have special characters in your password?");    
      }

     
    if (!confirmCapitalLetters && !confirmSmallLetters && !confirmNumbers && !confirmSpecialCharacters) {
        selections = alert("You must choose a criteria!");
        generatePassword();
    }
     
    else if (confirmCapitalLetters && confirmSmallLetters && confirmNumbers && confirmSpecialCharacters) {

        selections = capital.concat(small, numbers, special);
    }
     
    else if (confirmCapitalLetters && confirmNumbers && confirmSpecialCharacters) {
        selections = capital.concat(numbers, special);
    }
    else if (confirmSmallLetters && confirmNumbers && confirmSpecialCharacters) {
        selections = small.concat(numbers, special);
    }
    else if (confirmCapitalLetters && confirmSmallLetters && confirmSpecialCharacters) {
        selections = capital.concat(small, special);
    }
    else if (confirmCapitalLetters && confirmSmallLetters && confirmNumbers) {
        selections = capital.concat(small, numbers);
    }
     
    else if (confirmNumbers && confirmSpecialCharacters) {
        selections = numbers.concat(special);

    } 
    else if (confirmSmallLetters && confirmSpecialCharacters) {
        selections = small.concat(special);

    } 
    else if (confirmCapitalLetters && confirmSpecialCharacters) {
        selections = capital.concat(special);
    }
    else if (confirmSmallLetters && confirmNumbers) {
        selections = small.concat(numbers);

    } 
    else if (confirmCapitalLetters && confirmSmallLetters) {
        selections = capital.concat(small);

    } 
    else if (confirmCapitalLetters && confirmNumbers) {
        selections = capital.concat(numbers);
    }
    else if (confirmCapitalLetters) {
        selections = capital;
    }
    else if (confirmSmallLetters) {
        selections = small;
    }
    else if (confirmNumbers) {
        selections = numbers;
    }
    else if (confirmSpecialCharacters) {
        selections = special;
    }

    var password = [];

    
    for (var i = 0; i < begin; i++) {
        var pickSelections = selections[Math.floor(Math.random() * selections.length)];
        password.push(pickSelections);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
  }

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
