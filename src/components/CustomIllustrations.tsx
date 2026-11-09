import React from 'react';

// Hero illustration: Clean smartphone with LocalRide map, route line, local transport pin & friendly community badge
export const HeroIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="LocalRide App Interface Illustration">
    {/* Soft subtle radial ambient backdrop */}
    <circle cx="320" cy="240" r="210" fill="#EFF6FF" />
    <circle cx="480" cy="140" r="70" fill="#DBEAFE" fillOpacity="0.6" />
    
    {/* Road & Map grid lines */}
    <path d="M60 380 Q 220 320 320 350 T 580 300" stroke="#BFDBFE" strokeWidth="8" strokeLinecap="round" strokeDasharray="12 12" />
    <path d="M100 240 Q 260 210 380 260 T 560 220" stroke="#DBEAFE" strokeWidth="4" strokeLinecap="round" />
    
    {/* Smartphone Frame */}
    <g filter="drop-shadow(0 20px 25px rgba(37, 99, 235, 0.12))">
      {/* Phone outer body */}
      <rect x="200" y="50" width="240" height="400" rx="36" fill="#0F172A" />
      {/* Phone screen */}
      <rect x="210" y="60" width="220" height="380" rx="28" fill="#FFFFFF" />
      
      {/* Speaker / Camera pill notch */}
      <rect x="270" y="68" width="80" height="12" rx="6" fill="#1E293B" />
      
      {/* In-app Map Surface */}
      <rect x="218" y="88" width="204" height="210" rx="16" fill="#F0F7FF" />
      
      {/* App Map Road paths */}
      <path d="M220 180 C 260 170 300 210 360 170 L 420 180" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" />
      <path d="M280 90 L 290 295" stroke="#E2E8F0" strokeWidth="12" strokeLinecap="round" />
      <path d="M350 90 L 340 295" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" />
      
      {/* Active Route Highlight */}
      <path d="M260 230 C 285 230 290 180 340 160" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
      <circle cx="260" cy="230" r="5" fill="#2563EB" />
      <circle cx="340" cy="160" r="6" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2" />
      
      {/* Vehicle Marker Pin in Map */}
      <g transform="translate(328, 130)">
        <path d="M12 0 C5.37 0 0 5.37 0 12 C0 21 12 30 12 30 C12 30 24 21 24 12 C24 5.37 18.63 0 12 0 Z" fill="#2563EB" />
        <circle cx="12" cy="10" r="5" fill="#FFFFFF" />
      </g>
      
      {/* App In-Screen Bottom Ride Card */}
      <g transform="translate(222, 310)">
        <rect width="196" height="114" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        
        {/* Ride Selection Mini Category */}
        <rect x="12" y="12" width="50" height="34" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
        <circle cx="26" cy="24" r="6" fill="#2563EB" />
        <text x="36" y="27" fill="#1E40AF" fontSize="9" fontWeight="700">Auto</text>
        
        <rect x="70" y="12" width="52" height="34" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="82" cy="24" r="6" fill="#64748B" />
        <text x="92" y="27" fill="#475569" fontSize="9" fontWeight="600">E-Rick</text>

        <rect x="130" y="12" width="54" height="34" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="143" cy="24" r="6" fill="#64748B" />
        <text x="153" y="27" fill="#475569" fontSize="9" fontWeight="600">Cab</text>

        {/* Action Button */}
        <rect x="12" y="58" width="172" height="28" rx="8" fill="#2563EB" />
        <text x="56" y="76" fill="#FFFFFF" fontSize="11" fontWeight="700">Request Local Ride</text>
        <text x="12" y="100" fill="#64748B" fontSize="9">Nearby drivers active</text>
      </g>
    </g>

    {/* Floating Companion Badge 1: Direct Passenger-Driver Connection */}
    <g transform="translate(420, 110)" filter="drop-shadow(0 10px 15px rgba(15, 23, 42, 0.08))">
      <rect width="170" height="64" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="14" y="16" width="32" height="32" rx="16" fill="#EFF6FF" />
      <circle cx="30" cy="28" r="6" fill="#2563EB" />
      <path d="M22 42 C22 37 26 36 30 36 C34 36 38 37 38 42" fill="#2563EB" />
      <text x="54" y="32" fill="#0F172A" fontSize="12" fontWeight="700">Fair Local Fares</text>
      <text x="54" y="48" fill="#64748B" fontSize="10">Direct to drivers</text>
    </g>

    {/* Floating Companion Badge 2: Open APK Release */}
    <g transform="translate(60, 270)" filter="drop-shadow(0 10px 15px rgba(15, 23, 42, 0.08))">
      <rect width="160" height="64" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="14" y="16" width="32" height="32" rx="16" fill="#EFF6FF" />
      <path d="M30 22 L30 36 M30 36 L25 31 M30 36 L35 31 M23 40 L37 40" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="54" y="32" fill="#0F172A" fontSize="12" fontWeight="700">Android APK</text>
      <text x="54" y="48" fill="#64748B" fontSize="10">Direct downloads</text>
    </g>
  </svg>
);

// Auto-Rickshaw SVG Illustration
export const AutoRickshawIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Auto Rickshaw Illustration">
    <rect width="240" height="180" rx="16" fill="#F0F7FF" />
    <g transform="translate(25, 25)">
      {/* Ground shadow */}
      <ellipse cx="95" cy="125" rx="80" ry="8" fill="#E2E8F0" />
      
      {/* Main Auto Body */}
      <path d="M35 105 L35 65 Q40 40 75 35 L125 35 Q145 35 155 55 L165 85 L165 105 Z" fill="#2563EB" />
      
      {/* Cabin Roof & Yellow/White Canopy accent */}
      <path d="M45 42 Q80 32 130 32 Q150 32 155 52 L145 52 Q125 38 75 42 Z" fill="#93C5FD" />
      
      {/* Passenger Opening */}
      <rect x="50" y="55" width="45" height="42" rx="6" fill="#DBEAFE" />
      <rect x="62" y="65" width="22" height="24" rx="4" fill="#1E40AF" />
      
      {/* Windshield */}
      <path d="M122 45 L148 58 L142 82 L115 82 Z" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      
      {/* Driver seat area */}
      <rect x="108" y="78" width="16" height="24" rx="3" fill="#1E293B" />
      {/* Handlebar */}
      <path d="M135 78 L142 74" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Front Wheel */}
      <circle cx="150" cy="115" r="18" fill="#0F172A" />
      <circle cx="150" cy="115" r="10" fill="#E2E8F0" />
      <circle cx="150" cy="115" r="4" fill="#2563EB" />

      {/* Rear Wheel */}
      <circle cx="55" cy="115" r="18" fill="#0F172A" />
      <circle cx="55" cy="115" r="10" fill="#E2E8F0" />
      <circle cx="55" cy="115" r="4" fill="#2563EB" />

      {/* Mudguards */}
      <path d="M132 110 Q150 96 168 110" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M37 110 Q55 96 73 110" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
      
      {/* Headlight */}
      <circle cx="166" cy="88" r="6" fill="#FDE047" />
    </g>
  </svg>
);

// E-Rickshaw SVG Illustration
export const ERickshawIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="E-Rickshaw Illustration">
    <rect width="240" height="180" rx="16" fill="#F0FDF4" />
    <g transform="translate(25, 25)">
      {/* Ground shadow */}
      <ellipse cx="95" cy="125" rx="80" ry="8" fill="#DCFCE7" />

      {/* Frame structure */}
      <path d="M30 105 L30 45 L140 45 L160 85 L160 105 Z" fill="#16A34A" />
      
      {/* Roof Canopy */}
      <rect x="25" y="38" width="125" height="10" rx="4" fill="#22C55E" />
      
      {/* Passenger Window Bay (open air electric rickshaw) */}
      <rect x="38" y="52" width="65" height="45" rx="4" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
      <rect x="46" y="65" width="20" height="24" rx="4" fill="#15803D" />
      <rect x="74" y="65" width="20" height="24" rx="4" fill="#15803D" />

      {/* Driver Cabin */}
      <path d="M115 52 L148 52 L154 82 L115 82 Z" fill="#DCFCE7" />

      {/* Eco / Electric Battery indicator icon on body */}
      <path d="M78 103 L84 97 L81 97 L86 91 L80 91" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Front Wheel */}
      <circle cx="150" cy="115" r="17" fill="#0F172A" />
      <circle cx="150" cy="115" r="9" fill="#E2E8F0" />
      <circle cx="150" cy="115" r="4" fill="#16A34A" />

      {/* Rear Wheel */}
      <circle cx="50" cy="115" r="17" fill="#0F172A" />
      <circle cx="50" cy="115" r="9" fill="#E2E8F0" />
      <circle cx="50" cy="115" r="4" fill="#16A34A" />

      {/* Green energy badge */}
      <rect x="105" y="94" width="30" height="12" rx="4" fill="#DCFCE7" />
      <text x="110" y="103" fill="#15803D" fontSize="8" fontWeight="700">EV</text>
    </g>
  </svg>
);

// Taxi / Cab SVG Illustration
export const TaxiIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Taxi / Cab Illustration">
    <rect width="240" height="180" rx="16" fill="#FFFBEB" />
    <g transform="translate(25, 25)">
      {/* Ground shadow */}
      <ellipse cx="95" cy="125" rx="85" ry="8" fill="#FEF3C7" />

      {/* Taxi Roof Sign */}
      <rect x="80" y="32" width="35" height="12" rx="3" fill="#F59E0B" />
      <text x="86" y="41" fill="#FFFFFF" fontSize="8" fontWeight="800">TAXI</text>

      {/* Car Body */}
      <path d="M25 90 Q30 75 50 72 L72 52 Q78 46 95 46 L130 46 Q142 46 150 56 L165 74 L175 78 Q182 85 182 98 L182 110 L25 110 Z" fill="#3B82F6" />
      
      {/* Car Windows */}
      <path d="M74 54 L94 54 L94 72 L55 72 Z" fill="#EFF6FF" />
      <path d="M100 54 L128 54 L144 72 L100 72 Z" fill="#EFF6FF" />

      {/* Chequered trim stripe */}
      <rect x="25" y="86" width="157" height="8" fill="#1E40AF" />

      {/* Headlight */}
      <rect x="175" y="85" width="7" height="9" rx="2" fill="#FDE047" />

      {/* Wheels */}
      <circle cx="58" cy="115" r="18" fill="#0F172A" />
      <circle cx="58" cy="115" r="9" fill="#E2E8F0" />
      <circle cx="58" cy="115" r="4" fill="#3B82F6" />

      <circle cx="150" cy="115" r="18" fill="#0F172A" />
      <circle cx="150" cy="115" r="9" fill="#E2E8F0" />
      <circle cx="150" cy="115" r="4" fill="#3B82F6" />
    </g>
  </svg>
);

// Other / Community Transport Illustration
export const OtherTransportIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Other Local Transport Illustration">
    <rect width="240" height="180" rx="16" fill="#F8FAFC" />
    <g transform="translate(25, 25)">
      <ellipse cx="95" cy="125" rx="80" ry="8" fill="#E2E8F0" />
      
      {/* Van / Shared shuttle mini contour */}
      <rect x="30" y="50" width="135" height="58" rx="14" fill="#64748B" />
      <rect x="42" y="58" width="30" height="24" rx="4" fill="#F1F5F9" />
      <rect x="80" y="58" width="30" height="24" rx="4" fill="#F1F5F9" />
      <rect x="118" y="58" width="36" height="24" rx="4" fill="#F1F5F9" />

      {/* Wheels */}
      <circle cx="60" cy="115" r="16" fill="#0F172A" />
      <circle cx="60" cy="115" r="8" fill="#CBD5E1" />
      <circle cx="140" cy="115" r="16" fill="#0F172A" />
      <circle cx="140" cy="115" r="8" fill="#CBD5E1" />

      {/* Tag */}
      <rect x="62" y="90" width="66" height="14" rx="4" fill="#475569" />
      <text x="68" y="100" fill="#F8FAFC" fontSize="8" fontWeight="600">Local Shuttle</text>
    </g>
  </svg>
);

// How It Works Step 1 Illustration: Open LocalRide
export const StepOneIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Step 1 Illustration">
    <rect width="96" height="96" rx="20" fill="#EFF6FF" />
    {/* Phone Outline */}
    <rect x="30" y="16" width="36" height="64" rx="8" fill="#0F172A" />
    <rect x="33" y="20" width="30" height="56" rx="5" fill="#FFFFFF" />
    {/* Notch */}
    <rect x="42" y="22" width="12" height="3" rx="1.5" fill="#1E293B" />
    {/* App Icon in phone center */}
    <circle cx="48" cy="48" r="10" fill="#2563EB" />
    <path d="M48 42 C45 42 43 44.5 43 47 C43 51 48 55 48 55 C48 55 53 51 53 47 C53 44.5 51 42 48 42 Z" fill="#FFFFFF" />
    <circle cx="48" cy="46" r="2" fill="#2563EB" />
  </svg>
);

// How It Works Step 2 Illustration: Explore & Request
export const StepTwoIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Step 2 Illustration">
    <rect width="96" height="96" rx="20" fill="#EFF6FF" />
    {/* Radar / Nearby Discovery Rings */}
    <circle cx="48" cy="48" r="32" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="48" cy="48" r="20" stroke="#93C5FD" strokeWidth="2" />
    <circle cx="48" cy="48" r="8" fill="#2563EB" />
    {/* Nearby pin indicators */}
    <circle cx="32" cy="36" r="5" fill="#1D4ED8" />
    <circle cx="64" cy="42" r="4" fill="#3B82F6" />
    <circle cx="42" cy="68" r="4.5" fill="#10B981" />
  </svg>
);

// How It Works Step 3 Illustration: Connect & Ride
export const StepThreeIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Step 3 Illustration">
    <rect width="96" height="96" rx="20" fill="#EFF6FF" />
    {/* Handshake / Connection Node */}
    <circle cx="34" cy="48" r="14" fill="#DBEAFE" />
    <circle cx="62" cy="48" r="14" fill="#DBEAFE" />
    <path d="M34 48 L62 48" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
    {/* Checkmark badge */}
    <circle cx="48" cy="48" r="11" fill="#10B981" />
    <path d="M43 48 L46.5 51.5 L53 45" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Avatars */}
    <circle cx="34" cy="45" r="4" fill="#1E40AF" />
    <circle cx="62" cy="45" r="4" fill="#1E40AF" />
  </svg>
);
