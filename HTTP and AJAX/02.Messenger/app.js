function attachEvents() {
    let textArea = document.getElementById('messages');
    const authorInput = document.querySelectorAll('input')[0];
    const contentInput = document.querySelectorAll('input')[1];
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    const baseURL = 'http://localhost:3030/jsonstore/messenger'
    submitButton.addEventListener('click', async () => {
        const messageStructure = {
            author: authorInput.value,
            content: contentInput.value
        };

        let isValidMessage = authorInput.value !== '' && contentInput.value !== '';

        if (isValidMessage) {
            await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(messageStructure),
            });
        }

        authorInput.value = '';
        contentInput.value = '';
    });
    const messages = [];
    refreshButton.addEventListener('click', async()=>{
        const response = await fetch(baseURL);
        const messages = await response.json();
        const messagesArray = [];
        for (const messageInfo of Object.values(messages)) {
            messagesArray.push(`${messageInfo.author}: ${messageInfo.content}`);
        }
        console.log(messagesArray);
        textArea.textContent = messagesArray.join('\n');
    });
}

attachEvents();