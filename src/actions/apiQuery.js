import axios from 'axios'

const searchRecipe = (text) => {
  return axios.get(`https://api.spoonacular.com/recipes/search?query=${text}&number=5&apiKey=0cbf95a570fb46dab0b6ff718035d0e1`)
}

const getIngredients = (text) => {
  return axios.get(`https://api.spoonacular.com/recipes/${text}/information?includedNutrition=false&apiKey=0cbf95a570fb46dab0b6ff718035d0e1`)
}

const getRandomRecipes = () => {
  return axios.get(`https://api.spoonacular.com/recipes/random?number=5&apiKey=0cbf95a570fb46dab0b6ff718035d0e1`);
}

export {
  searchRecipe, getIngredients, getRandomRecipes
}