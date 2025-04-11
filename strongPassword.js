function strongPassword(pass) {
    const upperWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerWord = "abcdefghijklmnopqrstuvwxyz";
    const integer = "0123456789";
    const symbol = "!@";
  
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSymbol = false;
  
    // Check the length of the password
    if (pass.length < 8) {
      return false;
    }
  
    // Check each character in the password
    for (let char of pass) {
      if (upperWord.includes(char)) {
        hasUpper = true;
      } else if (lowerWord.includes(char)) {
        hasLower = true;
      } else if (integer.includes(char)) {
        hasDigit = true;
      } else if (symbol.includes(char)) {
        hasSymbol = true;
      }
    }
  
    // Return true only if all conditions are met
    return hasUpper && hasLower && hasDigit && hasSymbol;
  }
  
  console.log(strongPassword("Rohit8553")); // Should return true

// condition = Uppercase , lowerCase , greater than 8, Number, Symbol/
