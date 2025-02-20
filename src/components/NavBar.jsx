export function NavBar({
    shootingStar
}) {
    return <header className="navbar">
        <a href="/" className="shooting-star-logo">
            <img src={shootingStar} alt="Shooting Star Logo" className="shooting-star" />
        </a>
        <nav className="nav-menu">
            <a href="/" className="nav-link">Index</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
        </nav>
    </header>;
}

import propTypes from "./propTypes";

NavBar.propTypes = propTypes.NavBar;

