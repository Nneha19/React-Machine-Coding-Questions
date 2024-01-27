import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

export default function RouterTab() {
  return (
    <div className="router-main">
        <div className="router-container">
       
        <NavLink className='navlink' to="/">Home</NavLink>
        <NavLink className='navlink' to="/Tab1">Tab 1</NavLink>
        <NavLink className='navlink' to="/Tab2">Tab 2</NavLink> 
        <NavLink className='navlink' to="/Tab3">Tab 3</NavLink>
      </div>
      <Outlet/>
      
    </div>
  );
}
