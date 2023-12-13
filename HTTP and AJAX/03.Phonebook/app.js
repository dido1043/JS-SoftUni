function attachEvents() {
    let phoneList = document.querySelector('ul');
    const loadBtn = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createButton = document.getElementById('btnCreate');


    const baseURL = 'http://localhost:3030/jsonstore/phonebook'
    //todo
    loadBtn.addEventListener('click', async () => {
        phoneList.textContent = '';
        const resp = await fetch(baseURL);
        const phones = await resp.json();
        const contacts = [];
        for (const contact of Object.values(phones)) {
            contacts.push(contact);
        }

        contacts.forEach(c => {
            const li = document.createElement('li');
            li.textContent = `${c.person}: ${c.phone}`;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";


            li.appendChild(deleteButton)
            //console.log(li);
            phoneList.appendChild(li);

            deleteButton.addEventListener('click', deleteContact);
            async function deleteContact() {
                const id = c._id;
                await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                    method: 'DELETE',
                });
                li.remove();
                console.log(id);
    
            }
        });

        //console.log(contacts);
        
    });

    createButton.addEventListener('click', async () => {

        let phoneData = { person: personInput.value, phone: phoneInput.value }
        if (personInput.value !== '' && phoneInput.value !== '') {
            await fetch(baseURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(phoneData)
            }).then(resp => {
                console.log(resp);
            })

        } else {
            alert('Invalid phone or person!');
        }

        //console.log(phoneData);
    });
}

attachEvents();