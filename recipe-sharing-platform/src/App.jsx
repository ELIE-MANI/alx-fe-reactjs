import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/recipe/id" element={<RecipeDetails/>}/>
    </Routes>
    </Router>
    </BrowserRouter>
    
    </>
    );
}

export default App;