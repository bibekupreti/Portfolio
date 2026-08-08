import { techMarquee } from "@/data/skills"
import styles from "./TechMarquee.module.css"

export function TechMarquee() {
    const items = [...techMarquee, ...techMarquee]

    return (
        <div
            className={styles.marquee}
            aria-hidden="true"
        >
            <div className={styles.track}>
                {items.map(({ name, icon: Icon, color }, index) => (
                    <span
                        key={`${name}-${index}`}
                        className={styles.chip}
                    >
                        <Icon
                            className={styles.icon}
                            style={{ color }}
                            aria-hidden="true"
                        />

                        <span>{name}</span>
                    </span>
                ))}
            </div>
        </div>
    )
}