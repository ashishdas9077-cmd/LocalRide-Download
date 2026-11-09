import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <Shield className="w-3.5 h-3.5" />
          <span>Legal Document Draft</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last revised: November 2026 · Draft for community review
        </p>
      </div>

      {/* 2. Developer Verification Notice */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed space-y-1">
          <strong className="font-bold">[Developer Review Notice]:</strong>
          <p className="text-amber-800">
            This document represents a transparent draft policy for the static LocalRide website and preliminary Android application testing. Before launching commercial operations or collecting user identifiable data, the developer must review and adapt this policy to comply with local legal jurisdictions.
          </p>
        </div>
      </div>

      {/* 3. Policy Content */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Website Operations & Data Handling</h2>
          <p>
            The LocalRide official website (<span className="font-mono text-xs text-slate-800">ashishdas9077-cmd.github.io/LocalRide-Download/</span>) is a static web application hosted on GitHub Pages.
          </p>
          <p>
            This website does not require user accounts, does not collect personal contact information, does not use advertising trackers, and does not set tracking cookies in your browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Public GitHub API Requests</h2>
          <p>
            To display the most recent application version number, release date, and official APK download link, this website sends client-side HTTP requests directly to the public GitHub API:
          </p>
          <div className="p-3 bg-slate-50 rounded-lg font-mono text-xs text-slate-800 break-all border border-slate-200">
            https://api.github.com/repos/ashishdas9077-cmd/LocalRide-Download/releases
          </div>
          <p>
            These requests are unauthenticated and public. GitHub may log standard network metadata (such as IP addresses and user-agent strings) in accordance with GitHub's standard Privacy Statement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Android Application Permissions (Draft Context)</h2>
          <p>
            When installing and running the LocalRide Android application APK on your device:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
            <li>
              <strong className="text-slate-800">Location Data:</strong> In ride-booking workflows, location permissions are necessary to detect your approximate or precise pickup location and to calculate proximity to local drivers.
            </li>
            <li>
              <strong className="text-slate-800">Storage / Installation:</strong> Downloading the APK file requires device storage access to save and open the installation package.
            </li>
            <li>
              <strong className="text-slate-800">Network Access:</strong> Required to query ride status and establish driver-passenger connections.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Third-Party Links & Services</h2>
          <p>
            This website provides links to external resources, such as GitHub repositories and releases. We do not exercise control over external platforms and advise users to review the policies of any third-party websites they visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Updates to this Policy</h2>
          <p>
            As LocalRide develops and features evolve, this privacy policy will be updated to reflect concrete data practices. Significant amendments will be highlighted in the release notes of corresponding application updates.
          </p>
        </section>

      </div>

    </div>
  );
};
