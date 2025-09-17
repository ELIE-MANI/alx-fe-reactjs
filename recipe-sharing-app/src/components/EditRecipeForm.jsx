import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({recipe}) {
const updateRecipe = useRecipeStore((state) => state.updateRecipe);
const [title, setTitle] = useState(recipe.title);
const [description, setDescription]= useState(recipe.description);
const handleSubmit = (event) => {
  event.preventDefault();
  updateRecipe(recipe.id,{title,description});
  alert("Recipe updated")

}

return ( 
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="title">Title:</label>
<input type="text" onChange={(e) => setTitle(e.target.value)} required value={title} />
</div>
<div>
<label htmlFor="description">Description</label>
<textarea onChange={(e) => setDescription(e.target.value)} required value={description} />

</div>
<button type="submit">Save Changes</button>
  
</form>

 );
}

export default EditRecipeForm;

