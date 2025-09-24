import  { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
const [username, setUserName]= useState('');

const [data, setUserData]= useState(null)
const [loading, setLoading]= useState(false)
const [error, setError]= useState(false)


 async function handleSubmit(e) {
  e.preventDefault();
  if (!username) return;//do nothing if imput is empty
  //reset states
  setLoading(true);
  setError(false);
  setUserData(null);
  
    // Call GitHub API
    const data = await fetchUserData(username);
  data ? setUserData(data): setError(true);
  setLoading(false)

}

  return (
    <>
   <form onSubmit={handleSubmit}>
    <input type="text" 
    placeholder="Enter GitHub username"
    value={username} 
    required 
    onChange={e => setUserName(e.target.value)}/>
    <button type="submit">Search</button>
   </form>
    {/* Loading state */}
    {loading && <p>loading...</p>}
     {/* Error state */}
    {error && <p>Looks like we can't find the user</p>}

    {data && (
      <div>
      <h2>{data.name || data.login}</h2>

      </div>
    )}
</>
  );
}

export default Search;