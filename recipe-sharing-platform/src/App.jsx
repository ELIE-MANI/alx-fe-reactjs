import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState} from "react";
function App() {
  const [recipes, setRecipes] = useState([]);
  
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm recipes={recipes} setRecipes={setRecipes} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;