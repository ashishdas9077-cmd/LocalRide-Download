import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const logoSrc = `${import.meta.env.BASE_URL}assets/ourgo-logo.png`;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 group">
              <img
                src={logoSrc}
                alt="OurGo Ride Logo"
                className="w-8 h-8 rounded-lg shadow-sm object-cover ring-1 ring-slate-900/10"
              />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-slate-900 tracking-tight">
                  Our<span className="text-sky-500">Go</span>
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.24em] text-slate-500 uppercase mt-0.5">
                  — RIDE —
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your local ride booking app for Android. Connecting passengers and community drivers for everyday local transit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-sky-600 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-sky-600 transition-colors">Download APK</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition-colors">About OurGo</Link>
              </li>
            </ul>
          </div>

          {/* Support & Community */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Support & Help</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/faq" className="hover:text-sky-600 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">Contact & Technical Support</Link>
              </li>
              <li>
                <a
                  href="https://github.com/ashishdas9077-cmd/LocalRide-Download/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-sky-600 transition-colors inline-flex items-center gap-1"
                >
                  GitHub Releases
                  <span className="text-xs text-slate-400">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Legal & Privacy</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/privacy-policy" className="hover:text-sky-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-sky-600 transition-colors">Terms & Conditions</Link>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Official repository: <span className="font-mono text-slate-700">ashishdas9077-cmd/LocalRide-Download</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} OurGo Ride. An open Android application project for local transit.</p>
          <p className="text-slate-400">Designed for low-bandwidth performance and clean usability.</p>
        </div>
      </div>
    </footer>
  );
};
