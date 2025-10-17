import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
function App() {
  return (

    <BrowserRouter>
    <nav>
    <Link to="/">Home</Link> |{""}
     <Link to="/profile">Profile</Link> |{" "}
        <Link to="/posts/1">Example Blog Post</Link>

    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/*Protected Route*/}
      <Route 
      path="/profile/"
      element={
        <ProtectedRoute>
        <Profile/>
        </ProtectedRoute>
        
      }/>

    </Routes>
    
    
    </BrowserRouter>
    );
}

export default App;