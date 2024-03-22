import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../contexts/auth.context";
import { useMode } from "../contexts/mode.context";
// import profileImage from "../images/default_profile_pic.png"
// import { useUserData } from "../hooks/useUserData";
// import { useCardsFilterContext } from "../contexts/filter.context";
import { useUser } from "../contexts/user.context";

const NavBar = () => {
  // const { user } = useAuth();
  const { mode, icon, handleModeChange } = useMode();
  // const { image, name } = useUserData(user?._id)
  // const { handleSearch, searchTerm } = useCardsFilterContext();
  const { handleLoginChange, handleSignUpChange } = useUser();
  return (
    <nav
      className={`navbar navbar-expand-md shadow-sm bg-${mode}`}
      data-bs-theme={mode}
    >
      <div className="container align-items-center">
        <Link to="/" className="navbar-brand">
          Phoenix SDB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0 align-items-center">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            {/* {user?.isBusiness && ( */}
            <li className="nav-item">
              <NavLink to="/my-cards" className="nav-link">
                My Cards
              </NavLink>
            </li>
            {/* )} */}
            {/* {user ? ( */}
            <li className="nav-item">
              <NavLink to="/fav-cards" className="nav-link">
                Favorites
              </NavLink>
            </li>
            {/* ):(<></>)} */}
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => handleSearch(e.target.value)}/>
            </form> */}

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {/* {user ? ( */}
            <>
              <li className="nav-item dropdown text-center mx-auto">
                <a
                  className="nav-link h-100"
                  data-bs-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-expanded="false"
                  style={{ width: "60px", height: "60px" }}
                >
                  {/* {
                  image ? (
                    <img src={image.url} className="card-img-top rounded-circle" alt={image.alt} />
                  ):(
                    <img src={profileImage} className="card-img-top" alt="default" />
                  )
                } */}
                </a>
                <ul className="dropdown-menu text-center">
                  <li className="nav-item">
                    <h4>Hello</h4>
                    {/* <h5>{name?.first} {name?.middle} {name?.last}</h5> */}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-out" className="nav-link">
                      SIGN OUT
                    </NavLink>
                  </li>
                </ul>
              </li>
            </>
            {/* ) : ( */}
            <>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  onClick={handleLoginChange}
                >
                  LOGIN
                </button>
                {/* <NavLink to="/sign-in" className="nav-link">
                    LOGIN
                  </NavLink> */}
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  onClick={handleSignUpChange}
                >
                  Sign Up
                </button>
              </li>
            </>
            {/* )} */}
            <li className="nav-item">
              <button
                type="button"
                className={`btn my-auto`}
                onClick={() => {
                  handleModeChange();
                }}
              >
                {icon}
              </button>
              {/* <button type="button" className={`btn my-auto ${user && "fs-1"}`} onClick={() =>{handleModeChange()}}>{icon}</button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
