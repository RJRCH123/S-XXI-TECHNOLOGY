import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./_Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top mb-5">
        <div className="container-lg">
          <Link to="/" className="navbar-brand h1">
            S. XXI Technology
          </Link>
          <CartWidget/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
