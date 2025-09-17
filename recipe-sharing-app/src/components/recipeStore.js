import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [

{
  id:1,
  title:"Pasta",
  description: "Delicious Italian pasta",
  
},
{
   id:2,
   title:"Salad",
   description:"Fresh and healthy salad",

},

  ],
  searchTerm:"",
  filteredRecipes:[],
  favorites: [],
  recommendations: [],
  

  addRecipe: (title,description) => set((state) => ({recipes: [...state.recipes,{id: Date.now, title,description}]})),
  setRecipes: (recipes) => set({recipes}),
  updateRecipe: (id,updatedData) => set((state) => ({recipes: state.recipes.map((recipe) => recipe.id === id ? {...recipe,...updatedData}: recipe)})),
  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
  setSearchTerm: (term) => set({searchTerm: term}),
  filterRecipes: () => set((state) =>({
  filteredRecipes: state.recipes.filter((recipe) => {
    const term = state.searchTerm.toLowerCase(); 
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) 
    )
  })})),
  
  // Add recipe to favorites
  addFavorite: (recipeId) => set((state) => ({favorites:[...state.favorites, recipeId]})),
  
  // Remove recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({favorites: state.favorites.filter((id) => id !== recipeId)})),

  // Generate mock recommendations (random subset of favorites)
    generateRecommendations:() => set((state) => {
      const recommendations = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5);
        return {recommendations: recommendations};
    })
    
}))

export default useRecipeStore;