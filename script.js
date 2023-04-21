//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 

// Add event listener for click event on the generate button
 generateBtn.addEventListener("click", generatePassword);

// Function to generate password
function generatePassword() {
  console.log("Hey! You clicked the button!");
  var charactersLength = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charactersLength < 8 || charactersLength > 128) {
    return alert("Your password must be between 8 and 128 characters.");
  }

  // Variables to confirm character types to include in the password
  var includeLower = confirm("Click to confirm including lowercase letters");
  var includeUpper = confirm("Click to confirm including uppercase letters");
  var includeSymbol = confirm("Click to confirm including symbols");
  var includeNumber = confirm("Click to confirm including numbers");

  // If statement when all confirmations are false, prompt generates an alert message telling the user to confirm at least one character type
  if (includeLower === false && includeUpper === false && includeSymbol === false && includeNumber === false) {
    return alert("You must select at least one character type.");
  }

  // Array to store selected character types
  var selectedCharTypes = [];
  if (includeLower) {
    selectedCharTypes.push('lower');
  }
  if (includeUpper) {
    selectedCharTypes.push('upper');
  }
  if (includeSymbol) {
    selectedCharTypes.push('symbol');
  }
  if (includeNumber) {
    selectedCharTypes.push('number');
  }

  var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol,
    number: getRandomNumber
  };
  
  // Function to generate a random lowercase letter
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  // Function to generate a random uppercase letter
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  // Function to generate a random symbol
  function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  // Function to generate a random number
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  // Loop through the selected character types and generate password characters
  var password = ""; // Added this line to initialize an empty string for the password
  for (var i = 0; i < charactersLength; i++) {
    var randomCharType = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    password += randomFunc[randomCharType]();
  }

  // Output the generated password
  console.log("Generated Password: " + password);
  return password; // Updated this line to return the generated password

}