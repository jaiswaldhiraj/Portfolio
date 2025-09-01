import React from 'react'

const page = () => {
return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-orange-700 mb-6">About Me</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Hi, I’m <span className="font-semibold text-orange-700">Dhiraj Jaiswal</span> 👋 <br /><br />
        I am a passionate web and app developer with experience in building 
        modern, responsive applications. I enjoy working with technologies 
        like <span className="font-semibold">Next.js, Tailwind CSS, Firebase</span> and love creating 
        intuitive and user-friendly experiences.
      </p>

      <h2 className="text-3xl font-bold text-orange-600 mt-10">Education 🎓</h2>
      <p className="mt-2 text-gray-600">
        B.Tech in Computer Science & Engineering <br />
        XYZ University (2020 – 2024)
      </p>

      <h2 className="text-3xl font-bold text-orange-600 mt-10">Skills 🛠</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li>Java, Firebase, SQL</li>
        <li>React.js, Next.js, Tailwind CSS</li>
        <li>UI/UX & Responsive Design</li>
      </ul>
    </section>
  );
}

export default page