import React from 'react'

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">
          <span className="text-gray-900">My</span>
          <span className="text-blue-600">Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </header>
  )
}

export default Navbar
