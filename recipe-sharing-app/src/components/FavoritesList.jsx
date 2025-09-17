import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Compute favorites in the component
  const favorites = favoritesIds.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
