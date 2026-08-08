import focus from "@/assets/images/project-focus.png"
import finance from "@/assets/images/project-finance.png"
import health from "@/assets/images/project-health.png"

export interface Project {
    title: string
    tagline: string
    description: string
    image: string
    features: string[]
    appStoreUrl: string
    githubUrl?: string
}

export const projects: Project[] = [
    {
        title: "Focus",
        tagline: "A calm, distraction-free timer",
        description:
            "A focused productivity experience designed around simple interactions, reliable offline data, and deep integration with the Apple ecosystem.",

        image: focus,

        features: [
            "Live Activities & Lock Screen widgets",
            "Offline-first persistence with cloud sync",
            "Haptic-rich and accessible interactions",
        ],

        appStoreUrl: "#",
        githubUrl: "https://github.com",
    },

    {
        title: "Ledger",
        tagline: "Personal finance, beautifully simple",
        description:
            "A personal finance experience focused on fast entry, meaningful insights, and keeping sensitive financial information private.",

        image: finance,

        features: [
            "Interactive spending insights",
            "Face ID protected application",
            "Recurring transaction engine",
        ],

        appStoreUrl: "#",
        githubUrl: "https://github.com",
    },

    {
        title: "Pulse",
        tagline: "Health tracking on your wrist",
        description:
            "A companion iPhone and Apple Watch experience that turns everyday health data into simple, actionable insights.",

        image: health,

        features: [
            "Apple Watch companion experience",
            "Health data and activity tracking",
            "Complications and intelligent notifications",
        ],

        appStoreUrl: "#",
        githubUrl: "https://github.com",
    },

    {
        title: "Ledger",
        tagline: "Personal finance, beautifully simple",
        description:
            "A personal finance experience focused on fast entry, meaningful insights, and keeping sensitive financial information private.",

        image: finance,

        features: [
            "Interactive spending insights",
            "Face ID protected application",
            "Recurring transaction engine",
        ],

        appStoreUrl: "#",
        githubUrl: "https://github.com",
    },

]