import { Link, NavLink } from "react-router-dom";
import { useMode } from "../contexts/mode.context";
import SideNavItem from "./common/sideNavItem";
// import { useUserData } from "../hooks/useUserData";
// import { useCardsFilterContext } from "../contexts/filter.context";

const SideNavBar = () => {
  const { mode } = useMode();

  return (
    <div
      data-component="sidebar"
      className={` d-flex flex-column flex-shrink-0 bg-${mode} sidebar text-start position-fixed`}
    >
      <div className="container first-menu">
        <div className="sidebar-sticky">

          <ul className="navbar-nav  flex-column mb-auto">
            <SideNavItem
              title="Dashboard"
              icon={<i className="bi bi-speedometer2 fs-4"></i>}
            />
            <SideNavItem
              title="Inventory"
              icon={<i className="bi bi-inboxes fs-4"></i>}
            />
            <SideNavItem
              title="Products"
              icon={<i className="bi bi-bookshelf fs-4"></i>}
            />
            <SideNavItem
              title="Equipments"
              icon={<i className="bi bi-laptop fs-4"></i>}
            />
            <SideNavItem
              title="Workers"
              icon={<i className="bi bi-person-fill-gear fs-4"></i>}
            />
            <SideNavItem
              title="Company"
              icon={<i className="bi bi-house fs-4"></i>}
            />
            <SideNavItem
              title="Settings"
              icon={<i className="bi bi-gear fs-4"></i>}
            />
            <SideNavItem
              title="Help"
              icon={<i className="bi bi-question-circle fs-4"></i>}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
