function solve() {
    const foodInput = document.getElementById('food');
    const timeInput = document.getElementById('time');
    const caloriesInput = document.getElementById('calories');
    //MEALS LIST
    const mealsList = document.getElementById('list');
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    //POST Request
    const addMealButton = document.getElementById('add-meal');
    //PUT Request
    const editMealButton = document.getElementById('edit-meal');

    //GET Request
    const loadButton = document.getElementById('load-meals');
    
    loadButton.addEventListener('click', async () => {
        mealsList.textContent = '';
        const food = foodInput.value;
        const time = timeInput.value;
        const calories = caloriesInput.value;
        
        const resp = await fetch(baseUrl);
        const meals = await resp.json();
        let mealsArr = [];

        for (const meal of Object.values(meals)) {
            mealsArr.push(meal);
        }
        console.log(mealsArr);

        mealsArr.forEach(m => {
            const div = document.createElement('div');
            div.className = 'meal';
            let h2 = document.createElement('h2');
            h2.textContent = m.food;

            let h3 = document.createElement('h3');
            h3.textContent = m.time;

            let calH3 = document.createElement('h3');
            calH3.innerHTML = m.calories;

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(calH3);

            let buttonsDiv = document.createElement('div');
            buttonsDiv.id = 'meal-buttons';

            let change = document.createElement('button');
            change.className = 'change-meal';
            change.textContent = 'Change';

            let delBtn = document.createElement('button');
            delBtn.className = 'delete-meal';
            delBtn.textContent = 'Delete';
            

            //info storing

            change.addEventListener('click', () => {

                mealsList.removeChild(div);
                foodInput.value = food;
                timeInput.value = time;
                caloriesInput.value = calories;

                editMealButton.removeAttribute('disabled');
            });

            buttonsDiv.appendChild(change);
            buttonsDiv.appendChild(delBtn);
            div.appendChild(buttonsDiv);
            mealsList.appendChild(div);
            delBtn.addEventListener('click', () => {
                const id = m._id;
                fetch(baseUrl + id, {
                    method: 'DELETE'
                });
                mealsList.removeChild(div);
            });
        });

    });
    addMealButton.addEventListener('click', async () => {
        const food = foodInput.value;
        const time = timeInput.value;
        const calories = caloriesInput.value;

        let foodsObj = { food: food, time: time, calories: calories };
        if (food !== '' || time !== '' || calories !== '') {
            await fetch(baseUrl, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(foodsObj)
            });
        }
        foodInput.value = '';
        timeInput.value = '';
        caloriesInput.value = '';
    });
}
solve()