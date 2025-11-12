import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/hello`, { method: 'GET' })
      if (res.ok) {
        setStatus('Message sent! (Demo)')
      } else {
        setStatus('Failed to send.')
      }
    } catch (err) {
      setStatus('Failed to send.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
          <input className="border border-gray-300 rounded-md p-3" placeholder="Your name" required />
          <input type="email" className="border border-gray-300 rounded-md p-3" placeholder="Email" required />
          <textarea className="md:col-span-2 border border-gray-300 rounded-md p-3" rows="4" placeholder="Message" required />
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Send</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
