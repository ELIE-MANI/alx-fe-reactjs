import useRecipeStore from "./recipeStore";
 // Get actions and state from the stor
function RecipeCard({recipe}) {
const addFavorite = useRecipeStore(state => state.addFavorite);
const removeFavorite = useRecipeStore(state => state.removeFavorite);
const favorites = useRecipeStore(state => state.favorites);

 // Check if this recipe is already a favorite
   const isFavorite = favorites.includes(recipe.id);
   
  return (  
 <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
     
      {/* Favorite / Remove Favorite Button */}
      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>
          Add to Favorites
        </button>
      )}
    </div>
 
  );
}

export default RecipeCard;
