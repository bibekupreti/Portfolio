import "../styles/navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar_logo">Bibek.</h2>

            <ul className="navbar_links">
                <li>Home</li>
                <li>Projets</li>
                <li>Experiences</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button className="navbar_button">
                Let's Talk
            </button>

        </nav>
    )
}