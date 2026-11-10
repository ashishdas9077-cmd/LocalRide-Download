import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Search, Download, ExternalLink } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  category: 'General' | 'Installation' | 'Troubleshooting';
}

export const FaqPage: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true, 2: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'General' | 'Installation' | 'Troubleshooting'>('All');

  const faqs: FaqItem[] = [
    {
      category: 'General',
      question: 'What is OurGo Ride?',
      answer: (
        <p>
          OurGo Ride (short brand: OurGo) is a local ride-booking application developed for Android devices. It connects local passengers with nearby community transport operators, including auto-rickshaws, e-rickshaws, and local taxis, providing direct and convenient neighborhood travel.
        </p>
      ),
    },
    {
      category: 'General',
      question: 'Is OurGo Ride available on Android?',
      answer: (
        <p>
          Yes. OurGo Ride is currently developed exclusively as an Android application. It can be installed on Android devices running Android 7.0 (Nougat) or higher via direct APK download.
        </p>
      ),
    },
    {
      category: 'Installation',
      question: 'How can I download the APK?',
      answer: (
        <div className="space-y-2">
          <p>
            You can download the latest official APK directly on our{' '}
            <Link to="/download" className="text-blue-600 font-semibold hover:underline">
              Download Page
            </Link>
            . We query public GitHub Releases to fetch the newest verified <span className="font-mono text-slate-800">LocalRide.apk</span> binary file.
          </p>
        </div>
      ),
    },
    {
      category: 'Installation',
      question: 'How can I install an APK on my Android phone?',
      answer: (
        <div className="space-y-2">
          <p>
            Because the app is distributed directly as an APK package:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 pl-2">
            <li>Download the <span className="font-mono text-slate-900">LocalRide.apk</span> file from our Download page.</li>
            <li>Tap the completed download alert in your notification bar or file manager.</li>
            <li>If Android prompts you that installation from unknown sources is blocked, tap <strong>Settings</strong> and toggle on <strong>"Allow from this source"</strong> for your browser or file manager.</li>
            <li>Return to the prompt and tap <strong>Install</strong>. Once completed, you can open OurGo Ride from your home screen.</li>
          </ol>
        </div>
      ),
    },
    {
      category: 'Installation',
      question: 'Where can I find older versions of OurGo Ride?',
      answer: (
        <p>
          All published releases remain available on the{' '}
          <Link to="/download" className="text-blue-600 font-semibold hover:underline">
            Download Page
          </Link>{' '}
          under the <strong>Version History</strong> section. You can download and inspect any previous release build if needed for compatibility testing.
        </p>
      ),
    },
    {
      category: 'General',
      question: 'Is OurGo Ride still under development?',
      answer: (
        <p>
          Yes. OurGo Ride is actively being engineered. We follow an iterative release cycle where new features, bug fixes, and performance upgrades are published as new APK releases on GitHub. You can review current versus planned features on our{' '}
          <Link to="/features" className="text-blue-600 font-semibold hover:underline">
            Features Page
          </Link>
          .
        </p>
      ),
    },
    {
      category: 'Troubleshooting',
      question: 'What should I do if the download does not work or fails?',
      answer: (
        <div className="space-y-2">
          <p>
            If the download does not initiate or encounters an error:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
            <li>Ensure you have a stable internet connection and sufficient free storage space on your device (at least 50 MB).</li>
            <li>Refresh the Download page or tap the "Retry Fetching Releases" button if GitHub API was momentarily rate-limited.</li>
            <li>
              You can also download directly from the public GitHub Releases page:{' '}
              <a
                href="https://github.com/ashishdas9077-cmd/LocalRide-Download/releases"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                GitHub Releases repository <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      category: 'Troubleshooting',
      question: 'How can I report a problem or bug?',
      answer: (
        <p>
          You can report technical bugs, crashes, or device incompatibility directly via our official GitHub Issues tracker. Visit our{' '}
          <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact & Support Page
          </Link>{' '}
          for a step-by-step checklist on the details to include in your bug report (such as phone model, Android version, and error description).
        </p>
      ),
    },
    {
      category: 'General',
      question: 'Why is OurGo Ride distributed as an APK rather than through the Google Play Store?',
      answer: (
        <p>
          OurGo Ride is currently in active development and testing. Direct APK distribution via GitHub Releases allows rapid deployment of updates directly to community testers without store review delays or developer fee overhead. An official Play Store listing will be evaluated once the core feature set is finalized and stabilized.
        </p>
      ),
    },
    {
      category: 'Troubleshooting',
      question: 'Is downloading and installing the OurGo Ride APK safe?',
      answer: (
        <p>
          Yes, provided you download only from our official website or official GitHub repository (<span className="font-mono text-slate-800">ashishdas9077-cmd/LocalRide-Download</span>). The APK contains only the genuine Android application binary and does not include adware or unauthorized tracking components.
        </p>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Got Questions? We Have Answers.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Find clear, direct answers about OurGo Ride, Android APK installation, compatibility, and troubleshooting.
        </p>
      </div>

      {/* 2. Search & Category Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. install, older versions, crashes)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['All', 'General', 'Installation', 'Troubleshooting'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
            No questions matched your search query. Try typing a different keyword or reset filters.
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = !!openIndices[index];
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 flex-1 leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* 4. Help CTA */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
        <h3 className="text-base font-bold text-slate-900">Have a question not listed here?</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Visit our Contact & Support guide to report issues or check the repository issue tracker.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-600 bg-white border border-slate-300 hover:bg-blue-50 rounded-lg shadow-sm transition-colors"
          >
            <span>Technical Support Guidance</span>
          </Link>
        </div>
      </div>

    </div>
  );
};
