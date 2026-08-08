import { FiArrowUp } from "react-icons/fi"
import { Container } from "@/components/Container/Container"
import { profile, socials } from "@/data/profile"
import styles from "./Footer.module.css"

export function Footer() {
    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.brandBlock}>
                        <span className={styles.brand}>
                            {profile.name}
                            <span className={styles.dot} aria-hidden="true" />
                        </span>
                        <p className={styles.copy}>
                            &copy; {year} {profile.name}. Designed &amp; built with care.
                        </p>
                    </div>

                    <ul className={styles.socials} aria-label="Social links">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className={styles.social}
                                    aria-label={label}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className={styles.top} onClick={toTop} aria-label="Back to top">
                        Back to top
                        <FiArrowUp />
                    </button>
                </div>
            </Container>
        </footer>
    )
}
