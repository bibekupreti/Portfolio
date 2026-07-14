import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter
} from "react-icons/fa6";

import { MdOutlineMailOutline } from "react-icons/md";

import "../styles/social-bar.css";

function SocialBar() {
    return (
        <aside className="social-bar">

            <a
                href="https://github.com/bibekupreti"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/bibeku/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedinIn />
            </a>

            <a
                href="https://x.com/BibekU58182"
                target="_blank"
                rel="noopener"
            >
                <FaXTwitter />
            </a>

            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=bibekupreti.dev@gmail.com"
             target="_blank"
             rel="noopener"
             aria-label="Email"
             >
                <MdOutlineMailOutline />
            </a>

        </aside>
    );
}

export default SocialBar;