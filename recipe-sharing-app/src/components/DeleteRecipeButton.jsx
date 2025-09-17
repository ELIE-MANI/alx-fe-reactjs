import useRecipeStore from "./recipeStore";

function DeleteRecipeButton({recipeId,onDeleted}) {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

const handleDelete = () => {
  deleteRecipe(recipeId);
  if(onDeleted) onDeleted;
}

  return ( 
   <button onClick={handleDelete}>Delete Recipe</button>

   );
}

export default DeleteRecipeButton;