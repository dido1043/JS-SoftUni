function addItem() {
    let menu = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let options = document.createElement('option');

    options.textContent = newItemText.value;
    options.value = newItemValue.value;

    menu.appendChild(options);

    newItemText.value = '';
    newItemValue.value = '';
}