export interface ExperienceItem {
    company: string
    role: string
    period: string
    location: string
    achievements: string[]
    tech: string[]
}

export const experiences: ExperienceItem[] = [
    {
        company: "Lumen Labs",
        role: "iOS Developer",
        period: "2024 — Present",
        location: "Remote",
        achievements: [
            "Led the SwiftUI rewrite of the flagship app, cutting crash rate by 62%.",
            "Shipped an offline-first sync layer with SwiftData and background tasks.",
            "Established a modular architecture adopted across three product teams.",
        ],
        tech: ["SwiftUI", "SwiftData", "Combine", "Swift Concurrency"],
    },
    {
        company: "Northwind Studio",
        role: "Junior iOS Engineer",
        period: "2023 — 2024",
        location: "Kathmandu",
        achievements: [
            "Built reusable UIKit component library used in 6 client apps.",
            "Integrated StoreKit 2 subscriptions, lifting conversion by 24%.",
            "Owned the release pipeline through TestFlight and App Store Connect.",
        ],
        tech: ["UIKit", "StoreKit 2", "Core Data", "REST"],
    },
    {
        company: "Freelance",
        role: "Mobile Developer",
        period: "2022 — 2023",
        location: "Remote",
        achievements: [
            "Delivered 8+ App Store apps for startups and small businesses.",
            "Designed accessible interfaces meeting WCAG AA contrast targets.",
            "Collaborated directly with founders from concept to launch.",
        ],
        tech: ["Swift", "SwiftUI", "Firebase", "Figma"],
    },
]
