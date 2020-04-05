import axios from 'axios'

const searchRecipe = (text) => {
  console.log(`https://api.spoonacular.com/recipes/search?query=${text}&number=5&addRecipeInformation=true&apiKey=099a77e33b5342d5b023f56db73756f8`);
  return axios.get(`https://api.spoonacular.com/recipes/search?query=${text}&number=5&addRecipeInformation=true&apiKey=099a77e33b5342d5b023f56db73756f8`)
}

const searchAdvanced = (text, diet) => {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=5&diet=${diet}&addRecipeInformation=true&apiKey=099a77e33b5342d5b023f56db73756f8`)
}

const getIngredients = (text) => {
  return axios.get(`https://api.spoonacular.com/recipes/${text}/information?includedNutrition=false&apiKey=099a77e33b5342d5b023f56db73756f8`)
}

const getRandomRecipes = () => {
  return axios.get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=099a77e33b5342d5b023f56db73756f8`);
}

export {
  searchRecipe, searchAdvanced, getIngredients, getRandomRecipes
}