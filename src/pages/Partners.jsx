import { CheckCircle, Building2, HandshakeIcon } from 'lucide-react'

export default function Partners() {
  const opportunities = [
    {
      icon: <Building2 size={40} />,
      title: 'Funding & Sponsorship',
      desc: 'Support our mission to empower youth through financial contributions.',
      details: ['Project funding', 'Scholarship programs', 'Event sponsorship', 'Equipment grants'],
    },
    {
      icon: <HandshakeIcon size={40} />,
      title: 'Collaboration',
      desc: 'Co-develop programs, share resources, and amplify impact together.',
      details: ['Joint projects', 'Training programs', 'Resource sharing', 'Cross-promotion'],
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Mentorship',
      desc: 'Provide expertise, guidance, and industry insights to our young innovators.',
      details: ['Expert mentors', 'Career guidance', 'Industry talks', 'Technical support'],
    },
  ]

  const partners = [
    { name: 'TechStart Hub', category: 'Tech Community' },
    { name: 'Education Initiative', category: 'Education Partner' },
    { name: 'Innovation Foundation', category: 'Funding Partner' },
    { name: 'Youth Council', category: 'Community Partner' },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Partners & Sponsors</h1>
          <p className="text-xl text-blue-100">
            We welcome partnerships with organizations, institutions, and individuals who share our vision.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Build Together</h2>
          <p className="text-lg text-gray-700 mb-8">
            Young Innovators Alliance is open to funding, sponsorship, and collaboration opportunities. Whether you're an organization, institution, or individual passionate about empowering youth, we'd love to partner with you.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-lg font-semibold text-gray-800">
              Together, we can amplify our impact and create opportunities for thousands of young innovators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">{opp.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{opp.title}</h3>
                <p className="text-gray-700 mb-6">{opp.desc}</p>
                <ul className="space-y-2">
                  {opp.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-green-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4 text-gray-400">🏢</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Space for your organization's logo here. Join our growing network of partners.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Partner with YIA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Global Reach</h3>
              <p className="text-gray-700">Access a network of innovative youth across 10+ countries making real impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Scalable Impact</h3>
              <p className="text-gray-700">Your support directly enables innovative projects that create positive outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Brand Visibility</h3>
              <p className="text-gray-700">Gain visibility among young innovators and the global tech community.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Innovation Pipeline</h3>
              <p className="text-gray-700">Connect with emerging talent and early-stage innovation happening globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let's Make a Difference Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to learn more about partnership opportunities.
          </p>
          <a
            href="mailto:yia.global.official@gmail.com"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
