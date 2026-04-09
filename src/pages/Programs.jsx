import { Calendar, Users, Award } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Youth Tech Training Program',
      icon: '🧠',
      desc: 'Helping students learn AI, robotics, and digital skills through hands-on training.',
      duration: '12 weeks',
      participants: '100+',
      highlights: [
        'Live coding sessions',
        'AI & Machine Learning fundamentals',
        'Robotics workshop',
        'Project-based learning',
      ],
    },
    {
      id: 2,
      title: 'Innovation Bootcamp',
      icon: '🚀',
      desc: 'Intensive program where teams develop innovative solutions from idea to prototype.',
      duration: '8 weeks',
      participants: '50+',
      highlights: [
        'Idea validation',
        'MVP development',
        'Mentorship from industry experts',
        'Demo day presentation',
      ],
    },
    {
      id: 3,
      title: 'School Outreach Program',
      icon: '🏫',
      desc: 'Bringing technology education directly to schools in underserved communities.',
      duration: 'Ongoing',
      participants: '1000+',
      highlights: [
        'STEM curriculum support',
        'Volunteer mentors',
        'Hardware lab setup',
        'Career guidance',
      ],
    },
    {
      id: 4,
      title: 'AI & Machine Learning Masterclass',
      icon: '🤖',
      desc: 'Advanced program for students interested in artificial intelligence and neural networks.',
      duration: '6 weeks',
      participants: '80+',
      highlights: [
        'Deep learning concepts',
        'TensorFlow & PyTorch',
        'Real-world projects',
        'Research paper reviews',
      ],
    },
    {
      id: 5,
      title: 'Robotics Workshop Series',
      icon: '🔧',
      desc: 'Hands-on workshops teaching robotics, IoT, and embedded systems programming.',
      duration: 'Monthly',
      participants: '200+',
      highlights: [
        'Arduino & Raspberry Pi',
        'Circuit design',
        'Programming embedded systems',
        'Build competitions',
      ],
    },
    {
      id: 6,
      title: 'Web Development Intensive',
      icon: '💻',
      desc: 'Complete web development training from frontend to backend and deployment.',
      duration: '10 weeks',
      participants: '150+',
      highlights: [
        'HTML, CSS, JavaScript',
        'React & Node.js',
        'Database design',
        'Deploy to production',
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Programs & Activities</h1>
          <p className="text-xl text-blue-100">Learn. Build. Innovate. Grow.</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <div
                key={program.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{program.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.desc}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <Calendar size={20} className="mx-auto mb-1 text-blue-600" />
                      <p className="text-xs text-gray-600 font-semibold">{program.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users size={20} className="mx-auto mb-1 text-purple-600" />
                      <p className="text-xs text-gray-600 font-semibold">{program.participants}</p>
                    </div>
                    <div className="text-center">
                      <Award size={20} className="mx-auto mb-1 text-green-600" />
                      <p className="text-xs text-gray-600 font-semibold">Certified</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">What You'll Learn:</p>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-bold">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Calendar */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Upcoming Programs</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Innovation Bootcamp - Batch 5</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Available</span>
              </div>
              <p className="text-gray-700 mb-2">Starting: June 1, 2026 | Duration: 8 weeks</p>
              <button className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition">
                Register Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">AI & ML Masterclass</h3>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">Full</span>
              </div>
              <p className="text-gray-700 mb-2">Starting: May 15, 2026 | Duration: 6 weeks</p>
              <button className="px-4 py-2 bg-gray-400 text-white font-bold rounded cursor-not-allowed" disabled>
                Waitlist
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Web Development Intensive</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Coming Soon</span>
              </div>
              <p className="text-gray-700 mb-2">Starting: July 1, 2026 | Duration: 10 weeks</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
