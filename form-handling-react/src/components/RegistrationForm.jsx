import { useState } from "react";

function RegistrationForm() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("User registered:", { username, email, password });
    alert("Registration successful!");

  
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register (Controlled)</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}             
          onChange={(e) => setUsername(e.target.value)}  
          className="p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}               
          onChange={(e) => setEmail(e.target.value)}     
          className="p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}          
          onChange={(e) => setPassword(e.target.value)}  
          className="p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
