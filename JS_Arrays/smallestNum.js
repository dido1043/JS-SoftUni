function smallestNumber(password) {
    function isValidLength(text){
        return text.length >=6 && text.length <= 10;
    }
    let checkPassword = (password) => {
        if(!isValidLength(password)){
            return 'Password must be between 6 and 10 characters';
        }
    }
    return checkPassword(password)

}
console.log(smallestNumber('logIn'));

