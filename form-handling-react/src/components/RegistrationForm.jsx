import { useState } from "react";

function RegistrationForm() {
const [formData, setFormData]= useState({
  username: "",
  email:"",
  password:"",

});
const [error, setError]= useState("");
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]:value})
};

const handleSubmit = (e) => {
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password) {
  setError("all field are required")
return;
}
 setError("");
    console.log("User Registered", formData);
    alert("Registration Successful!");
}




  return ( <>
<div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
  {error && <p className="text-red-600 mb-2">{error}</p>}

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
   <input 
   type="text"
   placeholder="Username"
   name="username"
   value={formData.username}
   onChange={handleChange}
    className="p-2 border rounded"
   />
   
  <input
   type="email"
   name="email"
   placeholder="Email"
   value={formData.email}
   onChange={handleChange}
   className="p-2 border rounded"
  />

  <input
   type="password"
   name="password"
   placeholder="Password"
   value={formData.password}
   onChange={handleChange}
   className="p-2 border rounded"
  />

  <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
    Register
  </button> 


  </form>
</div>



  </> );
}

export default RegistrationForm;