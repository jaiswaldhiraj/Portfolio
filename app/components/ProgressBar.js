import { motion } from 'framer-motion'

export const ProgressBar = ({skill}) => {
    return (
        <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-[var(--accent-dark)] font-medium">Proficiency</div>
                <div className="text-sm text-[var(--accent-dark)] font-semibold">{skill.pct}%</div>
            </div>

            <div
                className="h-4 rounded-full bg-[var(--accent-light)] overflow-hidden"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={skill.pct}
                aria-label={`${skill.title} proficiency`}
            >
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.pct}%` }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--highlight-light)] to-[var(--accent)] shadow-sm"
                />
            </div>
        </div>
    )
}
