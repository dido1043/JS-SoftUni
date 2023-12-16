window.addEventListener("load", solve);
function solve() {
    const expenseType = document.querySelector('#expense');
    const amount = document.querySelector('#amount');
    const date = document.querySelector('#date');
    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', () => {
        let expType = expenseType.value;
        let amountValue = amount.value;
        let dateValue = date.value;

        //Clear form
        expenseType.value = '';
        amount.value = '';
        date.value = '';

        if (expType == '' || amountValue === '' || dateValue === '') {
            return;
        }
        //Create li elements
        let ul = document.querySelector('#preview-list');

        let li = document.createElement('li');
        li.className = 'expense-item'
        let article = document.createElement('article');

        let typeParagraph = document.createElement('p');
        typeParagraph.textContent = `Type: ${expType}`;

        let amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amountValue}$`;

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${dateValue}`;

        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('edit');
        editButton.textContent = 'edit';

        const okButton = document.createElement('button');
        okButton.classList.add('btn');
        okButton.classList.add('ok');
        okButton.textContent = 'ok';


        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(typeParagraph);
        article.appendChild(amountParagraph)
        article.appendChild(dateParagraph);
        li.appendChild(buttonsDiv);
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);
        //disable add button
        addBtn.setAttribute('disabled', true);
         
        let expensesUl = document.querySelector('#expenses-list');

        //edit button functionality
        editButton.addEventListener('click', () => {
            //information from the post must be sent to the input fields on the left side
            expenseType.value = expType;
            amount.value = amountValue;
            date.value = dateValue;
            //the record should be deleted from the <ul> "preview-list" 
            ul.removeChild(li);
            //[Add] button must be enabled again. 
            addBtn.removeAttribute('disabled');
        });

        //ok button functionality
        okButton.addEventListener('click', ()=>{
            //the record must be deleted from the <ul> with id "preview-list" 
            ul.removeChild(li);
            //--and appended to the <ul> with id "expenses-list".
            expensesUl.appendChild(li);
            //The buttons [Edit] and [Ok] should be removed from the <li> element and the 
            li.removeChild(buttonsDiv);
            //[Add] button must be enabled again.
            addBtn.removeAttribute('disabled');
        })

        const delButton = document.querySelector('.delete');
        delButton.addEventListener('click', () =>{
            location.reload();
        });
        console.log(delButton);
    });
}