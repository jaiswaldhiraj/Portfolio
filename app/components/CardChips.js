import React from 'react'

export const CardChips = ({ Skills }) => {
    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {Skills.chips.map((c) => (
                <span
                    className="inline-flex items-center gap-2 px-6 py-2 font-medium bg-[var(--accent-light)] text-sm text-[var(--accent)] rounded-3xl"
                    key={c}
                >
                    {c}
                </span>
            ))}
        </div>
    )
}