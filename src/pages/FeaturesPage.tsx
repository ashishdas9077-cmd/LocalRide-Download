import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Send,
  Radio,
  MessageSquare,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
  Download,
  AlertTriangle,
  ArrowRight,
  Shield,
  HelpCircle
} from 'lucide-react';

type FeatureStatus = 'available' | 'development' | 'planned';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
  statusLabel: string;
  category: 'Passenger' | 'Driver' | 'Core';
  details: string[];
}

export const FeaturesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'available' | 'development' | 'planned'>('all');

  const features: FeatureItem[] = [
    {
      id: 'passenger-discovery',
      title: 'Nearby Vehicle Discovery & Map View',
      description: 'Locate available auto-rickshaws, e-rickshaws, and local cabs around your present pickup coordinates in real time.',
      status: 'available',
      statusLabel: 'Available in Current Build',
      category: 'Passenger',
      details: [
        'Geographic radius scan for nearby vehicles',
        'Filtering by vehicle category (Auto, E-Rickshaw, Cab)',
        'Clear display of vehicle distance and availability state',
      ],
    },
    {
      id: 'ride-request',
      title: 'Ride Request Dispatch',
      description: 'Submit an instant ride pickup request with destination details directly to available local operators.',
      status: 'available',
      statusLabel: 'Available in Current Build',
      category: 'Passenger',
      details: [
        'Simple pickup and destination point selection',
        'Direct broadcast to drivers in the local zone',
        'Immediate request acknowledgment status',
      ],
    },
    {
      id: 'driver-availability',
      title: 'Driver Online / Offline Toggle',
      description: 'Enables vehicle operators to turn availability on or off with a single tap, controlling their working hours independently.',
      status: 'available',
      statusLabel: 'Available in Current Build',
      category: 'Driver',
      details: [
        'Simple status toggle without complex background overhead',
        'Reduced battery consumption during idle periods',
        'Immediate visual confirmation of active status',
      ],
    },
    {
      id: 'ride-status',
      title: 'Real-Time Ride Status Tracker',
      description: 'Track the progression of your trip from requested, accepted, driver arriving, in-transit, to completed.',
      status: 'available',
      statusLabel: 'Available in Current Build',
      category: 'Core',
      details: [
        'Step-by-step progress state indicators',
        'Estimated arrival cues',
        'Trip confirmation check',
      ],
    },
    {
      id: 'fare-negotiation',
      title: 'Direct Local Fare Agreement',
      description: 'A transparent framework allowing rider and driver to agree upon a fair mutual fare without arbitrary platform surge multipliers.',
      status: 'development',
      statusLabel: 'In Active Development',
      category: 'Core',
      details: [
        'Suggested base tariff guidelines according to local municipal norms',
        'Counter-offer affordance for unique routing or waiting periods',
        'Elimination of opaque automated algorithm surges',
      ],
    },
    {
      id: 'in-app-messaging',
      title: 'Direct Driver-Passenger Communication',
      description: 'In-app text and call triggers allowing passenger and driver to coordinate exact pickup spots and landmarks.',
      status: 'development',
      statusLabel: 'In Active Development',
      category: 'Core',
      details: [
        'Quick landmark preset buttons ("Near the temple", "Main gate")',
        'Direct device dialer launch without sharing personal data across third-party advertisers',
        'Low-bandwidth text delivery optimized for 2G/3G conditions',
      ],
    },
    {
      id: 'driver-verification',
      title: 'Community Driver Verification & Badging',
      description: 'Local neighborhood verification mechanisms to ensure driver identity, vehicle registration, and passenger confidence.',
      status: 'development',
      statusLabel: 'In Active Development',
      category: 'Driver',
      details: [
        'Document inspection framework for local permits and licenses',
        'Neighborhood operator validation check',
        'Standard vehicle condition reporting',
      ],
    },
    {
      id: 'offline-sms-booking',
      title: 'SMS / Fallback Booking for Low Connectivity',
      description: 'Planned backup protocol to allow basic ride requests via SMS when cellular data is completely unavailable or unstable.',
      status: 'planned',
      statusLabel: 'Planned Future Feature',
      category: 'Core',
      details: [
        'SMS gateway dispatch for emergency local transit requests',
        'Zero data requirement for critical first-mile connectivity',
        'Designed for rural and semi-urban transit hubs',
      ],
    },
    {
      id: 'shared-pooling',
      title: 'Shared Route Pooling for E-Rickshaws',
      description: 'Enabling fixed-route or shared-hop rides common to e-rickshaw stands to split fares between multiple passengers heading the same way.',
      status: 'planned',
      statusLabel: 'Planned Future Feature',
      category: 'Passenger',
      details: [
        'Multi-stop passenger pairing along major arterial avenues',
        'Per-seat micro-fare calculations',
        'Maximum utilization of local electric transit fleets',
      ],
    },
  ];

  const filtered = filter === 'all' ? features : features.filter((f) => f.status === filter);

  const getStatusBadge = (status: FeatureStatus) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Available in Current Build</span>
          </span>
        );
      case 'development':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3.5 h-3.5" />
            <span>In Active Development</span>
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planned Future Feature</span>
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <Layers className="w-3.5 h-3.5" />
          <span>Product Capabilities & Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          OurGo Ride Features & Development Status
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We believe in complete transparency. Below is an honest breakdown of what is currently operational in our Android APK, what is undergoing active development, and what is planned for future releases.
        </p>
      </div>

      {/* 2. Transparency Disclaimer Notice */}
      <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Honest Development Policy:</strong> OurGo Ride does not claim demo UI screens are completed backend cloud services. Check the status badge on each card below to understand current implementation levels.
          </div>
        </div>
        <Link
          to="/download"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm whitespace-nowrap shrink-0 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Get Latest APK</span>
        </Link>
      </div>

      {/* 3. Filter Controls */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Features ({features.length})
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              filter === 'available' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Available Now (4)
          </button>
          <button
            onClick={() => setFilter('development')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              filter === 'development' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            In Development (3)
          </button>
          <button
            onClick={() => setFilter('planned')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              filter === 'planned' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Planned Roadmap (2)
          </button>
        </div>
      </div>

      {/* 4. Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {item.category}
                </span>
                {getStatusBadge(item.status)}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-800 mb-2">Key Aspects:</h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>OurGo Ride Android APK</span>
              <span className="font-mono text-[11px] text-slate-400">#{item.id}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Bottom Navigation Helper */}
      <div className="text-center pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-600 mb-4">
          Interested in testing these features firsthand or verifying new releases?
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Latest APK</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
          >
            <span>Read About the Mission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};
