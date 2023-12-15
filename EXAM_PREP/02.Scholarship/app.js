window.addEventListener("load", solve);

function solve() {
  const studentInput = document.querySelector('#student');
  const universityInput = document.querySelector('#university');
  const scoreInput = document.querySelector('#score');

  const nextBtn = document.querySelector('#next-btn');

  nextBtn.addEventListener('click', () =>{
    let ul = document.createElement('ul');
    ul.className = "preview-list";
    let li = document.createElement('li');
    li.className = "application";

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = studentInput.value;

    let universityParagraph = document.createElement('p');
    universityParagraph.textContent = universityInput.value;

    let scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = scoreInput.value;

    let editButton = document.createElement('button');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');

    let applyButton = document.createElement('button');
    applyButton.classList.add('action-btn');
    applyButton.classList.add('apply');

    console.log(editButton);
    ul.appendChild(li);
    li.appendChild(article)
    article.appendChild(h4);
    article.appendChild(universityParagraph);
    article.appendChild(scoreParagraph);
    li.appendChild(editButton);
    li.appendChild(applyButton);

    console.log(ul);
  });

}
