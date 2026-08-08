import { Reveal } from "./Reveal"
import { stagger, fadeUp } from "@/utils/motion"
import styles from "./SectionHeading.module.css"

interface SectionHeadingProps {
    eyebrow: string
    title: string
    description?: string
    align?: "left" | "center"
    id?: string
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    id,
}: SectionHeadingProps) {
    return (
        <Reveal
            variants={stagger}
            className={[styles.head, align === "center" && styles.center]
                .filter(Boolean)
                .join(" ")}
        >
            <Reveal as="span" variants={fadeUp} className={`eyebrow ${styles.eyebrow}`}>
                <span className={styles.dot} aria-hidden="true" />
                {eyebrow}
            </Reveal>
            <Reveal as="span" variants={fadeUp}>
                <h2 id={id} className={styles.title}>
                    {title}
                </h2>
            </Reveal>
            {description && (
                <Reveal as="span" variants={fadeUp}>
                    <p className={styles.desc}>{description}</p>
                </Reveal>
            )}
        </Reveal>
    )
}
