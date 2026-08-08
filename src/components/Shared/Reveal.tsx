import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"
import { fadeUp, viewportOnce } from "@/utils/motion"

type RevealTag = "div" | "section" | "li" | "article" | "span"

interface RevealProps {
    children: ReactNode
    variants?: Variants
    as?: RevealTag
    className?: string
    delay?: number
}

export function Reveal({
    children,
    variants = fadeUp,
    as = "div",
    className,
    delay = 0,
}: RevealProps) {
    const Comp = motion[as]
    return (
        <Comp
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay }}
        >
            {children}
        </Comp>
    )
}
