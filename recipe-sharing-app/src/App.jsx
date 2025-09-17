import { BrowserRouter,Routes,Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "./components/recipeStore";
function App() {
   const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  return ( 
 
  <BrowserRouter>
<Routes>
<Route path='/' element={
 <>
  <h1>My Recipes</h1>
<RecipeList />
<AddRecipeForm />
   </>
}/>
<Route path='/recipe/:id' element={<RecipeDetails />}/>
</Routes>
 <h1>My Recipes</h1>
<SearchBar />
<RecipeList />
<AddRecipeForm />
<FavoritesList />
 <button onClick={generateRecommendations}>
  Generate Recommendations
  </button>
   <RecommendationsList />
</BrowserRouter>

);
}

export default App;