import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-12.5 flex items-center bg-gradient-to-r from-[#000] via-[#433f3f] to-indigo-600 
                   bg-[length:400%_400%] animate-[gradientAnimation_5s_infinite_alternate] shadow-lg">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-6 sm:px-8 md:px-12 lg:px-20 py-3 md:py-4">
        
        {/* Logo */}
        <a href="#" className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Agency<span className="text-yellow-300">X</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <a href="#" className="text-white text-lg font-medium hover:text-yellow-300 transition-all duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-[#13308e] text-[#fff] text-lg px-6 py-2 rounded-lg font-semibold shadow-md 
                     hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
        >
          Sign in
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-4xl transition-transform duration-300"
        >
          {isOpen ? <X className="animate-spin" /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center space-y-8 
                      transition-all duration-500 ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"}`}
      >
        {["Home", "Services", "About", "Contact"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-3xl font-semibold hover:text-yellow-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="#"
          className="bg-[#4f18db] text-[#fff] px-6 py-2 rounded-lg text-xl font-semibold shadow-md hover:bg-yellow-500 
                     transition-all duration-300 transform hover:scale-105"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </a>
      </div>
      
      {/* Tailwind Custom Animation */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
    </nav>
  );
};
