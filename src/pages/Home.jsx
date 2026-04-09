import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Users, Trophy, Code, Bot, Wrench, Lightbulb } from 'lucide-react'

export default function Home() {
  const services = [
    { icon: Bot, title: 'AI & Intelligent Systems', desc: 'Building smart solutions with machine learning' },
    { icon: Wrench, title: 'Robotics & Hardware', desc: 'Creating innovative hardware solutions' },
    { icon: Code, title: 'Software Development', desc: 'Developing applications and digital tools' },
    { icon: Zap, title: 'Automation Tools', desc: 'Building systems that automate processes' },
    { icon: Lightbulb, title: 'Website Design', desc: 'Creating beautiful digital experiences' },
    { icon: Users, title: 'Tech Education', desc: 'Empowering youth through learning' },
  ]

  const impact = [
    { number: '50+', label: 'Active Members', icon: '👥' },
    { number: '12', label: 'Projects Built', icon: '🚀' },
    { number: '10', label: 'Communities Reached', icon: '🌍' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      problem: 'Manual attendance issues and time wastage',
      solution: 'Automated system with facial recognition',
      image: '📊',
    },
    {
      id: 2,
      title: 'AI Learning Assistant',
      problem: 'Students need personalized learning support',
      solution: 'AI-powered tutoring chatbot',
      image: '🤖',
    },
    {
      id: 3,
      title: 'Community Platform',
      problem: 'Youth lack collaboration spaces',
      solution: 'Platform connecting young innovators',
      image: '🌐',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Turning Ideas into Impact
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Empowering youth through innovation, collaboration, and technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="px-8 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg hover:bg-yellow-300 transition inline-flex items-center justify-center gap-2"
            >
              Join Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-4xl mb-4 text-blue-600"><Icon size={40} /></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.map((stat, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="text-6xl text-center py-8 bg-gradient-to-br from-blue-100 to-purple-100">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><span className="font-bold text-red-600">Problem:</span> {project.problem}</p>
                    <p><span className="font-bold text-green-600">Solution:</span> {project.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join a global network of young innovators creating impactful solutions for real-world challenges.
          </p>
          <Link
            to="/join"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
