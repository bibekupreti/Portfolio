import { Container } from "@/components/Container/Container"
import { SectionHeading } from "@/components/Shared/SectionHeading"
import { Reveal } from "@/components/Shared/Reveal"
import { stagger, fadeUp } from "@/utils/motion"
import { aboutIntro, values } from "@/data/about"
import styles from "./About.module.css"

export function About() {
    return (
        <section id="about" className="section">
            <Container>
                <SectionHeading
                    eyebrow="About"
                    title="Craft over shortcuts."
                    description="A little on how I think about building software — and the principles I keep coming back to."
                />

                <div className={styles.layout}>
                    <Reveal className={styles.intro} variants={stagger}>
                        {aboutIntro.map((paragraph, i) => (
                            <Reveal as="span" key={i} variants={fadeUp}>
                                <p className={styles.paragraph}>{paragraph}</p>
                            </Reveal>
                        ))}
                    </Reveal>

                    <Reveal className={styles.values} variants={stagger}>
                        {values.map(({ title, description, icon: Icon }) => (
                            <Reveal as="article" key={title} variants={fadeUp} className={styles.value}>
                                <span className={styles.valueIcon} aria-hidden="true">
                                    <Icon />
                                </span>
                                <h3 className={styles.valueTitle}>{title}</h3>
                                <p className={styles.valueDesc}>{description}</p>
                            </Reveal>
                        ))}
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}
