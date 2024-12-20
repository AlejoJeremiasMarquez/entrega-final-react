import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar({ title }) {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link className="navbar-brand" to="/">
          <span className="navbar-text">Star Car</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <NavLink className = {({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"} to="/category/alta-gama">
              Alta Gama
            </NavLink>
          </li>

          <li>
            <NavLink className = {({ isActive }) => 
                isActive ? "navbar-link active" : "navbar-link" } to="/category/0km">
              0km
            </NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"} to="/category/usados">
              Usados
            </NavLink>
          </li>

        </ul>

        <div className="navbar-widget">
          <CardWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
