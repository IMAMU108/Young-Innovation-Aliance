import { ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      problem: 'Manual attendance takes valuable classroom time and is prone to errors',
      solution: 'Automated system using facial recognition and IoT sensors',
      howItWorks: 'Students are identified through cameras at entry points, attendance is automatically recorded in real-time.',
      impact: 'Saves 10+ minutes per class and improves accuracy to 99%',
      image: '📊',
      status: 'Deployed',
      techStack: ['Python', 'OpenCV', 'Flask', 'IoT'],
    },
    {
      id: 2,
      title: 'AI Learning Assistant',
      problem: 'Students struggle with personalized learning support and need 24/7 access to tutoring',
      solution: 'AI-powered chatbot providing personalized learning recommendations',
      howItWorks: 'The bot analyzes learning patterns and provides customized study materials and explanations.',
      impact: 'Helped 100+ students improve their grades by 15% on average',
      image: '🤖',
      status: 'Active',
      techStack: ['NLP', 'Machine Learning', 'React', 'Node.js'],
    },
    {
      id: 3,
      title: 'Community Innovation Platform',
      problem: 'Young innovators feel isolated and lack collaboration spaces',
      solution: 'Web platform connecting innovators, sharing projects, and finding collaborators',
      howItWorks: 'Community members create profiles, showcase projects, and join teams on shared initiatives.',
      impact: 'Built a network of 500+ innovators with 50+ active collaborations',
      image: '🌐',
      status: 'Growing',
      techStack: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    },
    {
      id: 4,
      title: 'Robotics Workshop Kit',
      problem: 'Limited access to robotics resources for students in developing regions',
      solution: 'Open-source robotics kit with comprehensive learning materials',
      howItWorks: 'Low-cost components are assembled and programmed using beginner-friendly languages.',
      impact: 'Over 200 students trained in robotics and embedded systems',
      image: '🤖',
      status: 'Production',
      techStack: ['Arduino', 'C++', 'CAD', 'Hardware Design'],
    },
    {
      id: 5,
      title: 'Environmental Monitoring System',
      problem: 'Schools and communities lack real-time environmental data for decision-making',
      solution: 'IoT sensors monitoring air quality, water quality, and pollution levels',
      howItWorks: 'Data from distributed sensors is collected, analyzed, and visualized on an interactive dashboard.',
      impact: 'Monitored environmental metrics in 5 schools and 12 communities',
      image: '🌍',
      status: 'Active',
      techStack: ['IoT', 'Sensors', 'Cloud', 'Data Visualization'],
    },
    {
      id: 6,
      title: 'Youth Skill Development App',
      problem: 'Limited access to quality tech education in non-urban areas',
      solution: 'Mobile app delivering bite-sized coding and tech lessons',
      howItWorks: 'Interactive lessons, quizzes, and projects help users learn at their own pace.',
      impact: 'Downloaded 1000+ times with 80% completion rate',
      image: '📱',
      status: 'Growing',
      techStack: ['React Native', 'Firebase', 'Gamification'],
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Deployed':
        return 'bg-green-100 text-green-800'
      case 'Active':
        return 'bg-blue-100 text-blue-800'
      case 'Growing':
        return 'bg-purple-100 text-purple-800'
      case 'Production':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100">Innovative solutions creating real-world impact</p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="text-7xl text-center py-12 bg-gradient-to-br from-blue-100 to-purple-100">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 flex-1">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4 text-sm">
                    <div>
                      <p className="font-semibold text-red-600">🚨 Problem</p>
                      <p className="text-gray-700">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">✅ Solution</p>
                      <p className="text-gray-700">{project.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">⚙️ How It Works</p>
                      <p className="text-gray-700">{project.howItWorks}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-600">📈 Impact</p>
                      <p className="text-gray-700">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <p className="text-gray-600 font-semibold">Active Projects</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600 font-semibold">People Impacted</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">20</div>
              <p className="text-gray-600 font-semibold">Technologies Used</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
