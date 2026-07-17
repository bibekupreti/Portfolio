import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import "../styles/navbar.css"

const NAV_ITEMS = ["Home", "Projects", "Experience", "Skills", "About", "Contact"];

export function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <nav className="navbar">
            <h2 className="navbar_logo text-h4">Bibek<span></span></h2>

            <ul className="navbar_links">
                {NAV_ITEMS.map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className={`text-body ${active === item ? "active" : ""}`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <button className="btn btn-primary text-body">
                Let's Talk
                 <HiArrowUpRight size={16} />
            </button>
        </nav >
    )
}
// To-Do :- Make the lets talk button and sync the scroll and the nav links