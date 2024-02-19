import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../contexts/auth.context";




const Footer = () => {

  // const { user } = useAuth();

  return (
    <div className="border-top py-2 container-fluid">
      <div className="d-flex justify-content-evenly">
        <Link to="/about" className="nav-link">
          <i className="bi bi-info-circle-fill"></i><br/>About
        </Link>
        <Link to="/" className="nav-link">
          <i className="bi bi-house-fill"></i><br/>Home
        </Link>
        {/* {user?.isBusiness && ( */}
        <Link to="/my-cards" className="nav-link">
          <i className="bi bi-person-vcard-fill"></i><br/>My cards
        </Link>
        {/* )}
        {user ? ( */}
        <Link to="/fav-cards" className="nav-link">
        <i className="bi bi-heart-fill"></i><br/>Favorites
        </Link>
        {/* ):(<></>)} */}
      </div>
        <div className="mt-3">
        <span>
          BCard By Denis Bezdezhsky &copy; {new Date().getFullYear()}
        </span>
        </div>
    </div>
  );
};

export default Footer;
