import React from 'react'
import { icons } from './icons'

export const TechChips = ({ text, icon }) => {
    const Icon = icons[icon]
    return (
                <span
                    className="inline-flex items-center gap-2 px-6 py-2 font-medium bg-[var(--accent-light)] text-m text-[var(--accent)] rounded-3xl "
                >
                    {Icon && <Icon/>}
                    {text}
                </span>
    )
}