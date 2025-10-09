import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm({ recipes, setRecipes }) {
const [title, setTitle]= useState("");
const [ingredients, setIngredients]= useState("");
const [steps, setSteps]= useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault ();

  if(!title || !ingredients || !instructions) {
    alert("Please fill in all fields");
    return;
  }
  const newRecipe = {
    id: recipes.length + 1,
    title,
    summary: ingredients.split('\n')[0],
    ingredients: ingredients.split('\n'),
    steps: steps.split('\n'),
    image: "https://via.placeholder.com/300x200?text=New+Recipe",
  };
  setRecipes([...recipes, newRecipe]);
  setTitle("");
setIngredients("");
  setSteps("");


  alert("Recipe added successfully!");
  navigate("/");

};  
  return ( 
    <>
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label htmlFor="title" className="block mb-1 text-gray-700">Recipe Title</label>
        <input type="text"
        placeholder="Enter recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded px-3 py-2"
        />
        </div>
      <div>
        <label htmlFor="ingredients" className="block mb-1 text-gray-700">Ingredients</label>
        <textarea
          placeholder="Enter ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="instructions" className="block mb-1 text-gray-700">Instructions</label>
        <textarea
          placeholder="Enter steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button   type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >Add Recipe</button>
      
      </form>
    </div>
    </>
   );
}


export default AddRecipeForm;