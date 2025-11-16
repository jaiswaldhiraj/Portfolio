import React from 'react'
import OnlyIcon from './OnlyIcon'

export const CardFrontFace = ({ s }) => {
  return (
    <div
      className="bg-[var(--background)] border-2 border-[var(--accent)] shadow-xl hover:shadow-[var(--shadow-card)]
      absolute inset-0 rounded-2xl shadow-card-soft overflow-hidden flex flex-col p-6 justify-between"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden"
      }}
    >
      <div>
        <div className="w-12 h-12 rounded-lg items-center justify-center text-3xl text-[var(--highlight)]">
          <OnlyIcon icon={s.icon} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[--text-primary]">{s.title}</h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{s.short}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className='bg-[var(--accent)] text-2xl text-[var(--accent-light)] rounded-[100%] p-3'>
          <OnlyIcon icon={"arrowRight"} />
        </span>
      </div>
    </div>
  )
}
