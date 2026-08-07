import type { ElementType, ReactNode } from "react"
import styles from "./Container.module.css"

type Size = "md" | "lg" | "xl"

interface ContainerProps {
    children: ReactNode
    size?: Size
    as?: ElementType
    className?: string
}

export function Container({
    children,
    size = "xl",
    as: Tag = "div",
    className,
}: ContainerProps) {
    return (
        <Tag className={[styles.container, styles[size], className].filter(Boolean).join(" ")}>
            {children}
        </Tag>
    )
}
