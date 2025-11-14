import React from 'react'

export const ExtraCards = ({no,text}) => {
  return (
    <span className='text-[var(--accent-dark)] text-2xl md:text-5xl font-extrabold items-center justify-center bg-[var(--background-dark)] p-16 rounded-3xl w-96 border-2 border-[var(--accent)] shadow-xl hover:shadow-[var(--shadow-card)]'>
        <div className='flex items-center justify-center'>
            {no}
        </div>
        <div className='flex items-center justify-center'>
            {text}
        </div>
    </span>
  )
}
