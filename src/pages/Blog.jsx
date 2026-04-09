import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Launching Young Innovators Alliance',
      excerpt: 'We are thrilled to announce the official launch of Young Innovators Alliance! Learn about our mission, vision, and the journey ahead.',
      date: 'April 1, 2026',
      author: 'YIA Team',
      category: 'Announcement',
      image: '🚀',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Our First Innovation Project: Smart Attendance System',
      excerpt: 'Dive deep into our flagship project that uses AI and IoT to automate student attendance tracking in schools.',
      date: 'April 5, 2026',
      author: 'Tech Team',
      category: 'Project Spotlight',
      image: '📊',
      readTime: '8 min',
    },
    {
      id: 3,
      title: 'The Future of Youth Tech Education',
      excerpt: 'Exploring how technology is reshaping education and empowering the next generation of innovators.',
      date: 'April 3, 2026',
      author: 'Sarah Johnson',
      category: 'Tech Insights',
      image: '📚',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Meet Our Growing Community',
      excerpt: 'Stories from our 50+ members around the world who are building the future through innovation.',
      date: 'March 28, 2026',
      author: 'Community Lead',
      category: 'Community',
      image: '👥',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'AI & Machine Learning: Breaking Down the Basics',
      excerpt: 'A beginner-friendly guide to understanding artificial intelligence and machine learning concepts.',
      date: 'March 25, 2026',
      author: 'Tech Educator',
      category: 'Tutorial',
      image: '🤖',
      readTime: '10 min',
    },
    {
      id: 6,
      title: 'Robotics Workshop Success: Training 200+ Students',
      excerpt: 'Highlights from our successful robotics workshop series that reached students across multiple schools.',
      date: 'March 20, 2026',
      author: 'Hardware Team',
      category: 'Event',
      image: '🔧',
      readTime: '6 min',
    },
  ]

  const categories = ['All', 'Announcement', 'Project Spotlight', 'Tech Insights', 'Community', 'Tutorial', 'Event']

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">YIA Blog</h1>
          <p className="text-xl text-blue-100">Updates, achievements, events, and tech insights</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  idx === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="text-8xl text-center py-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                {blogPosts[0].image}
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white font-bold rounded-full text-sm w-fit mb-4">
                  Featured
                </span>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">{blogPosts[0].title}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 flex-wrap mb-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {blogPosts[0].author}
                  </div>
                  <span>{blogPosts[0].readTime} read</span>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition w-fit flex items-center gap-2">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden hover:transform hover:scale-105 duration-300"
              >
                <div className="text-6xl text-center py-8 bg-gradient-to-br from-blue-100 to-purple-100">
                  {post.image}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 flex-wrap text-gray-600 text-xs mb-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition text-sm flex items-center justify-center gap-2">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">Subscribe to our newsletter for the latest updates and insights.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg flex-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-6 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg hover:bg-yellow-300 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
