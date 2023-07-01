
import { NavLink, Outlet } from "react-router-dom";
import {  FaHome,  FaUserCog, FaUsers, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/UseAdmin";


const  DashboardLayout = () => {

  const isAdmin=useAdmin();



  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-full px-10 h-full bg-[#003580] text-white ">



          {
            isAdmin && <>
            
              <li><NavLink to="/dashboard/allUser"><FaUsers></FaUsers>Manage Users</NavLink></li>
              <li><NavLink to="/dashboard/addHotel"><FaUserCog></FaUserCog>Add Property </NavLink></li>
            </>


          }
    
          {
            isAdmin!==true 
            &&
            <>
            
            <li><NavLink to="/dashboard/bookedItem"><FaUserCog></FaUserCog>Booked Item</NavLink></li>
        
            <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
            </>

          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
 

        </ul>

      </div>
    </div>
  );
};

export default  DashboardLayout;