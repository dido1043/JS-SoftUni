function solve() {
  let text = document.querySelector('#text').value.toLowerCase();
  const convention = document.querySelector('#naming-convention').value;
  const result = document.querySelector('#result');

  if (convention != 'Camel Case' &&
    convention != 'Pascal Case') {
    result.textContent = 'Error!';

  }

  if (convention === 'Camel Case') {
    let sentence = [];
    text = text.split(' ')
    sentence.push(text[0])
    for (let i = 1; i < text.length; i++) {
      sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }
    result.textContent = sentence.join('')
  }
  else if (convention === 'Pascal Case') {
    let sentence = [];
    text = text.split(' ')
    for (let i = 0; i < text.length; i++) {
      sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1))
    }
    result.textContent = sentence.join('')
  }

}