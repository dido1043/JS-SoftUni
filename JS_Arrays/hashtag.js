function findHashTagWord(text) {
    let regex = /#[A-Za-z]+/gm;
    let matcher = text.match(regex);
   
    for (const word of matcher) {
        console.log(word.replace('#',''));
    }
}
findHashTagWord('Nowadays everyone uses # to tag a #special word in #socialMedia')