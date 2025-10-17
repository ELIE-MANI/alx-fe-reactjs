import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
localStorage.setItem("useAuth","true");
navigate("/profile")
  }
  
  return ( 
    <>
     <h1>Login Page</h1>
    <button onClick={handleLogin}>Login</button>
    </>
   );
}

export default Login;