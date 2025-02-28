//Assignment Code
const generateBtn = document.querySelector("#generate");
// let passwordText = document.getElementById('password').innerHTML;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

 

// Add event listener for click event on the generate button
 generateBtn.addEventListener("click", generatePassword);

// Function to generate password
function generatePassword() {
  console.log("Hey! You clicked the button!");
  var charactersLength = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charactersLength < 8 || charactersLength > 20) {
    return alert("Your password must be between 8 and 20 characters.");
  }

  // Variables to confirm character types to include in the password
  let includeLower = confirm("Click to confirm including lowercase letters");
  let includeUpper = confirm("Click to confirm including uppercase letters");
  let includeSymbol = confirm("Click to confirm including symbols");
  let includeNumber = confirm("Click to confirm including numbers");

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
  let password = ""; //  this line to initialize an empty string for the password
  for (let i = 0; i < charactersLength; i++) {
    let randomCharType = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    password += randomFunc[randomCharType]();
  }

  // Output the generated password
  console.log("Generated Password: " + password);
  
  //retruns the value to the HTML 
  document.getElementById("password").innerHTML = password;

}