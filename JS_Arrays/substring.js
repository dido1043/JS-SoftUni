function substring(word, text) {
    let lowerText = text.toLowerCase()
    if (lowerText.includes(word)) {
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}
substring('python', 'JavaScript is the best programming language')