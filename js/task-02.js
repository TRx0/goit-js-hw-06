const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const headEl = document.createElement(`li`);

// const ingredientsUl = document.getElementById(`ingredients`);
// ingredientsUl.append(headEl);

// const getIngredients = ingredients.map((element) => {
//   const headEl = document.createElement(`li`);

//   const ingredientsUl = document.getElementById(`ingredients`);
//   ingredientsUl.append(headEl);
//   headEl.textContent = element;
//   headEl.classList.add("item")
  
// });

const getIngredients = document.querySelector("#ingredients");
   const addLi = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
    });
    getIngredients.append(...addLi);


// console.log(document.getElementById(`ingredients`))