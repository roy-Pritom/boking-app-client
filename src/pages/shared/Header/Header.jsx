import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useAdmin from "../../../hooks/UseAdmin";


const Header = () => {
  const isAdmin=useAdmin();
  const {user,logOut}=useContext(authContext)
  const handleLogOut = () => {
    logOut()
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error.message);
        });
}
    const navLink=<>
           <li className="text-white font-bold mr-6 text-lg"><Link>Home</Link></li>
           <li className="text-white font-bold mr-6 text-lg"><Link>About</Link></li>
           <li className="text-white font-bold mr-6 text-lg"><Link>Blog</Link></li>
           <li className="text-white font-bold mr-6 text-lg"><Link>Contact</Link></li>
           {
            user &&
           <li className="text-white font-bold mr-6 text-lg">

            {
              isAdmin ?
            <Link to='/dashboard/allUser'>Dashboard</Link>
            :
            <Link to='/dashboard/bookedItem'>Dashboard</Link>



            }
            
            </li>

           }
    </>

    return (
       <div className="navbar bg-blue-600 bg-opacity-10  fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLink
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
        <div className="flex items-center gap-6">
          <img id="title" src={user?.photoURL} className="rounded-full w-12 h-10" alt="" />
          <ReactTooltip anchorId="title" place="bottom" content={user?.displayName}></ReactTooltip>
              <Link to='/login'>
    <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
    
    </Link>
        </div>
        :
   <>
           <Link to='/login'>
        <button className="btn btn-warning">Login</button>
        
        </Link>
   </>
    }

  </div>
</div>
    );
};

export default Header;