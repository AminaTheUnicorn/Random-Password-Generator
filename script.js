var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = '0123456789';
var sym = '!@#$%^&*=-_';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwdLength = prompt("What is your password length?")
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password length too long or short. Length was " + pwdLength)
    return "";
  }
  var useLowerChar = confirm("Do you want to use lower case characters?")
  var useUpperowerChar = confirm("Do you want to use upper case characters?")
  var useSym = confirm("Do you want to want to use a symbol?")
  var useNum = confirm("Do you want to use numbers?")
  var password = "";
  var charSelection = [];

  if (useLowerChar)
    charSelection.push(lowerChar);

  if (useSym)
    charSelection.push(sym);

  if (useNum)
    charSelection.push(num);

  if (useUpperowerChar)
    charSelection.push(upperChar);

  if (charSelection.length === 0) {
    alert("You selected no characters for the password, try again.")
  }
  else {
    for (var i = 0; i < pwdLength; i++) {
      var nextChartype = calculateRandompos(charSelection);
      var charArray = charSelection[nextChartype]
      password = password + charArray[calculateRandompos(charArray)]

    }
  }



  return password
}
function calculateRandompos(array) {
  var randomcharacterpos = Math.floor(Math.random() * array.length)
  return randomcharacterpos;
}
////////////////////////////////////////////////////////////////




