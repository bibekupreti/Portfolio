import { Container } from "./Container";
import profileImage from '../assets/images/profile.png'
import "../styles/hero.css"
import TechMarquee from "./TechMarquee";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

function Hero() {
    return (
        <section className="hero">
            <Container>
                <div className="hero-content">

                    <div className="hero-left">

                        <span className="hero-badge">
                            <span className="badge-dot"></span>
                            iOS Developer
                        </span>

                        <h1>
                            Building thoughtful
                            <br />
                            <span>iOS experiences.</span>
                        </h1>

                        <p className="hero-description">
                           Building modern iOS apps with Swift, SwiftUI and UIKit. Exploring React Native while mastering Apple's ecosystem through real-world projects, clean architecture
                        </p>

                        <div className="hero-actions">
                            <button className="btn primary-btn">
                                <span>View Projects</span>
                                <FaArrowRightLong />
                            </button>

                            <button className="btn secondary-btn">
                                <span>Download Resume</span>
                                 <HiOutlineArrowDownTray />
                            </button>
                        </div>

                        <TechMarquee />

                    </div>

                    <div className="hero-right">

                        <div className="hero-image-wrapper">
                            <div className="hero-glow"></div>

                            <div className="hero-dots"></div>

                            <img
                                src={profileImage}
                                alt="Bibek Upreti"
                                className="hero-image"
                            />

                        </div>

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default Hero