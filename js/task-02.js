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

const getIngredients = ingredients.map((element) => {
  const headEl = document.createElement(`li`);

  const ingredientsUl = document.getElementById(`ingredients`);
  ingredientsUl.append(headEl);
  headEl.textContent = element;
  headEl.classList.add("item")
  
});



// console.log(document.getElementById(`ingredients`))