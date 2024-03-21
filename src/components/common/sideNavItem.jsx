import { NavLink } from "react-router-dom";

const SideNavItem = ({ title, icon }) => {
  const navTo = `/${title.toLowerCase()}`
    return (
      <>
        <li className="nav-item ">
              <NavLink to={navTo} className="nav-link">
                {icon}
                <span className="ms-2">{title}</span>
              </NavLink>
            </li>
      </>
    );
  };
  
  export default SideNavItem;