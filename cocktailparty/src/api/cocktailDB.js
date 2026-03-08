import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export const searchByName = (name) => api.get(`/search.php?s=${encodeURIComponent(name)}`);
export const searchByLetter = (letter) => api.get(`/search.php?f=${letter}`);
export const searchIngredientByName = (name) => api.get(`/search.php?i=${encodeURIComponent(name)}`);
export const getCocktailById = (id) => api.get(`/lookup.php?i=${id}`);
export const getIngredientById = (id) => api.get(`/lookup.php?iid=${id}`);
export const getRandomCocktail = () => api.get(`/random.php`);
export const filterByIngredient = (ingredient) => api.get(`/filter.php?i=${encodeURIComponent(ingredient)}`);
export const filterByCategory = (category) => api.get(`/filter.php?c=${encodeURIComponent(category)}`);
export const filterByGlass = (glass) => api.get(`/filter.php?g=${encodeURIComponent(glass)}`);
export const filterByAlcoholic = (type) => api.get(`/filter.php?a=${encodeURIComponent(type)}`);
export const listCategories = () => api.get(`/list.php?c=list`);
export const listGlasses = () => api.get(`/list.php?g=list`);
export const listIngredients = () => api.get(`/list.php?i=list`);
export const listAlcoholic = () => api.get(`/list.php?a=list`);

export const extractIngredients = (cocktail) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || '',
      });
    }
  }
  return ingredients;
};
