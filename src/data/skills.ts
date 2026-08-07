import type { IconType } from "react-icons"
import {
    SiSwift,
    SiApple,
    SiReact,
    SiTypescript,
    SiFirebase,
    SiGit,
    SiFigma,
    SiXcode,
} from "react-icons/si"
import { TbApi, TbBrandReactNative, TbDatabase } from "react-icons/tb"
import { FiLayers, FiCloud } from "react-icons/fi"

export interface SkillGroup {
    category: string
    description: string
    skills: { name: string; icon: IconType }[]
}

export const skillGroups: SkillGroup[] = [
    {
        category: "iOS & Apple",
        description: "Native development across the Apple platform.",
        skills: [
            { name: "Swift", icon: SiSwift },
            { name: "SwiftUI", icon: SiApple },
            { name: "UIKit", icon: SiApple },
            { name: "Xcode", icon: SiXcode },
        ],
    },
    {
        category: "Architecture",
        description: "Scalable, testable app foundations.",
        skills: [
            { name: "MVVM", icon: FiLayers },
            { name: "Clean Arch", icon: FiLayers },
            { name: "Combine", icon: TbApi },
            { name: "Async/Await", icon: TbApi },
        ],
    },
    {
        category: "Cross-Platform",
        description: "Reaching users beyond a single platform.",
        skills: [
            { name: "React", icon: SiReact },
            { name: "React Native", icon: TbBrandReactNative },
            { name: "TypeScript", icon: SiTypescript },
        ],
    },
    {
        category: "Backend & Data",
        description: "Persistence, sync and services.",
        skills: [
            { name: "Core Data", icon: TbDatabase },
            { name: "SwiftData", icon: TbDatabase },
            { name: "Firebase", icon: SiFirebase },
            { name: "REST APIs", icon: FiCloud },
        ],
    },
    {
        category: "Tooling",
        description: "The craft behind the shipping.",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
            { name: "TestFlight", icon: SiApple },
        ],
    },
]

export const techMarquee = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Combine",
    "Async/Await",
    "Core Data",
    "SwiftData",
    "Xcode",
    "watchOS",
    "React Native",
]
