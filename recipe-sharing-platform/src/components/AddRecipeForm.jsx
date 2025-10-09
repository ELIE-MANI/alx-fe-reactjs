import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // 👇 Validation errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // 👇 Validate fields before submitting
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submission
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      image: image || "https://via.placeholder.com/300x200?text=Recipe",
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    addRecipe(newRecipe);
    alert("✅ Recipe added successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Summary */}
        <div>
          <input
            type="text"
            placeholder="Short Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
        </div>

        {/* Image */}
        <div>
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            placeholder="Ingredients (one per line)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 h-24"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <textarea
            placeholder="Cooking Steps (one per line)"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 h-24"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
