import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">Movie<span>App</span></Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 2.5 11h2v9h5v-6h5v6h5v-9h2L12 3z" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={`nav-link ${location.pathname === "/favorites" ? "active" : ""}`}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
              <span>Favorites</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;