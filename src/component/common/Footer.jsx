import { Link } from 'react-router-dom'
import { Mail, Share2, Briefcase, Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span> YIA
            </h3>
            <p className="text-gray-400 mb-4">
              Young Innovators Alliance - Empowering youth through innovation and technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition"><Share2 size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Briefcase size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Code2 size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Heart size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/programs" className="hover:text-white transition">Programs</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/partners" className="hover:text-white transition">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:yia.global.official@gmail.com" className="hover:text-white transition">
                  yia.global.official@gmail.com
                </a>
              </p>
              <p className="text-sm mt-4">Building a global network of young innovators.</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2026 Young Innovators Alliance. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
