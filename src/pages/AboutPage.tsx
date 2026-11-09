import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Users, HeartHandshake, Download, ArrowRight, ShieldCheck, Code } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About LocalRide
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          A focused project addressing everyday local mobility needs through open Android software and direct community connection.
        </p>
      </div>

      {/* 2. What LocalRide Is */}
      <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">What is LocalRide?</h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          LocalRide is an Android-based ride-booking application built to make neighborhood trips convenient, fair, and directly accessible. While global ride-hailing services focus predominantly on premium city cars and take substantial commissions, LocalRide is tailored specifically around local transport: auto-rickshaws, e-rickshaws, and community taxi drivers.
        </p>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Our goal is not to build a bloated commercial monopoly, but to provide a clean, dependable digital tool that passengers and drivers can use directly in their towns and neighborhoods.
        </p>
      </section>

      {/* 3. Why It Is Being Developed */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900">Why LocalRide is Being Developed</h2>
          <p className="text-sm text-slate-600 mt-1">
            Addressing real friction points observed in daily commuter transit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Connecting Commuters & Stands</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In many localities, passengers walk long distances to find a rickshaw or wait in the rain, while drivers sit waiting at stands without knowing someone around the corner needs a ride. LocalRide bridges this simple information gap.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Dignity for Local Drivers</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Neighborhood drivers work tirelessly in difficult weather. Traditional platforms often take 20% to 30% of their hard-earned income. LocalRide explores direct connections where the driver keeps the fruit of their labor.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Development Principles & Transparency */}
      <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Our Development Principles</h2>
            <p className="text-xs text-slate-500">Honest progress, iteration by iteration</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900">Open Public Release Distribution:</strong> Every working APK build is published transparently on GitHub Releases. Anyone can download the app, inspect version logs, and test functionality.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900">Lightweight Architecture:</strong> The app is engineered to run reliably on everyday Android phones without consuming excessive battery, RAM, or mobile data.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></span>
            <div>
              <strong className="text-slate-900">Grounded in Reality:</strong> We do not over-promise or market non-existent features. We test each building block step by step with actual community feedback.
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct CTA */}
      <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-blue-950">Help Test LocalRide</h3>
          <p className="text-xs sm:text-sm text-blue-800">
            Download the latest APK and test the features on your Android phone.
          </p>
        </div>
        <Link
          to="/download"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          <span>Go to Downloads</span>
        </Link>
      </div>

    </div>
  );
};
