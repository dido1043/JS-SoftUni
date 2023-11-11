function pascallSplitter(text) {
    let splittedText = text.replace(/([A-Z][a-z])/g,', $1');
    console.log(splittedText.slice(1));
}
pascallSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascallSplitter('HoldTheDoor')
pascallSplitter('ThisIsSoAnnoyingToDo')