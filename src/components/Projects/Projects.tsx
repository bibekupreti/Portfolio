import { Container } from "@/components/Container/Container"
import { Reveal } from "@/components/Shared/Reveal"
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/data/projects"
import styles from "./Projects.module.css"
import { SectionHeading } from "../Shared/SectionHeading"

export function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <Container>

                  <SectionHeading
                    eyebrow="Projects"
                    title="Projects built with purpose."
                    description="   A selection of applications and products focused on
                            thoughtful design, clean architecture, and real-world
                            engineering."
                />

                {/* Project collection */}
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={(index % 2) * 0.08}
                        >
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>

            </Container>
        </section>
    )
}