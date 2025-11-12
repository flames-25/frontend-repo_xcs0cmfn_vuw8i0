import React from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A modern landing page built with React and Tailwind.',
    tags: ['React', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A full-stack app using FastAPI and MongoDB.',
    tags: ['FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'An interactive UI with animations and micro-interactions.',
    tags: ['UX', 'Animations'],
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="h-40 rounded-md bg-gradient-to-br from-blue-100 to-purple-100" />
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
