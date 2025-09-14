import React from 'react';
import ProfilePage from './component/ProfilePage';
import UserContext from './component/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <UserContext.Provider value={userData}/>
      <ProfilePage userData={userData} />
  </>

  )
  
}

export default App;


