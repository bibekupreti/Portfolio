import type { IconType } from "react-icons"
import { FiTarget, FiFeather, FiZap, FiUsers } from "react-icons/fi"

export const aboutIntro = [
    "I'm an iOS developer who cares about the small details that make software feel effortless — the timing of an animation, the weight of a shadow, the moment a screen loads.",
    "For three years I've shipped native apps with Swift and SwiftUI, favouring clean architecture and code that reads like prose. I'm now extending that craft to React Native.",
]

export interface Value {
    title: string
    description: string
    icon: IconType
}

export const values: Value[] = [
    {
        title: "Detail-obsessed",
        description: "Pixels, easing curves and copy all matter. Polish is the product.",
        icon: FiTarget,
    },
    {
        title: "Clean architecture",
        description: "Small, testable pieces that scale without becoming spaghetti.",
        icon: FiFeather,
    },
    {
        title: "Performance first",
        description: "60fps, fast launches and a light footprint on every device.",
        icon: FiZap,
    },
    {
        title: "User-centered",
        description: "I build for the person holding the phone, not the spec sheet.",
        icon: FiUsers,
    },
]
