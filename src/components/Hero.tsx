import { Container } from "./Container";
import "../styles/hero.css"

function Hero() {
    return (
        <section className="hero">
            <Container>
                <div className="hero-content">
                    <div className="hero-left">
                        <span className="hero-badge">
                            iOS Developer
                        </span>
                        <h1>
                            Building Thoughtful
                            <br />
                            iOS Experience
                        </h1>
                        <p className="hero-description">
                            I build fast, reliable and beautifully crafted applications for iPhone, iPad and Apple Watch using Swift, SwiftUl and modern Apple technologies.
                        </p>

                        <div className="hero-actions">
                            <button className="primary-btn">
                                View Projects
                            </button>

                            <button className="secondary-btn">
                                Download Resume
                            </button>

                        </div>

                    </div>
                    <div className="hero-right">
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Hero