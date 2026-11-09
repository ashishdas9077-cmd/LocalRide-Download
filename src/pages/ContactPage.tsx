import React from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, Bug, Github, CheckSquare, MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <LifeBuoy className="w-3.5 h-3.5" />
          <span>Support & Issue Tracking</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact & Technical Support
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          LocalRide is currently in community testing. Official direct customer contact channels are being prepared as the project scales.
        </p>
      </div>

      {/* 2. Official Status Notice */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-sm sm:text-base">Support Channels Notice</h2>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed mt-1">
              Direct telephone hotlines and general customer support email addresses have not yet been assigned for public release. In accordance with our honest communication policy, we do not provide mock email addresses or dummy contact forms that discard your messages.
            </p>
          </div>
        </div>
      </div>

      {/* 3. How to Report a Technical Bug or Issue */}
      <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Bug className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Reporting Technical Issues</h2>
            <p className="text-xs text-slate-500">How to submit a bug directly to developers</p>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          If you encounter an application crash, unexpected behavior, layout problem, or installation failure on your Android handset, the most effective place to report it is through our official GitHub repository issue tracker.
        </p>

        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-blue-600" />
            <span>Recommended Information to Include in Your Bug Report:</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-slate-800 min-w-[130px]">1. Device Model:</span>
              <span>e.g., Samsung Galaxy A14, Redmi Note 11, Realme 9</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-slate-800 min-w-[130px]">2. Android OS:</span>
              <span>e.g., Android 11, 12, 13, 14</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-slate-800 min-w-[130px]">3. LocalRide Build:</span>
              <span>The APK version tag (e.g., v1.0.0 or commit release date)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-slate-800 min-w-[130px]">4. Steps to Reproduce:</span>
              <span>What buttons you pressed and what happened versus what you expected</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-slate-800 min-w-[130px]">5. Screenshot / Log:</span>
              <span>A screenshot of the error screen or crash popup (if possible)</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <a
            href="https://github.com/ashishdas9077-cmd/LocalRide-Download/issues"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Issues Tracker</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </section>

      {/* 4. Common Troubleshooting Fast Paths */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
          <h3 className="text-base font-bold text-slate-900">Installation Help</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Need assistance enabling APK installation permissions or checking compatibility on older phones?
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Read the Installation FAQ →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
          <h3 className="text-base font-bold text-slate-900">Feature Clarifications</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Wondering whether a specific transport mode or ride request option is supported in the current build?
          </p>
          <Link
            to="/features"
            className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            View Features Breakdown →
          </Link>
        </div>
      </section>

      {/* 5. Developer Placeholder Note */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-500">
        [Note for Site Maintainer: When official project email or community discussion groups are designated, update this page in <span className="font-mono text-slate-700">src/pages/ContactPage.tsx</span>].
      </div>

    </div>
  );
};
