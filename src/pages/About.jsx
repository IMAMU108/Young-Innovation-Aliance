import { CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries and creating next-gen solutions' },
    { title: 'Collaboration', desc: 'Working together to achieve greater impact' },
    { title: 'Impact', desc: 'Creating real solutions for real-world problems' },
    { title: 'Growth', desc: 'Continuous learning and personal development' },
    { title: 'Inclusiveness', desc: 'Welcome to all backgrounds and skill levels' },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Young Innovators Alliance</h1>
          <p className="text-xl text-blue-100">Building the future through innovation and collaboration</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Young Innovators Alliance (YIA) is a youth-driven organization focused on empowering young people with access to technology, innovation, and collaborative opportunities. We believe that the next generation of leaders and innovators should have the tools, knowledge, and community support to turn their ideas into reality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our community spans across continents, bringing together talented young minds who are passionate about solving problems and creating positive change through technology.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-xl text-gray-800 font-semibold">
              To empower youth through access to technology, innovation, and collaboration, enabling them to create impactful solutions for real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md border-l-4 border-purple-600">
            <p className="text-xl text-gray-800 font-semibold">
              To build a global network of young innovators shaping the future through technology and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Why Join YIA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Launch Your Ideas</h3>
                <p className="text-gray-700">Turn your concepts into real-world innovation projects with mentorship and resources.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">👥</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Build Your Network</h3>
                <p className="text-gray-700">Connect with like-minded innovators globally and collaborate on exciting projects.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">📚</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Learn & Grow</h3>
                <p className="text-gray-700">Access workshops, trainings, and resources to develop your technical and leadership skills.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🌍</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Make an Impact</h3>
                <p className="text-gray-700">Create solutions that solve real problems and positively impact your community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
