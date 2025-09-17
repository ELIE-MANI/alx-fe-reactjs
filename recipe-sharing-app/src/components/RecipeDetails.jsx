import { useParams,useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";


function RecipeDetails() {
  const {id} = useParams();
  const recipeId = Number(id);
const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === recipeId));
const navigate = useNavigate();

if(!recipe) return <p>Recipe not found.</p>;
  
  return ( 
   <div>
   <h1>{recipe.title}</h1>
   <p>{recipe.description}</p>
   <EditRecipeForm recipe={recipe} />
   <DeleteRecipeButton recipeId = {recipe.id} omDeleted = {() => navigate('/')} />

   </div>



   );
}

export default RecipeDetails;
