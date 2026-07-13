import { Container } from "./Container";
import profileImage from '../assets/images/profile.png'
import "../styles/hero.css"

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
                            I build fast, reliable and beautifully crafted
                            applications for iPhone, iPad and Apple Watch
                            using Swift, SwiftUI and modern Apple technologies.
                        </p>

                        <div className="hero-actions">

                            <button className="btn primary-btn">
                                View Projects
                            </button>

                            <button className="btn secondary-btn">
                                Download Resume
                            </button>

                        </div>

                    </div>

                    <div className="hero-right">

                        <div className="hero-image-wrapper">

                            <div className="hero-circle"></div>

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