import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, UserCheck, ShieldCheck, Compass, Smartphone, Clock, RefreshCw } from 'lucide-react';
import {
  HeroIllustration,
  AutoRickshawIllustration,
  ERickshawIllustration,
  TaxiIllustration,
  OtherTransportIllustration,
  StepOneIllustration,
  StepTwoIllustration,
  StepThreeIllustration,
} from '../components/CustomIllustrations.tsx';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Android APK Testing Release</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Your Local Ride, <br />
              <span className="text-blue-600">Made Simpler.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              LocalRide connects passengers with neighborhood auto-rickshaws, e-rickshaws, and local drivers. Built specifically for everyday local journeys without corporate middleman surcharges.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </Link>
              
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 text-xs text-slate-500 flex items-center gap-3">
              <span>Android compatible</span>
              <span aria-hidden="true">·</span>
              <span>Direct APK install</span>
              <span aria-hidden="true">·</span>
              <span>Public release tracking</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none">
              <HeroIllustration className="w-full h-auto drop-shadow-sm" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Passenger & Driver Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Designed for Both Sides of Every Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            LocalRide bridges the gap between daily commuters and neighborhood vehicle operators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passenger Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Passengers</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Find and request available local rides right from your neighborhood stand or doorstep. Avoid waiting on street corners or haggling under uncertain conditions.
              </p>
              
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>View nearby auto-rickshaws, e-rickshaws, and taxis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>Submit simple ride pickup and drop requests</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>Direct communication with the assigned driver</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Passenger experience in active testing</span>
              <Link to="/features" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                Learn more →
              </Link>
            </div>
          </div>

          {/* Driver Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Drivers</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Make your vehicle available to passengers nearby without paying heavy commission fees to distant intermediaries. Keep your local autonomy.
              </p>
              
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0"></span>
                  <span>Toggle availability status when ready to accept rides</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0"></span>
                  <span>Receive direct booking alerts from nearby passengers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0"></span>
                  <span>Direct fare settlements with riders</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Driver verification module in development</span>
              <Link to="/features" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                Driver roadmap →
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Notice: Features are subject to current Android APK build release stage and local area availability.
        </p>
      </section>

      {/* 3. How LocalRide Works */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How LocalRide Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A straightforward three-step process built for speed and clarity on any Android device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 text-center flex flex-col items-center">
              <div className="mb-4">
                <StepOneIllustration className="w-20 h-20" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Step 1</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Open LocalRide</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Launch the application on your Android phone and select whether you are requesting a ride or offering local transport.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 text-center flex flex-col items-center">
              <div className="mb-4">
                <StepTwoIllustration className="w-20 h-20" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Step 2</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Explore & Request</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Check available vehicles around your pickup location, or as a driver, receive incoming ride requests in your vicinity.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 text-center flex flex-col items-center">
              <div className="mb-4">
                <StepThreeIllustration className="w-20 h-20" />
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Step 3</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Connect & Ride</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Confirm ride terms, connect directly with each other, and complete your local journey with clear mutual understanding.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Vehicle Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Supported Vehicle Categories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Tailored to real neighborhood transportation modes rather than one-size-fits-all cars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Auto-rickshaw */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-blue-300 transition-all">
            <AutoRickshawIllustration className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Auto-rickshaw</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The backbone of town and city transit. Quick, accessible, and maneuverable in congested streets.
              </p>
            </div>
          </div>

          {/* E-rickshaw */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-green-300 transition-all">
            <ERickshawIllustration className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-1">E-rickshaw</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eco-friendly electric transport ideal for short first-mile and last-mile neighborhood connections.
              </p>
            </div>
          </div>

          {/* Taxi */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-amber-300 transition-all">
            <TaxiIllustration className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Local Taxi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comfortable 4-wheeler rides for longer suburban trips, luggage transport, or family commutes.
              </p>
            </div>
          </div>

          {/* Other / Community */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-all">
            <OtherTransportIllustration className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Other Local Modes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shared shuttles and region-specific transport variants as supported in pilot areas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
          <p className="text-xs text-blue-900">
            <strong>Availability Note:</strong> Specific vehicle categories displayed in the app depend on your geographical service area, local licensing, and ongoing app version development.
          </p>
        </div>
      </section>

      {/* 5. Why LocalRide */}
      <section className="bg-white py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why LocalRide?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Built with honest principles focused squarely on everyday community needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Simple Experience</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No bloated super-app clutter. Just the essentials needed to find a ride or accept a passenger.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Local Transport Focus</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored specifically to auto-rickshaws and neighborhood transit modes commonly ignored by global apps.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Lightweight & Fast</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engineered to operate smoothly on affordable Android handsets and modest cellular networks.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Ongoing Development</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent evolution with frequent APK updates directly published on GitHub for community testing.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Download CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Try LocalRide?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed">
              Download the latest Android APK directly to your device and test the upcoming wave of local transportation.
            </p>
            <div>
              <Link
                to="/download"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl shadow-md transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </Link>
            </div>
            <p className="text-xs text-blue-200">
              Free APK download · No registration required to explore releases
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
