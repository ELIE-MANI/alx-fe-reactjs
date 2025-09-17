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

  addRecipe: (title,description) => set((state) => ({recipes: [...state.recipes,{id: Date.now, title,description}]})),
  setRecipes: (recipes) => set({recipes}),
  updateRecipe: (id,updatedData) => set((state) => ({recipes: state.recipes.map((recipe) => recipe.id === id ? {...recipe,...updatedData}: recipe)})),
  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id)}))

}))

export default useRecipeStore;