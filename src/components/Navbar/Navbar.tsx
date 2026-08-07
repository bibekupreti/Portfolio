import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"
import { Container } from "@/components/Container/Container"
import { Button } from "@/components/Button/Button"
import { navItems } from "@/data/nav"
import { profile } from "@/data/profile"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { useScrolled } from "@/hooks/useScrolled"
import styles from "./Navbar.module.css"

const SECTION_IDS = navItems.map((item) => item.id)

export function Navbar() {
    const active = useScrollSpy(SECTION_IDS)
    const scrolled = useScrolled(16)
    const [open, setOpen] = useState(false)

    const go = (id: string) => {
        setOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(" ")}>
            <Container>
                <nav className={styles.nav} aria-label="Primary">
                    <a
                        href="#home"
                        className={styles.brand}
                        onClick={(e) => {
                            e.preventDefault()
                            go("home")
                        }}
                    >
                        {profile.name}
                        <span className={styles.brandDot} aria-hidden="true" />
                    </a>

                    <ul className={styles.links}>
                        {navItems.map((item) => {
                            const isActive = active === item.id
                            return (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={[styles.link, isActive && styles.linkActive]
                                            .filter(Boolean)
                                            .join(" ")}
                                        aria-current={isActive ? "page" : undefined}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            go(item.id)
                                        }}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-indicator"
                                                className={styles.indicator}
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className={styles.actions}>
                        <Button
                            size="sm"
                            iconEnd={<FiArrowUpRight />}
                            onClick={() => go("contact")}
                            className={styles.cta}
                        >
                            Let&apos;s Talk
                        </Button>
                        <button
                            className={styles.menuBtn}
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </nav>
            </Container>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.mobile}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ul className={styles.mobileLinks}>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={[styles.mobileLink, active === item.id && styles.mobileActive]
                                            .filter(Boolean)
                                            .join(" ")}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            go(item.id)
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
