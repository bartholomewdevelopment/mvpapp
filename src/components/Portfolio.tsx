import React, { useState } from 'react';
import {
  Users, Calendar, MapPin, MessageSquare, CreditCard,
  ClipboardList, BarChart3, ShoppingCart, BookOpen, Globe,
  GitBranch, Search, FileDown, RotateCcw, ExternalLink,
  Sparkles, Play, Monitor, Heart, Layers, Code
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

/* ——— Browser Frame ——— */
const BrowserFrame: React.FC<{
  children: React.ReactNode;
  url?: string;
  accentColor: string;
}> = ({ children, url, accentColor }) => (
  <div
    className="rounded-xl overflow-hidden border border-white/10 transition-shadow duration-500"
    style={{ boxShadow: `0 25px 60px -12px ${accentColor}25, 0 0 80px ${accentColor}08` }}
  >
    <div className="bg-gray-900/95 px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      {url && (
        <div className="bg-gray-800/60 rounded-md px-3 py-1 text-xs text-gray-500 font-mono truncate flex-1 max-w-xs">
          {url}
        </div>
      )}
    </div>
    <div className="bg-white overflow-hidden">
      {children}
    </div>
  </div>
);

/* ——— Feature Pill ——— */
const FeaturePill: React.FC<{
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  accentColor: string;
}> = ({ icon: Icon, label, accentColor }) => (
  <div
    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border bg-white/5 text-gray-300 transition-all duration-300 hover:bg-white/10 cursor-default"
    style={{ borderColor: `${accentColor}40` }}
  >
    <Icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
    {label}
  </div>
);

/* ——— Highlight Card ——— */
const HighlightCard: React.FC<{
  title: string;
  description: string;
  accentColor: string;
}> = ({ title, description, accentColor }) => (
  <div
    className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-5 sm:p-6 hover:bg-white/[0.06] transition-all duration-300"
    style={{ borderColor: `${accentColor}15` }}
  >
    <h4 className="text-base sm:text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

/* ——— Gallery Thumbnail ——— */
const GalleryThumb: React.FC<{
  src: string;
  label: string;
  active: boolean;
  accentColor: string;
  onClick: () => void;
  overlay?: React.ReactNode;
}> = ({ src, label, active, accentColor, onClick, overlay }) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
      active
        ? 'scale-105'
        : 'border-white/10 opacity-60 hover:opacity-100'
    }`}
    style={active ? { borderColor: accentColor, boxShadow: `0 0 20px ${accentColor}30` } : {}}
  >
    <div className="w-20 h-14 sm:w-24 sm:h-16 relative">
      <img src={src} alt={label} loading="lazy" className="w-full h-full object-cover object-top" />
      {overlay}
    </div>
    <div className={`text-[10px] font-medium text-center py-0.5 px-1 truncate ${
      active ? 'bg-black/20' : 'text-gray-500 bg-gray-800/50'
    }`} style={active ? { color: accentColor } : {}}>
      {label}
    </div>
  </button>
);

/* ——— Client website data ——— */
const clientProjects = [
  {
    company: 'Influence on Purpose',
    description: 'Executive coaching platform featuring C-Suite leadership development and company culture transformation resources.',
    image: '/images/testimonials/influence-screenshot.png',
    website: 'https://influenceonpurpose.com',
    logo: '/images/testimonials/influence-logo.png',
  },
  {
    company: 'Homecoming Ranch',
    description: 'Ranch website with guest information, event booking, and operational details. Built for sustainable ranch operations.',
    image: '/images/testimonials/homecoming-screenshot.png',
    website: 'https://homecomingranch.com',
    logo: '/images/testimonials/homecoming-logo.png',
  },
  {
    company: 'Hollow Log Studios',
    description: 'Creative studio portfolio and booking platform showcasing artistic services. Features project galleries and client booking.',
    image: '/images/testimonials/hollowlog-screenshot.png',
    website: 'https://hollowlogstudios.com',
    logo: '/images/testimonials/hollowlog-logo.webp',
  },
];

/* ═══════════════════════════════════════════
   PORTFOLIO — Main Component
   ═══════════════════════════════════════════ */
const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'clients'>('products');
  const [overtimeShowVideo, setOvertimeShowVideo] = useState(false);
  const [steadstackActive, setSteadstackActive] = useState(0);
  const [genealogyActive, setGenealogyActive] = useState(0);

  const steadstackImages = [
    { src: '/images/portfolio/steadstack-homepage.png', label: 'Homepage' },
    { src: '/images/portfolio/steadstack-accounting.png', label: 'Accounting' },
    { src: '/images/portfolio/steadstack-assets.png', label: 'Assets' },
    { src: '/images/portfolio/steadstack-land-management.png', label: 'Land Mgmt' },
  ];

  const genealogyImages = [
    { src: '/images/portfolio/genealogy-family-tree.png', label: 'Family Tree' },
    { src: '/images/portfolio/genealogy-profile.png', label: 'Profile' },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* ——— Background decoration ——— */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════ Section Header ═══════════ */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd6a62] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd6a62]" />
            </span>
            <span className="text-sm font-medium text-gray-300">Shipped Software</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-[#fd6a62] via-[#fc5951] to-[#f97316] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]" />
            <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]" />
            <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent" />
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real software we've designed, built, and shipped
          </p>

          {/* ——— Tab Toggle ——— */}
          <div className="inline-flex bg-white/[0.06] backdrop-blur-md rounded-full p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'products'
                  ? 'bg-gradient-to-r from-[#fd6a62] to-[#fc5951] text-white shadow-lg shadow-[#fd6a62]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              Our Software
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-gradient-to-r from-[#fd6a62] to-[#fc5951] text-white shadow-lg shadow-[#fd6a62]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              Client Websites
            </button>
          </div>
        </AnimatedSection>

        {/* ═══════════════════════════════════════
            TAB: IN-HOUSE PRODUCTS
            ═══════════════════════════════════════ */}
        {activeTab === 'products' && (
          <div>
            {/* PROJECT 01 — OVERTIME */}
            <AnimatedSection animation="fade-up" className="mb-12 sm:mb-16 lg:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="text-[100px] sm:text-[140px] lg:text-[180px] font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(99,102,241,0.06)' }}
                  >
                    01
                  </div>
                  <div className="-mt-[50px] sm:-mt-[70px] lg:-mt-[90px]">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                      Overtime Athletic Management
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-indigo-400 mb-5">
                      A full athletic management platform
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                      For directors, coaches, trainers, gym owners, and league admins to handle
                      registration, scheduling, communication, and payments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <FeaturePill icon={Users} label="Registration & Teams" accentColor="#6366f1" />
                      <FeaturePill icon={Calendar} label="Shared Calendars" accentColor="#6366f1" />
                      <FeaturePill icon={MapPin} label="Venue Reservations" accentColor="#6366f1" />
                      <FeaturePill icon={MessageSquare} label="Safe Chat" accentColor="#6366f1" />
                      <FeaturePill icon={CreditCard} label="Payments via Stripe" accentColor="#6366f1" />
                    </div>
                    <a
                      href="https://overtimeam.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                    >
                      <Sparkles className="w-4 h-4" />
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="order-1 lg:order-2 flex flex-col gap-3">
                  {overtimeShowVideo ? (
                    <BrowserFrame url="youtube.com" accentColor="#6366f1">
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/2lvuLF_bx2A?si=DA65p7SoP8X-MHtk"
                          title="Overtime Athletic Management — Product Demo"
                          style={{ border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </BrowserFrame>
                  ) : (
                    <BrowserFrame url="overtimeam.com" accentColor="#6366f1">
                      <img
                        src="/images/portfolio/overtime.png"
                        alt="Overtime Athletic Management homepage"
                        className="w-full h-auto block"
                      />
                    </BrowserFrame>
                  )}
                  <div className="flex gap-2">
                    <GalleryThumb src="/images/portfolio/overtime.png" label="Homepage" active={!overtimeShowVideo} accentColor="#6366f1" onClick={() => setOvertimeShowVideo(false)} />
                    <GalleryThumb
                      src="/images/portfolio/overtime.png" label="Demo Video" active={overtimeShowVideo} accentColor="#6366f1" onClick={() => setOvertimeShowVideo(true)}
                      overlay={<div className="absolute inset-0 bg-black/50 flex items-center justify-center"><Play className="w-5 h-5 text-white fill-white" /></div>}
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Divider */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            </div>

            {/* PROJECT 02 — STEADSTACK */}
            <AnimatedSection animation="fade-up" className="mb-12 sm:mb-16 lg:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
                <div className="order-1 flex flex-col gap-3">
                  <BrowserFrame url="steadstack.com" accentColor="#10b981">
                    <img
                      key={steadstackImages[steadstackActive].src}
                      src={steadstackImages[steadstackActive].src}
                      alt={`SteadStack — ${steadstackImages[steadstackActive].label}`}
                      className="w-full h-auto block portfolio-image-enter"
                      loading="lazy"
                    />
                  </BrowserFrame>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {steadstackImages.map((img, i) => (
                      <GalleryThumb key={i} src={img.src} label={img.label} active={steadstackActive === i} accentColor="#10b981" onClick={() => setSteadstackActive(i)} />
                    ))}
                  </div>
                </div>

                <div className="order-2">
                  <div className="text-[100px] sm:text-[140px] lg:text-[180px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(16,185,129,0.06)' }}>02</div>
                  <div className="-mt-[50px] sm:-mt-[70px] lg:-mt-[90px]">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">SteadStack</h3>
                    <p className="text-lg sm:text-xl font-semibold text-emerald-400 mb-5">The operating system for modern farms and ranches</p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                      SteadStack connects tasks, inventory, purchasing, and accounting into one living system. Log the work once and stay audit-ready without spreadsheets. Free for tiny homesteads, scaling up to high-capacity ranch operations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <FeaturePill icon={ClipboardList} label="Event Tracking" accentColor="#10b981" />
                      <FeaturePill icon={BarChart3} label="Tasks & Runlists" accentColor="#10b981" />
                      <FeaturePill icon={ShoppingCart} label="Purchasing Pipeline" accentColor="#10b981" />
                      <FeaturePill icon={BookOpen} label="Double-Entry Accounting" accentColor="#10b981" />
                      <FeaturePill icon={Globe} label="Multi-Site Management" accentColor="#10b981" />
                    </div>
                    <a href="https://steadstack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300">
                      <Sparkles className="w-4 h-4" />View Live Site<ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <AnimatedSection animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <HighlightCard title="One Workflow. Everything Stays Synced." description="Plan the work with templates and runlists, record events like feedings, treatments, and harvests — then inventory and the double-entry ledger update automatically. One entry, no duplicate data, full audit trail." accentColor="#10b981" />
                  <HighlightCard title="Double-Entry Accounting, Built for Farms" description="Real double-entry accounting — not a bolt-on. Every farm event posts balanced debits and credits with a full audit trail. Chart of accounts, A/R, A/P, bank reconciliation, and check writing built in." accentColor="#10b981" />
                  <HighlightCard title="Land, Structures, Areas & Bins" description="Map sites and tracts, then organize every barn, room, and storage bin. Interactive maps color-code parcels, fields, pastures, and infrastructure boundaries." accentColor="#10b981" />
                </div>
              </AnimatedSection>
            </AnimatedSection>

            {/* Divider */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>

            {/* PROJECT 03 — GENEALOGY TRACKER */}
            <AnimatedSection animation="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
                <div className="order-2 lg:order-1">
                  <div className="text-[100px] sm:text-[140px] lg:text-[180px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(245,158,11,0.06)' }}>03</div>
                  <div className="-mt-[50px] sm:-mt-[70px] lg:-mt-[90px]">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Genealogy Tracker</h3>
                    <p className="text-lg sm:text-xl font-semibold text-amber-400 mb-5">Document and explore your family history</p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                      A full-featured genealogy application with individual profiles, family units, a navigatable family tree, and research tools. Upload docs and photos to each life event, import/export GEDCOM files, and use the Research bin to find end-of-the-line ancestors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <FeaturePill icon={Users} label="People & Profiles" accentColor="#f59e0b" />
                      <FeaturePill icon={Heart} label="Families as Units" accentColor="#f59e0b" />
                      <FeaturePill icon={GitBranch} label="Full Family Tree" accentColor="#f59e0b" />
                      <FeaturePill icon={Search} label="Research Bin" accentColor="#f59e0b" />
                      <FeaturePill icon={FileDown} label="GEDCOM Import/Export" accentColor="#f59e0b" />
                      <FeaturePill icon={RotateCcw} label="Undo Imports" accentColor="#f59e0b" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2.5 text-amber-300/90 text-sm font-medium">
                      <Monitor className="w-4 h-4" />
                      Local Desktop Application — Not Yet Online
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 flex flex-col gap-3">
                  <BrowserFrame url="genealogy-tracker" accentColor="#f59e0b">
                    <img
                      key={genealogyImages[genealogyActive].src}
                      src={genealogyImages[genealogyActive].src}
                      alt={`Genealogy Tracker — ${genealogyImages[genealogyActive].label}`}
                      className="w-full h-auto block portfolio-image-enter"
                      loading="lazy"
                    />
                  </BrowserFrame>
                  <div className="flex gap-2">
                    {genealogyImages.map((img, i) => (
                      <GalleryThumb key={i} src={img.src} label={img.label} active={genealogyActive === i} accentColor="#f59e0b" onClick={() => setGenealogyActive(i)} />
                    ))}
                  </div>
                </div>
              </div>

              <AnimatedSection animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <HighlightCard title="Rich Individual Profiles" description="Every person gets detailed vital records for birth, baptism, marriage, death, and burial, plus a full relationships section. Upload documents and photos to each life event to keep sources organized." accentColor="#f59e0b" />
                  <HighlightCard title="Navigatable Pedigree Chart" description="A full ancestor tree rendered from any root person, color-coded by gender and spanning as many generations as your data holds. The Research section identifies end-of-the-line ancestors and puts them in a bin so you can systematically find missing links." accentColor="#f59e0b" />
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        )}

        {/* ═══════════════════════════════════════
            TAB: CLIENT WEBSITES
            ═══════════════════════════════════════ */}
        {activeTab === 'clients' && (
          <div>
            <AnimatedSection animation="stagger">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {clientProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#fd6a62]/15 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Browser frame screenshot */}
                    <div className="p-4 sm:p-5 pb-0">
                      <div className="rounded-lg overflow-hidden border border-white/5">
                        <div className="bg-gray-900/95 px-3 py-2 flex items-center gap-2 border-b border-white/5">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                          </div>
                          <div className="bg-gray-800/60 rounded px-2 py-0.5 text-[10px] text-gray-500 font-mono truncate">
                            {project.website.replace('https://', '')}
                          </div>
                        </div>
                        <div className="bg-white aspect-video overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.company}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        {project.logo && (
                          <img src={project.logo} alt={`${project.company} logo`} loading="lazy" className="w-8 h-8 object-contain rounded flex-shrink-0" />
                        )}
                        <h4 className="text-lg font-bold text-white">{project.company}</h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-[#fd6a62] to-[#fc5951] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#fd6a62]/30 hover:scale-[1.02] transition-all duration-300"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        View Live Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
