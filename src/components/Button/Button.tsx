import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md"

interface BaseProps {
    variant?: Variant
    size?: Size
    children: ReactNode
    iconStart?: ReactNode
    iconEnd?: ReactNode
    className?: string
}

type ButtonAsButton = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never }

type ButtonAsLink = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
    const {
        variant = "primary",
        size = "md",
        children,
        iconStart,
        iconEnd,
        className,
        ...rest
    } = props

    const classes = [styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")

    const content = (
        <>
            {iconStart && <span className={styles.icon}>{iconStart}</span>}
            <span>{children}</span>
            {iconEnd && <span className={styles.icon}>{iconEnd}</span>}
        </>
    )

    if (props.as === "a") {
        const { as: _as, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
            as?: string
        }
        return (
            <a className={classes} {...anchorProps}>
                {content}
            </a>
        )
    }

    const { as: _as, ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: string
    }
    return (
        <button className={classes} {...buttonProps}>
            {content}
        </button>
    )
}
