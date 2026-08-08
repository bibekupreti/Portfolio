import { FiArrowUpRight, FiGithub } from "react-icons/fi"
import type { Project } from "@/data/projects"
import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const openGitHub = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation()
    }

    return (
        <article className={styles.card}>
            <a
                href={project.appStoreUrl}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on the App Store`}
            >
                {/* --------------------------------
                    Visual
                --------------------------------- */}

                <div className={styles.media}>
                    <div
                        className={styles.mediaGlow}
                        aria-hidden="true"
                    />

                    <img
                        src={project.image}
                        alt={`${project.title} app interface`}
                        loading="lazy"
                    />

                    <div
                        className={styles.mediaFade}
                        aria-hidden="true"
                    />
                </div>

                {/* --------------------------------
                    Content
                --------------------------------- */}

                <div className={styles.body}>
                    <div className={styles.header}>
                        <div className={styles.heading}>
                            <h3 className={styles.title}>
                                {project.title}
                            </h3>

                            <p className={styles.tagline}>
                                {project.tagline}
                            </p>
                        </div>

                        <div className={styles.actions}>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    className={styles.iconButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} source code`}
                                    onClick={openGitHub}
                                >
                                    <FiGithub />
                                </a>
                            )}

                            <span
                                className={styles.arrowButton}
                                aria-hidden="true"
                            >
                                <FiArrowUpRight />
                            </span>
                        </div>
                    </div>

                    <p className={styles.description}>
                        {project.description}
                    </p>

                    {/* --------------------------------
                        Capabilities
                    --------------------------------- */}

                    <div className={styles.capabilities}>
                        <span className={styles.capabilityLabel}>
                            Built with
                        </span>

                        <ul className={styles.features}>
                            {project.features.map((feature) => (
                                <li key={feature}>
                                    <span
                                        className={styles.featureDot}
                                        aria-hidden="true"
                                    />

                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </article>
    )
}