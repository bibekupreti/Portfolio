import { FiArrowUpRight } from "react-icons/fi"
import { motion } from "framer-motion"

import { Container } from "@/components/Container/Container"
import { SectionHeading } from "@/components/Shared/SectionHeading"
import { Reveal } from "@/components/Shared/Reveal"

import { experience } from "@/data/experience"

import styles from "./Experience.module.css"

export function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow="Experience"
                        title="Building products that people use."
                        description="A few places where I’ve worked, learned, and shipped software."
                    />
                </Reveal>

                <Reveal>
                    <div className={styles.list}>
                        {experience.map((item, index) => (
                            <motion.article
                                key={`${item.company}-${item.role}`}
                                className={styles.item}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <div className={styles.period}>
                                    <p className={styles.date}>
                                        {item.period}
                                    </p>

                                    {item.type && (
                                        <span className={styles.type}>
                                            {item.type}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.content}>
                                    <h3 className={styles.role}>
                                        {item.role}
                                    </h3>

                                    <a
                                        href={item.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.company}
                                    >
                                        {item.company}
                                    </a>

                                    <p className={styles.description}>
                                        {item.description}
                                    </p>

                                    {item.highlights?.length > 0 && (
                                        <ul className={styles.highlights}>
                                            {item.highlights.map(
                                                (highlight) => (
                                                    <li
                                                        key={highlight}
                                                        className={
                                                            styles.highlight
                                                        }
                                                    >
                                                        {highlight}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>

                                <a
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.visit}
                                >
                                    Visit company
                                    <FiArrowUpRight aria-hidden="true" />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </section>
    )
}