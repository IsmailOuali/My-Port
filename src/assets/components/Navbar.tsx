import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      to: "/",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "About",
      to: "/about",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: "Skills",
      to: "/skills",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: "Projects",
      to: "/projects",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: "Contact",
      to: "/contact",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-2xl border-b border-purple-100/30"
          : "bg-white/90 backdrop-blur-xl shadow-lg"
      }`}
    >
      {/* Dynamic background gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 transition-all duration-500 hover:scale-105"
          >
            <div className="relative">
              {/* Main logo container */}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              {/* Floating accent dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  Ismail Ouali
                </span>
                <span className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group flex items-center space-x-2 ${
                  location.pathname === link.to
                    ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg transform scale-105"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className={`transition-all duration-300 ${
                  location.pathname === link.to ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'
                }`}>
                  {link.icon}
                </span>
                <span className="relative">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Let's Talk</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden relative w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 flex items-center justify-center group border border-purple-100/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`}></span>
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}>
          <div className="relative px-4 py-8 bg-white/95 backdrop-blur-2xl rounded-3xl mt-6 shadow-2xl border border-purple-100/50">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 rounded-3xl"></div>
            
            <nav className="relative space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`group flex items-center space-x-4 px-4 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${
                    location.pathname === link.to
                      ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg transform scale-[1.02]"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    location.pathname === link.to
                      ? "bg-white/20"
                      : "bg-purple-100 group-hover:bg-purple-200"
                  }`}>
                    <span className={`transition-colors duration-300 ${
                      location.pathname === link.to ? 'text-white' : 'text-purple-600'
                    }`}>
                      {link.icon}
                    </span>
                  </div>
                  <span className="flex-1">{link.name}</span>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    location.pathname === link.to
                      ? "bg-white"
                      : "bg-purple-300 group-hover:bg-purple-500"
                  }`}></div>
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-purple-100">
              <Link
                to="/contact"
                className="group relative flex items-center justify-center space-x-2 w-full px-4 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Get In Touch</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
