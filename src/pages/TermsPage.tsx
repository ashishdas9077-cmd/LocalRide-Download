import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Document Draft</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500">
          Last revised: November 2026 · Development & Testing Terms
        </p>
      </div>

      {/* 2. Developer Review Notice */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed space-y-1">
          <strong className="font-bold">[Developer Review Notice]:</strong>
          <p className="text-amber-800">
            This document outlines preliminary terms for testing the LocalRide Android APK and browsing this website. Prior to formal public launch or commercial fare transactions, these terms must be audited by legal counsel.
          </p>
        </div>
      </div>

      {/* 3. Terms Content */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing this website (<span className="font-mono text-xs text-slate-800">ashishdas9077-cmd.github.io/LocalRide-Download/</span>) or downloading the LocalRide Android application package (.apk), you acknowledge and agree to these preliminary terms. If you disagree with any portion of these terms, please refrain from downloading or installing the software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Development & Testing Software Stage</h2>
          <p>
            LocalRide is currently provided as experimental software in active development. Releases are made available for community testing, feedback collection, and demonstration of local ride-matching workflows.
          </p>
          <p>
            Features, user interfaces, and network services are subject to continuous modification, refinement, or temporary interruption without prior notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. APK Downloads and User Responsibility</h2>
          <p>
            When downloading and sideloading the <span className="font-mono text-xs font-semibold text-slate-900">LocalRide.apk</span> package on your Android device:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
            <li>You agree to verify that downloads originate exclusively from our official GitHub repository (<span className="font-mono text-xs text-slate-800">ashishdas9077-cmd/LocalRide-Download</span>).</li>
            <li>You assume responsibility for installing third-party APK packages on your handset.</li>
            <li>LocalRide does not provide express warranties regarding uninterrupted uptime or fault-free execution on all custom Android OS distributions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Device Compatibility Limitations</h2>
          <p>
            While LocalRide is engineered to support a broad spectrum of Android smartphones, performance and sensor accuracy (such as GPS satellite locks and cellular data handoffs) depend on individual hardware specifications, regional carrier coverage, and device battery optimization policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Passenger and Driver Discretion</h2>
          <p>
            LocalRide functions as a software interface to facilitate mutual coordination between riders and local drivers. LocalRide does not employ drivers, own transportation vehicles, or dictate independent operating schedules. Users are encouraged to exercise ordinary prudence and adhere to regional traffic and safety laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. Intellectual Property & Repository Integrity</h2>
          <p>
            The branding, design, and website code of LocalRide are governed by applicable open-source and copyright principles. Android application source code remains strictly maintained in the private repository and is not distributed alongside the public website repository.
          </p>
        </section>

      </div>

    </div>
  );
};
