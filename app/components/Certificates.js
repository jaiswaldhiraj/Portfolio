import React from 'react'
import OnlyIcon from './OnlyIcon'

export const Certificates = () => {
  return (
          <div
        className="mt-14"
      >
        <h2 className="flex gap-4 md:text-4xl text-2xl font-bold text-[var(--highlight)] mb-6">
          Certifications <OnlyIcon icon={"certificates"}/>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-white/3 to-white/10 shadow-sm w-full sm:w-1/2">
            <h4 className="font-semibold">
              Web Designing and PHP Development
            </h4>

            <p className="text-sm text-[var(--text-primary)] mt-1">
               Asterix Solution, K.P.B Hinduja College of Commerce 
            </p>

            <p className="text-xs italic mt-3">
              Issued:{" "}
              <span className="font-medium">September 2023</span>
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-white/3 to-white/10 shadow-sm w-full sm:w-1/2">
            <h4 className="font-semibold">
              Node JS and React Development 
            </h4>

            <p className="text-sm text-[var(--text-primary)] mt-1">
               Asterix Solution, K.P.B Hinduja College of Commerce 
            </p>

            <p className="text-xs italic mt-3">
              Issued:{" "}
              <span className="font-medium">September 2024</span>
            </p>
          </div>
        </div>
      </div>
  )
}
