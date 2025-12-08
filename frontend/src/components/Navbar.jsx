import { IconUser } from '../App'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Navigation */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold text-indigo-600">
            Quick<span className="text-gray-900">Task</span>
          </div>

          <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-600">
            <a className="hover:text-indigo-600" href="#services">Services</a>
            <a className="hover:text-indigo-600" href="#how">How it works</a>
            <a className="hover:text-indigo-600" href="#testimonials">Testimonials</a>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Sign In -> Login Page */}
          <Link 
            to="/login"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white  hover:bg-blue-700  hover:text-white shadow"
          >
            <IconUser /> Sign In
          </Link>

          {/* Book Now -> Service Providers Page */}
          <Link 
            to="/providers"
            className="inline-flex items-center gap-2  hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}
