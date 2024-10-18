import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {

    const {user, LogOut}=useContext(AuthContext)

    const handleLogOut = () =>{
       LogOut()
       .then(()=>{
        console.log("user logged out successfully")
       }) 
       .catch(error=>{
        console.log(error)
       })
    } 

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/order">Orders</NavLink></li>
    { user &&
      <>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/dash">Dashboad</NavLink></li>
      </>  
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <> 
        <p className="font-medium text-green-600 flex items-center gap-2"><FaUser></FaUser>{user.email}</p>

        <a onClick={handleLogOut} className="btn btn-sm ml-2">Sign Out</a>
        </>

        : <Link to="/login">
            <button className="btn btn-sm">Login</button>
        </Link>

        
        
        
    }


    
  </div>
</div>
    );
};

export default Navbar;