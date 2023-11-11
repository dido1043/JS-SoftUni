function revealWords(word, text) {
    let wordsArr = word.split(', ')
    let textArr = text.split(' ')
    for (let i = 0; i < wordsArr.length; i++) {
        for (let j = 0; j < textArr.length; j++) {
            if (textArr[j].includes('*')&& 
            textArr[j].length === wordsArr[i].length) {
                textArr[j] = wordsArr[i]                
            }

        }
    }
    console.log(textArr.join(' '));
}
revealWords('great',
    'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);