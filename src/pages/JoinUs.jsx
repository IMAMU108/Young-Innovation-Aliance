import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interest: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.role) newErrors.role = 'Please select a role'
    if (!formData.interest.trim()) newErrors.interest = 'Please tell us your interests'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', role: '', interest: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-blue-100">
            Join a growing global community of innovators building impactful solutions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Join YIA?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Access to Resources</h3>
                  <p className="text-gray-700">Get tools, technologies, and mentorship to bring your ideas to life.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Global Network</h3>
                  <p className="text-gray-700">Connect with innovators from around the world and collaborate on projects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Learning Opportunities</h3>
                  <p className="text-gray-700">Attend workshops, trainings, and bootcamps led by industry experts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Make an Impact</h3>
                  <p className="text-gray-700">Build solutions that solve real-world problems and help your community.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Career Growth</h3>
                  <p className="text-gray-700">Develop skills that open doors to tech careers and leadership roles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Started</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-green-800">Thank you for joining!</p>
                  <p className="text-green-700 text-sm">We'll be in touch soon with more information.</p>
                </div>
              </div>
            )}

            {Object.keys(errors).length > 0 && !submitted && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-red-800">Please fix the errors below:</p>
                  <ul className="text-red-700 text-sm mt-2 space-y-1">
                    {Object.values(errors).map((err, idx) => (
                      <li key={idx}>• {err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                  How do you want to join? *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your role...</option>
                  <option value="member">Member - Join our community</option>
                  <option value="volunteer">Volunteer - Help us grow</option>
                  <option value="collaborator">Collaborator - Work on projects</option>
                  <option value="mentor">Mentor - Guide others</option>
                  <option value="partner">Partner - Collaborate with us</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-2">
                  What are your interests? *
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${
                    errors.interest ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your interests (e.g., AI, robotics, web development, etc.)"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Join YIA Now
              </button>
            </form>

            <p className="text-xs text-gray-600 text-center mt-4">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Growing Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Active Members</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Countries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-pink-600 mb-2">12</div>
              <p className="text-gray-700 font-semibold">Projects</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Supportive</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
