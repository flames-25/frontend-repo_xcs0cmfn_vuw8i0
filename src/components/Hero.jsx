import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-[70vh] flex items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Hello, I am</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Your Name</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A passionate Frontend Developer who loves crafting delightful user experiences
            with modern web technologies.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">Contact</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-tr from-blue-200 to-purple-200 shadow-inner mx-auto" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-blue-500/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
