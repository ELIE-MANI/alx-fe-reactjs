import { useState } from "react";

function RegistrationForm() {
const {formData, setFormData}= useState({
  username: "",
  email:"",
  password:"",

});
const {error, setError}= useState("");
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]:value})
};

const handleSubmit = (e) => {
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password);
  setError("all field are required")
return;
}

setError("");
console.log("User Registered", formData);
alert("Registration Successful!")

  return ( <>



  
  </> );
}

export default RegistrationForm;