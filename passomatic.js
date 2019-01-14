//Passomatic is a lightweight password generation module that takes one argument, a number from 1-10 as an indication of password strength. Effortlessly generate placeholder passwords upon account creation, integrate behind a UI with a dial or slider, and enjoy the ease at which passomatic generates passwords of all strengths according to the most standard password conventions.

module.exports = function(strength) {

    if (strength == 'weak' || strength == 'Weak' || strength == 'WEAK' || strength == 'easy' || strength == 'Easy' || strength == 'EASY') { //If argument is passed as any variation of the words "Weak" or "Easy" set strength to 1.
        strength = 1;
    }

    if (strength == 'medium' || strength == 'Medium' || strength == 'MEDIUM') { //If argument is passed as any variation of the word "Medium" set strength to 5.
        strength = 5;
    }

    if (strength == 'strong' || strength == 'Strong' || strength == 'STRONG' || strength == 'hard' || strength == 'Hard' || strength == 'HARD') { //If argument is passed as any variation of the words "Strong" or "Hard" set strength to 10.
        strength = 10;
    }

    if (isNaN(strength)) { //If anything besides the aforementioned strings or a number between |1-10| is passed to passomatic just crank the strength to 10.
        strength = 10;
    }

    strength = Math.abs(parseInt(strength));

    let conglomerateArray = []; //Initialize the conglomerate array.
    const passwordArray = []; //Initialize the password array.
    const lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Array of lowercase letters.
    const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Array of uppercase letters.
    const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //Array of digits.
    const specialCharArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '|', '{', '}', '~']; //Array of 'password special characters’ (ASCII Punctuation or Symbols).

    const randomLength = Math.floor(Math.random()*4); //Random number between 0 (inclusive) and 3 (inclusive);
    let passwordLength;

    if (strength <= 1) { //80% chance that character pushed to password will be lowercase, 20% uppercase.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray];
        passwordLength = 8 + randomLength; //Password will be somewhere between 8 and 11 characters long.
    } else if (strength == 2) { //60% chance that character pushed to password will be lowercase, 40% uppercase.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray];
        passwordLength = 10 + randomLength; //Password will be somewhere between 10 and 13 characters long.
    } else if (strength == 3) { //56% chance that character pushed to password will be lowercase, 37% uppercase, 7% numeric.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray];
        passwordLength = 12 + randomLength; //Password will be somewhere between 12 and 15 characters long.
    } else if (strength == 4) { //46% chance that character pushed to password will be lowercase, 46% uppercase, 8% numeric.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray];
        passwordLength = 14 + randomLength; //Password will be somewhere between 14 and 17 characters long.
    } else if (strength == 5) { //40% chance that character pushed to password will be lowercase, 40% uppercase, 8% numeric, 12% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...numberArray, ...specialCharArray];
        passwordLength = 16 + randomLength; //Password will be somewhere between 16 and 19 characters long.
    } else if (strength == 6) { //38% chance that character pushed to password will be lowercase, 38% uppercase, 10% numeric, 14% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...numberArray, ...specialCharArray];
        passwordLength = 18 + randomLength; //Password will be somewhere between 18 and 21 characters long.
    } else if (strength == 7) { //33% chance that character pushed to password will be lowercase, 33% uppercase, 8% numeric, 26% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...numberArray, ...specialCharArray, ...specialCharArray];
        passwordLength = 20 + randomLength; //Password will be somewhere between 20 and 23 characters long.
    } else if (strength == 8) { //34% chance that character pushed to password will be lowercase, 34% uppercase, 5% numeric, 27% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...specialCharArray, ...specialCharArray];
        passwordLength = 23 + randomLength; //Password will be somewhere between 23 and 26 characters long.
    } else if (strength == 9) { //30% chance that character pushed to password will be lowercase, 30% uppercase, 6% numeric, 34% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...specialCharArray, ...specialCharArray];
        passwordLength = 26 + randomLength; //Password will be somewhere between 26 and 29 characters long.
    } else if (strength >= 10) { //25% chance that character pushed to password will be lowercase, 25% uppercase, 5% numeric, 45% special character.
        conglomerateArray = [...lowerCaseArray, ...lowerCaseArray, ...upperCaseArray, ...upperCaseArray, ...numberArray, ...specialCharArray, ...specialCharArray, ...specialCharArray];
        passwordLength = 29 + randomLength; //Password will be somewhere between 29 and 32 characters long.
    };

    for (i = 0; i < passwordLength; i++) {
        passwordArray.push(conglomerateArray[Math.floor(Math.random()*conglomerateArray.length)]);
    }

    const password = passwordArray.join('');

    return password;

};
