import axios from "axios";

export async function fetchUserData(username,location, miniRepos) {
 try{
  let query = '';
  if (username) query += `${username}`;
  if (location) query += `location:${location}`;
  if (miniRepos) query += `repo:>=${miniRepos}`
  const response = await axios.get(`https://api.github.com/users?q=${query}`);
  return response.data.items;
 }
 catch (error){
  console.error('error fetching user:', error);
  return [];
  

 }

  
}