import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logoSrc = `${import.meta.env.BASE_URL}assets/ourgo-logo.png`;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Download', path: '/download' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark with Official OurGo Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 group"
          aria-label="OurGo Ride Home"
        >
          <img
            src={logoSrc}
            alt="OurGo Ride Logo"
            className="w-10 h-10 rounded-xl shadow-sm object-cover ring-1 ring-slate-900/10"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="text-xl font-black tracking-tight text-slate-900 font-sans">
              Our<span className="text-sky-500">Go</span>
            </span>
            <span className="text-[8.5px] font-bold tracking-[0.28em] text-slate-500 uppercase mt-0.5">
              — RIDE —
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive(link.path)
                  ? 'text-sky-600 font-semibold border-b-2 border-sky-500'
                  : 'hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download APK</span>
          </Link>
        </div>

        {/* Mobile Menu Button (touch target >= 44px) */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2.5 text-slate-700 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-sky-50 text-sky-600 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-base font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download APK</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
