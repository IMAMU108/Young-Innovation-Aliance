import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
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
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            We'd love to hear from you. Let's collaborate and innovate together.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
            
            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="text-3xl text-blue-600">
                  <Mail size={32} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
                <p className="text-gray-700">yia.global.official@gmail.com</p>
                <p className="text-gray-600 text-sm mt-1">We typically reply within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="text-3xl text-purple-600">
                  <Phone size={32} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-700">Coming soon</p>
                <p className="text-gray-600 text-sm mt-1">We're expanding our team</p>
              </div>
            </div>

            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="text-3xl text-pink-600">
                  <MapPin size={32} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Global</h3>
                <p className="text-gray-700">Operating in 10+ countries</p>
                <p className="text-gray-600 text-sm mt-1">Connect with us anywhere</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mt-12">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">f</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">𝕏</a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-2xl">📷</a>
                <a href="#" className="text-blue-700 hover:text-blue-800 text-2xl">in</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-green-800">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
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
                  placeholder="Your name"
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
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            <p className="text-xs text-gray-600 text-center mt-4">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How can I join YIA?</h3>
              <p className="text-gray-700">
                Visit our <a href="/join" className="text-blue-600 hover:underline">Join Us page</a> to fill out the membership form. We'll review your application and get back to you within a few days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">What programs do you offer?</h3>
              <p className="text-gray-700">
                We offer various programs including Tech Training, Innovation Bootcamp, AI Masterclass, Robotics Workshops, Web Development courses, and School Outreach. Check our <a href="/programs" className="text-blue-600 hover:underline">Programs page</a> for details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Is there a membership fee?</h3>
              <p className="text-gray-700">
                Our basic membership is free for students and young professionals. Some advanced programs may have a nominal fee. Contact us for details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How can organizations partner with YIA?</h3>
              <p className="text-gray-700">
                We welcome partnerships for sponsorship, collaboration, and mentorship. Visit our <a href="/partners" className="text-blue-600 hover:underline">Partners page</a> or email us directly at yia.global.official@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
