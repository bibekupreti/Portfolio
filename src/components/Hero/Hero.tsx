import { motion } from "framer-motion"
import { FiArrowRight, FiDownload } from "react-icons/fi"
import { Container } from "@/components/Container/Container"
import { Button } from "@/components/Button/Button"
import { HeroStats } from "./HeroStats"
import { TechMarquee } from "./TechMarquee"
import { profile, socials } from "@/data/profile"
import { blurReveal, fadeUp, stagger } from "@/utils/motion"
import portrait from "@/assets/images/profile.png"
import styles from "./Hero.module.css"

export function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

    return (
        <section id="home" className={styles.hero}>
            <Container>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={fadeUp} className={styles.badge}>
                            <span className={styles.badgeDot} aria-hidden="true" />
                            {profile.role}
                        </motion.span>

                        <motion.h1 variants={blurReveal} className={styles.title}>
                            {profile.headline[0]}
                            <br />
                            <span className={styles.accent}>{profile.headline[1]}</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className={styles.summary}>
                            {profile.summary}
                        </motion.p>

                        <motion.div variants={fadeUp} className={styles.ctas}>
                            <Button iconEnd={<FiArrowRight />} onClick={() => scrollTo("projects")}>
                                View Projects
                            </Button>
                            <Button
                                as="a"
                                href={profile.resumeUrl}
                                variant="secondary"
                                iconEnd={<FiDownload />}
                            >
                                Download Resume
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeUp} className={styles.marqueeWrap}>
                            <span className={styles.marqueeLabel}>Technologies I work with</span>
                            <TechMarquee />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.visual}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    >
                        <div className={styles.glow} aria-hidden="true" />
                        <div className={styles.dots} aria-hidden="true" />
                        <img
                            src={portrait}
                            alt={`Portrait of ${profile.name}, ${profile.role}`}
                            className={styles.portrait}
                            width={520}
                            height={640}
                        />
                        <ul className={styles.socialRail} aria-label="Social links">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className={styles.socialBtn}
                                        aria-label={label}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <HeroStats />
            </Container>
        </section>
    )
}
