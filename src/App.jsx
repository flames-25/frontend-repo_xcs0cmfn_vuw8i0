import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-500 border-t">© 2025 Your Name. All rights reserved.</footer>
    </div>
  )
}

export default App
