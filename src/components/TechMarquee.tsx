import "../styles/tech-marquee.css";
import swift from '../assets/icons/skillIcons/swift.svg'
import swiftui from '../assets/icons/skillIcons/swiftui.svg'
import uikit from '../assets/icons/skillIcons/uikit.svg'
import watchos from '../assets/icons/skillIcons/watchos.svg'
import coredata from '../assets/icons/skillIcons/coredata.svg'
import swiftdata from '../assets/icons/skillIcons/swiftdata.svg'
import combine from '../assets/icons/skillIcons/combine.svg'
import asyncawait from '../assets/icons/skillIcons/asyncawait.svg'
import xcode from '../assets/icons/skillIcons/xcode.svg'
import firebase from '../assets/icons/skillIcons/firebase.svg'
import git from '../assets/icons/skillIcons/git.svg'
import github from '../assets/icons/skillIcons/github.svg'
import restapi from '../assets/icons/skillIcons/restapi.svg'
import mvvm from '../assets/icons/skillIcons/mvvm.png'
import cleanarchitecture from '../assets/icons/skillIcons/cleanarchitecture.png'
import spm from '../assets/icons/skillIcons/spm.svg'


const technologies = [
    { name: "Swift", icon: swift },
    { name: "SwiftUI", icon: swiftui },
    { name: "UIKit", icon: uikit },
    { name: "watchOS", icon: watchos },
    { name: "Core Data", icon: coredata },
    { name: "SwiftData", icon: swiftdata },
    { name: "Combine", icon: combine },
    { name: "Async/Await", icon: asyncawait },
    { name: "Xcode", icon: xcode },
    { name: "Firebase", icon: firebase },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "REST API", icon: restapi },
    { name: "MVVM", icon: mvvm },
    { name: "Clean Architecture", icon: cleanarchitecture },
    { name: "SPM", icon: spm }
];

function TechMarquee() {
    return (
        <section className="tech-section">
            <p className="tech-title">
                Technologies I work with
            </p>

            <div className="tech-marquee">
                <div className="tech-track">

                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item"
                        >
                            <div className="tech-icon">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                />
                            </div>

                            <span className="tech-name">
                                {tech.name}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default TechMarquee;