export interface ExperienceItem {
    role: string
    company: string
    companyUrl: string
    period: string
    type?: string
    description: string
    highlights: string[]
}

export const experience: ExperienceItem[] = [
    {
        role: "iOS Developer",
        company: "Company Name",
        companyUrl: "#",
        period: "2024 — Present",
        type: "Full-time",
        description:
            "Building and maintaining production iOS applications with a focus on reliable architecture, polished interfaces, and maintainable code.",
        highlights: [
            "Built reusable SwiftUI components and scalable application architecture.",
            "Improved application reliability through testing and modern concurrency.",
            "Collaborated with product and design to ship user-focused features.",
        ],
    },
    {
        role: "iOS Developer",
        company: "Previous Company",
        companyUrl: "#",
        period: "2022 — 2024",
        type: "Full-time",
        description:
            "Worked across the product lifecycle, from implementing new features to improving existing application performance and user experience.",
        highlights: [
            "Developed and shipped customer-facing iOS features.",
            "Refactored legacy code toward more maintainable patterns.",
            "Worked closely with cross-functional teams to deliver releases.",
        ],
    },
]