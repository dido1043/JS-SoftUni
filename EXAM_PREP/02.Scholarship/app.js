window.addEventListener("load", solve);

function solve() {
  const studentInput = document.querySelector('#student');
  const universityInput = document.querySelector('#university');
  const scoreInput = document.querySelector('#score');

  const nextBtn = document.querySelector('#next-btn');

  nextBtn.addEventListener('click', () => {
    const student = studentInput.value;
    const uni = universityInput.value;
    const score = scoreInput.value;

    let ul = document.querySelector('#preview-list');
    let li = document.createElement('li');
    li.className = "application";

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = student;

    let universityParagraph = document.createElement('p');
    universityParagraph.textContent = "University: " + uni;

    let scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = "Score: " + score;

    let editButton = document.createElement('button');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'edit';

    let applyButton = document.createElement('button');
    applyButton.classList.add('action-btn');
    applyButton.classList.add('apply');
    applyButton.textContent = 'apply';

    
    ul.appendChild(li);

    li.appendChild(article)

    article.appendChild(h4);
    article.appendChild(universityParagraph);
    article.appendChild(scoreParagraph);

    li.appendChild(editButton);
    li.appendChild(applyButton);
    studentInput.value = '';
    universityInput.value = ''; 
    scoreInput.value = '';

    nextBtn.setAttribute('disabled', true);

    editButton.addEventListener('click', edit);
    function edit() {
      //Add this info to input form
      studentInput.value = student;
      universityInput.value = uni;
      scoreInput.value = score;
      //Delete from previw list
      ul.removeChild(li);
      //[Next] button must be enabled again.
      nextBtn.removeAttribute('disabled');
    }
    applyButton.addEventListener('click', apply);
    function apply() {
      //task must be deleted from the <ul> with id "preview-list" 
      ul.removeChild(li);
      //task must be appended to the <ul> with id "candidates-list"
      let candidatesList = document.querySelector('#candidates-list');
      candidatesList.appendChild(li);
      //The buttons [Edit] and [Apply] should be removed from the <li> element
      li.removeChild(editButton);
      li.removeChild(applyButton);
      // [Next] button must be enabled again.
      nextBtn.removeAttribute('disabled');
    }
  });
}
