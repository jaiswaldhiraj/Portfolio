import React from 'react'
import OnlyIcon from './OnlyIcon'
import { Hireme } from './Hireme'

export const CardBackFace = ({ s }) => {
  return (
    <div
      className="bg-[var(--background)] border-2 border-[var(--accent)] shadow-xl hover:shadow-[var(--shadow-card)]
      absolute inset-0 rounded-2xl shadow-card-soft overflow-hidden flex flex-col p-6 justify-between"
      style={{
        transform: "rotateY(180deg)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div>
        <div className="flex items-center justify-between">
        </div>
        <h3 className="text-xl font-semibold text-[--text-primary] mb-2">{s.title}</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-2">What I do:</p>
        <ul className="list-disc ml-5 text-sm text-[var(--accent-dark)] space-y-1">
          {s.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <Hireme />
        <div className="flex items-center justify-between">
          <span className='bg-[var(--accent)] text-2xl text-[var(--accent-light)] rounded-[100%] p-3'>
            <OnlyIcon icon={"arrowLeft"} />
          </span>
        </div>
      </div>
    </div>
  )
}
