import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })

  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading Recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-2xl shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-1">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
