import { motion } from "framer-motion"
import { stats } from "@/data/profile"
import {
    fadeUp,
    stagger,
    viewportOnce,
} from "@/utils/motion"
import styles from "./HeroStats.module.css"

export function HeroStats() {
    return (
        <motion.dl
            className={styles.stats}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            {stats.map((stat) => {
                const Icon = stat.icon

                return (
                    <motion.div
                        key={stat.label}
                        className={styles.stat}
                        variants={fadeUp}
                    >
                        <div
                            className={`${styles.iconWrapper} ${styles[stat.tone]}`}
                        >
                            <Icon
                                className={styles.icon}
                                aria-hidden="true"
                            />
                        </div>

                        <div className={styles.content}>
                            <dt className={styles.value}>
                                {stat.value}
                            </dt>

                            <dd className={styles.label}>
                                {stat.label}
                            </dd>
                        </div>
                    </motion.div>
                )
            })}
        </motion.dl>
    )
}