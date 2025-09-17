import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router";

function DeleteRecipeButton({recipeId,onDeleted}) {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
const navigate = useNavigate();

const handleDelete = () => {
  deleteRecipe(recipeId);
  navigate('/');


}

  return ( 
   <button onClick={handleDelete}>Delete Recipe</button>

   );
}

export default DeleteRecipeButton;