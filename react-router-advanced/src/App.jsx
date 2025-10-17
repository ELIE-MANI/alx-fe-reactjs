import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
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
      path="/profile/*"
      element={
        <ProtectedRoute>
        <Profile/>
        </ProtectedRoute>
        }/>
        {/*Dynamic route*/}
        <Route path="/posts/:id" element={<BlogPost/>}/>

      {/*Login page*/}
      <Route path="/login" element={<Login/>}/>

    </Routes>
    
    
    </BrowserRouter>
    );
}

export default App;