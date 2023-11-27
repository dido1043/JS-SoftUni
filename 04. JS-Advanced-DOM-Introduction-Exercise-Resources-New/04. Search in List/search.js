function search() {
   let townsList = document.querySelectorAll('li');
   let text = document.getElementById('searchText').value;
   let result = document.querySelector('#result'); 
   let matches = 0;
   for (const li of townsList) {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
   }
   for (let town of townsList) {
      if (town.textContent.includes(text)) {
         matches++
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
      }
   }
   if (text === '') {
      matches = 0;   
   }
   result.textContent = `${matches} matches found`
}
