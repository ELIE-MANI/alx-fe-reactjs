import  { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
const [username, setUserName]= useState('');

const [data, setUserData]= useState(null)
const [loading, setLoading]= useState(false)
const [error, setError]= useState(false)
//updating the state
const [location, setLocation]= useState('')
const [minRepos, setMinRepos]= useState('')

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
   <form onSubmit={handleSubmit}  className="p-4 bg-white rounded shadow space-y-4">
    <input type="text" 
    placeholder="Enter GitHub username"
    value={username} 
    required 
    onChange={e => setUserName(e.target.value)}
    className="border p-2 rounded w-full"
    />

   <input type="text"
   value={location}
   placeholder="Location"
   onChange={e => setLocation(e.target.value)}
    className="border p-2 rounded w-full"
    min="0"
   />

   <input type="number"
   value={minRepos}
   placeholder="minirepos"
   onChange={e => setMinRepos(e.target.value)}
      className="border p-2 rounded w-full"
    min="0"
   />

    <button type="submit"
     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >Search</button>
   </form>
    {/* Loading state */}
    {loading && <p>loading...</p>}
     {/* Error state */}
    {error && <p>Looks like we cant find the user</p>}

    {data && data.length > 0 && (
     <> 
     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map(user => (
      <div key={user.id} className="p-4 bg-white rounded shadow flex items-center gap-4" >
      <img src={data.avatar_url} alt={data.login} className="w-16 h-16 rounded-full" />
    
    <div>
      <h2 className="font-bold text-lg">{data.name || data.login}</h2>
      <a href={data.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        View Github Profile</a>

      </div>
      </div>
      ))}
       </div>
      </>
    )}
</>
  );
}

export default Search;