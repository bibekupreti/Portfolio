import { techMarquee } from "@/data/skills"
import styles from "./TechMarquee.module.css"

export function TechMarquee() {
    // Duplicate the list so the CSS animation loops seamlessly.
    const items = [...techMarquee, ...techMarquee]

    return (
        <div className={styles.marquee} aria-hidden="true">
            <div className={styles.track}>
                {items.map((tech, i) => (
                    <span key={`${tech}-${i}`} className={styles.chip}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}