import { Container } from "../Container/Container"
import { SectionHeading } from "../Shared/SectionHeading"
import { Reveal } from "../Shared/Reveal"
import { experiences } from "../../data/experience"
import styles from "./Experience.module.css"

export function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <Container>
                <SectionHeading
                    eyebrow="Experience"
                    title="A path shaped by shipping"
                    description="Roles and milestones from my journey building for Apple platforms."
                />

                <ol className={styles.timeline}>
                    {experiences.map((item, index) => (
                        <Reveal
                            as="li"
                            key={item.company + item.role}
                            className={styles.item}
                            delay={index * 0.08}
                        >
                            <div className={styles.marker} aria-hidden="true">
                                <span className={styles.dot} />
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardHead}>
                                    <div>
                                        <h3 className={styles.role}>{item.role}</h3>
                                        <p className={styles.company}>{item.company}</p>
                                    </div>
                                    <span className={styles.period}>{item.period}</span>
                                </div>

                                <p className={styles.summary}>{item.achievements}</p>

                                <ul className={styles.highlights}>
                                    {item.tech.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
