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


}))

export default useRecipeStore;