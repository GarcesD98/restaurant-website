import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="/"
                    className="logo"
                    onClick={() => setMenuOpen(false)}
                >
                    Harvest Table
                </a>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav>
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

<li>
    <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        Home
    </NavLink>
</li>

<li>
    <NavLink
        to="/menu"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        Menu
    </NavLink>
</li>

<li>
    <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        About
    </NavLink>
</li>

<li>
    <NavLink
        to="/gallery"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        Gallery
    </NavLink>
</li>

<li>
    <NavLink
        to="/reservation"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        Reservation
    </NavLink>
</li>

<li>
    <NavLink
        to="/contact"
        className={({ isActive }) => isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
    >
        Contact
    </NavLink>
</li>

</ul>
                </nav>

                <a
                    href="/reservation"
                    className="reserve-btn"
                    onClick={() => setMenuOpen(false)}
                >
                    Reserve Now
                </a>

            </div>
        </header>
    );
}

export default Navbar;