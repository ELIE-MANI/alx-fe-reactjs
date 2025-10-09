import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ recipes:initialRecipes }) {
const[recipes, setRecipes] = useState(initialRecipes || []);
useEffect(() => {
  fetch('/data.json')
  .then(response => response.json())
  .then(data => setRecipes(data))
  .catch(error => console.error('Error fetching recipes:', error));
}, []);


  return ( <>
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">🍽️Recipe Sharing Platform</h1>
    <Link to="/add-recipe" className= "mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
      + Add New Recipe
    </Link>
    <div className=" mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     {recipes.map((recipe) => (
      <div key={recipe.id}
       className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
      >
        <img src={recipe.image} alt={recipe.title}  className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
         <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
         <Link to={`/recipe/${recipe.id}`}  
         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        View Recipe</Link>
      </div>
      </div>
     ))}
    </div>
   </div>
  </> );
}

export default HomePage;