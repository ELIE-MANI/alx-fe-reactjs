import { Link, Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return ( 
    <>
    <h1>Profile Page</h1>
    <nav>
    <Link to ="details">Profile Details</Link> |{""}
    <Link to="settings">Profile settings</Link>
    </nav>
    {/*nested routes*/}
    <Routes>
      <Route path="details" element={<ProfileDetails/>}/>
      <Route path="settings" element={<ProfileSettings/>}/>
    </Routes>
    </>
   );
}

export default Profile;