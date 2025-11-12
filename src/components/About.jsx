import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I specialize in building modern, responsive websites with React, Tailwind CSS, and
            best practices in accessibility and performance.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="bg-gray-50 p-3 rounded-md">React</li>
            <li className="bg-gray-50 p-3 rounded-md">Tailwind CSS</li>
            <li className="bg-gray-50 p-3 rounded-md">FastAPI</li>
            <li className="bg-gray-50 p-3 rounded-md">MongoDB</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900">Experience</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• Frontend Developer at Company A (2022 - Now)</li>
            <li>• Intern Web Developer at Company B (2021 - 2022)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
