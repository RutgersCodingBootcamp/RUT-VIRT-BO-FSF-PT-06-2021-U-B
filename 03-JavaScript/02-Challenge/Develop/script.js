// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // array of special characters
  // array of numbers
  // array of lower case letters
  // array of upper case letters
  // empty array of characters
  //ask the user how many characters
  //ask the user if they want numbers
  //ask the user if they want special characters
  //ask the user if they want uppercase letters
  //ask the user if they want lower case letters
  // if numbers, append numbers to character array
  // if sc, append special characters to character array
  // if ul, append upper case letetrs to characters array
  // if ll, append lowercase letters
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
