function passwordValidator(password) {
    function isValidLength(text){
        return text.length >=6 && text.length <= 10;
    }
    let isAlphaNumeric = (text) => {
        let regex = /^[A-Za-z0-9]+$/;
        let isCorrect = regex.test(text);
        return isCorrect;
    }
    let checkForDigits = (text) =>{
        let digitsCounter=0;
        
        for (let digit of text) {
            if (!isNaN(digit)) {
                digitsCounter++;
            }
        }
        let isHaveEnoughDigits = digitsCounter >=2;
        return isHaveEnoughDigits;
    }
    if (!isAlphaNumeric(password)) {
        console.log("Password must consist only of letters and digits"); 
    }
    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!checkForDigits(password)) {
        console.log("Password must have at least 2 digits");
    }

    if (isAlphaNumeric(password) && isValidLength(password)&&checkForDigits(password)) {
        console.log('Password is valid');
    }


}
passwordValidator('logIn');
console.log('-----------');
passwordValidator('MyPass123')
console.log('-----------');
passwordValidator('Pa$s$s')

