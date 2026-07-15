import {
    FiCode,
    FiSmartphone,
    FiUsers,
    FiStar,
} from "react-icons/fi";

import "../styles/hero-stats.css";

const stats = [
    {
        icon: <FiCode />,
        value: "3+",
        title: "Years Experience",
        color: "purple",
    },
    {
        icon: <FiSmartphone />,
        value: "20+",
        title: "Apps Shipped",
        color: "blue",
    },
    {
        icon: <FiUsers />,
        value: "Happy",
        title: "Users Worldwide",
        color: "green",
    },
    {
        icon: <FiStar />,
        value: "Passionate",
        title: "About Clean Code",
        color: "orange",
    },
];

function HeroStats() {
    return (
        <section className="hero-stats">

            {stats.map((item, index) => (
                <div className="stat-wrapper" key={item.title}>

                    <div className="stat-item">

                        <div className={`stat-icon ${item.color}`}>
                            {item.icon}
                        </div>

                        <div className="stat-content">
                            <h3>{item.value}</h3>
                            <p>{item.title}</p>
                        </div>

                    </div>

                    {index !== stats.length - 1 && (
                        <div className="stat-divider" />
                    )}

                </div>
            ))}

        </section>
    );
}

export default HeroStats;