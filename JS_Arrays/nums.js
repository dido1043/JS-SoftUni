function pallindromeNum(arr) {
    //let num = 313;
    function isPalindrome(num) {
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');
        return numAsString === reversedNum    
    }

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        console.log(isPalindrome(element));
    }
    
}
pallindromeNum([121,2732,6556,6565]);