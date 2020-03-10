import axios from 'axios'

const searchRecipe = (text) => {
  return axios.get(`https://api.spoonacular.com/recipes/search?query=${text}&number=5&apiKey=06685c5e1a0c42598d09bfc358d5e5a1`)
}

const searchAdvanced = (text, diet) => {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=5&diet=${diet}&apiKey=06685c5e1a0c42598d09bfc358d5e5a1`)
}

const getIngredients = (text) => {
  return axios.get(`https://api.spoonacular.com/recipes/${text}/information?includedNutrition=false&apiKey=06685c5e1a0c42598d09bfc358d5e5a1`)
}

const getRandomRecipes = () => {
  return axios.get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=06685c5e1a0c42598d09bfc358d5e5a1`);
}

export {
  searchRecipe, searchAdvanced, getIngredients, getRandomRecipes
}