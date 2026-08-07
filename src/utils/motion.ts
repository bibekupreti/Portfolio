import type { Variants } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

/** Fade + rise reveal, ideal for scroll-in sections. */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
}

/** Container that staggers its children on reveal. */
export const stagger: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
}

/** Blurred fade reveal for headline-level content. */
export const blurReveal: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE },
    },
}

/** Shared viewport config so reveals fire once, slightly early. */
export const viewportOnce = { once: true, amount: 0.25 } as const
