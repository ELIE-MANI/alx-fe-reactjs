import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
function App() {
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
<RecipeList />
<AddRecipeForm />
</BrowserRouter>



   );
}

export default App;