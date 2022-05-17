// Assignment Code
var Capitalchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerchar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialchar = ["=", "+", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", ".", "/", ":", ";", "<", ">", "?", "[", "]", "~", "}", "{", "`"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var getpasswordlength = parseInt(prompt("How long would you like your password to be? (Choose between 8 and 24 characters.)"));
  if (getpasswordlength < 8 || getpasswordlength > 126) {
    return "Invalid Length entered"
  }
  var getCapitalchar = confirm("Will Include Capital Charactes.");
  var getlowerchar = confirm("Will Include lower Charaters");
  var getspecialchar = confirm("Will Include Special Characters");
  var gernumb = confirm("Will Include Numbers");


}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);