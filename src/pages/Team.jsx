import { Code2, Briefcase, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'You',
      role: 'Executive Director',
      desc: 'Leading innovation, strategy, and global vision of YIA. Driving the mission to empower youth through technology.',
      image: '👨‍💼',
      social: { linkedin: '#', github: '#', email: '#' },
    },
    {
      id: 2,
      name: 'Tech Lead',
      role: 'Hardware/Tech Lead',
      desc: 'Spearheading robotics and hardware solutions. Mentoring young engineers in cutting-edge technology.',
      image: '🔧',
      social: { linkedin: '#', github: '#', email: '#' },
    },
    {
      id: 3,
      name: 'Social Manager',
      role: 'Social Media & Community Manager',
      desc: 'Building our global community and sharing the YIA story. Connecting innovators worldwide.',
      image: '📱',
      social: { linkedin: '#', github: '#', email: '#' },
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-blue-100">Passionate innovators driving YIA's mission forward</p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="text-7xl text-center py-12 bg-gradient-to-br from-blue-100 to-purple-100">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{member.desc}</p>
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" title="LinkedIn">
                      <Briefcase size={20} />
                    </a>
                    <a href={member.social.github} className="p-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition" title="GitHub">
                      <Code2 size={20} />
                    </a>
                    <a href={member.social.email} className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition" title="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Join Our Growing Team</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're always looking for passionate individuals to join our mission. Whether you're a developer, designer, project manager, or just someone passionate about innovation, we'd love to have you!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  )
}
