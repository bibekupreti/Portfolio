import type { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import {
    FiCode,
    FiStar,
    FiUsers,
} from "react-icons/fi"
import { SiAppstore } from "react-icons/si"

export interface SocialLink {
    label: string
    href: string
    icon: IconType
}

export const profile = {
    name: "Bibek",
    location: "Kathmandu, Nepal",
    email: "hello@bibek.dev",
    headline: ["Building thoughtful", "iOS experiences."],
    summary:
        "Building modern iOS apps with Swift, SwiftUI and UIKit. Exploring React Native while mastering Apple's ecosystem through real-world projects and clean architecture.",
    resumeUrl: "#",
} as const

export const socials: SocialLink[] = [
    { label: "GitHub", href: "https://github.com", icon: FiGithub },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
    { label: "X (Twitter)", href: "https://x.com", icon: FaXTwitter },
    { label: "Email", href: "mailto:hello@bibek.dev", icon: FiMail },
]

export interface Stat {
    value: string
    label: string
}

export interface Stat {
    value: string
    label: string
    icon: IconType
}

export interface Stat {
    value: string
    label: string
    icon: IconType
    tone: "purple" | "blue" | "green" | "orange"
}

export const stats: Stat[] = [
    {
        value: "3+",
        label: "Years Experience",
        icon: FiCode,
        tone: "purple",
    },
    {
        value: "20+",
        label: "Apps Shipped",
        icon: SiAppstore,
        tone: "blue",
    },
    {
        value: "50k+",
        label: "Happy Users",
        icon: FiUsers,
        tone: "green",
    },
    {
        value: "100%",
        label: "Clean Code",
        icon: FiStar,
        tone: "orange",
    },
]