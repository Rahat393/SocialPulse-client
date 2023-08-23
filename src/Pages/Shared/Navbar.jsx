import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

 
const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogOut = () => {
    logout()
    .then(() => { })
     .catch(err => console.log(err))
}
  return (
    <div className="flex justify-between mt-5 text-blue-600 text-xl font-semibold">
      <div>
        <p className="text-2xl"> 
          <Link to={'/'}>SocialPulse</Link>
         </p>
      </div>
      <div className="flex gap-4">
        <p><Link to={'/media'}>Media</Link></p>
        <p>Message</p>
        <p>About</p>
        {
          user?.uid ? <button onClick={handleLogOut}> LogOut</button> : <button ><Link to={'/login'}>LogIn</Link></button>
        }
       </div>
    </div>
  );
};

export default Navbar;
