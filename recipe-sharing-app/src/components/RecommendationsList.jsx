import useRecipeStore from "./recipeStore";
/**
 * RecommendationsList Component
 * 
 * This component displays a list of recommended recipes for the user.
 * Recommendations are fetched from the Zustand store.
 * 
 * If there are no recommendations yet, it shows a placeholder message.
 */
const RecommendationsList = () => {
    // Get the recommendations array from the Zustand store
  const recommendations = useRecipeStore((state) => state.recommendations);
  // If there are no recommendations, display a friendly message
  if (recommendations.length === 0) return <p>No recommendations yet.</p>;
  // Render the list of recommended recipes
  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} className="recommend-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
