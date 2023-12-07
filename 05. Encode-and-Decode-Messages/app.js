function encodeAndDecodeMessages() {
    let  textToEncode = document.getElementsByTagName('textarea')[0];
    let testAreaForResult = document.getElementsByTagName('textarea')[1];

    const encodeButton = document.querySelectorAll("button")[0];
    const decodeButton = document.querySelectorAll("button")[1];
    let txt = "";
    
    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);
    
    
    //encoding
    function encode() {
        let originalText = textToEncode.value;
        txt = originalText;
        let asciiCodeArray = [];
        for (const letter of textToEncode.value) {
            let toAscii = ascii(letter);
            toAscii++;
            asciiCodeArray.push(toAscii);
        }
        
        let result = '';
        for (const asciiNum of asciiCodeArray) {
            result += String.fromCharCode(asciiNum);
        }
        textToEncode.textContent = "";
        testAreaForResult.textContent = result;
        
    }
    //decoding
    function decode() {
        if (testAreaForResult.value == "") {
            return;
        }
        testAreaForResult.textContent = txt;
    }

    function ascii(a) { return a.charCodeAt(0); }
}