'use client'

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Play, 
  Search, 
  Bell, 
  Menu, 
  Terminal, 
  Flame, 
  Lock, 
  Cpu, 
  Activity,
  User,
  MoreVertical,
  Wifi,
  Eye,
  Zap,
  Globe
} from 'lucide-react';

const SentryDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "All", "Penetration Testing", "Red Teaming", "Zero-Day Analysis", "Firewalls", "Social Eng.", "Cryptography"
  ];

  const videos = [
    {
      id: 1,
      title: "SQL Injection: Advanced Evasion Techniques",
      author: "Sentry Labs Core",
      views: "12K views",
      time: "2 hours ago",
      duration: "14:20",
      thumbnailGradient: "from-cyan-600 to-blue-900",
      icon: <Terminal className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Web Sec"
    },
    {
      id: 2,
      title: "The Blue Protocol: Incident Response",
      author: "Blue Team Lead",
      views: "8.5K views",
      time: "5 hours ago",
      duration: "45:00",
      thumbnailGradient: "from-blue-600 to-indigo-900",
      icon: <Shield className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Defense"
    },
    {
      id: 3,
      title: "Analyzing the 2025 Kernel Exploit",
      author: "White Hat Ops",
      views: "54K views",
      time: "1 day ago",
      duration: "22:15",
      thumbnailGradient: "from-cyan-500 to-sky-800",
      icon: <Cpu className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Low Level"
    },
    {
      id: 4,
      title: "Glassmorphism in UI Security Dashboards",
      author: "UX Security",
      views: "3K views",
      time: "3 days ago",
      duration: "10:05",
      thumbnailGradient: "from-blue-500 to-cyan-800",
      icon: <Activity className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Design"
    },
     {
      id: 5,
      title: "Ethical Hacking: The First 24 Hours",
      author: "Sentry Academy",
      views: "120K views",
      time: "1 week ago",
      duration: "1:04:20",
      thumbnailGradient: "from-indigo-600 to-blue-950",
      icon: <Lock className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Beginner"
    },
    {
      id: 6,
      title: "Live CTF: Capture The Flag Finals",
      author: "Sentry Live",
      views: "12K watching",
      time: "LIVE",
      duration: "LIVE",
      thumbnailGradient: "from-cyan-400 to-blue-600",
      icon: <Flame className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Event"
    },
    {
      id: 7,
      title: "Wi-Fi Pineapple: Field Operations",
      author: "NetSec Pro",
      views: "15K views",
      time: "2 days ago",
      duration: "18:30",
      thumbnailGradient: "from-sky-600 to-cyan-900",
      icon: <Wifi className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Network"
    },
    {
      id: 8,
      title: "Global Threat Map Overview",
      author: "Intel Desk",
      views: "9K views",
      time: "6 hours ago",
      duration: "12:45",
      thumbnailGradient: "from-blue-800 to-black",
      icon: <Globe className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Intel"
    }
  ];

  // Filter logic (simple)
  const displayedVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(v => Math.random() > 0.5); // Randomly filtering for demo purposes as tags don't perfectly align with categories

  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* --- AMBIENT BACKGROUND (The Blue Ember Effect) --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* The Cyan Energy (Yang) */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
        
        {/* The Blue Depth (Yin) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-800/20 rounded-full blur-[140px] animate-pulse duration-[5000ms]" />
        
        {/* Center Void/Connector */}
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      {/* --- TOP NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${scrolled ? 'bg-[#020205]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-cyan-900/20' : 'bg-transparent'}`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors lg:hidden"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-1.5 rounded-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Shield size={20} fill="white" className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Sentry<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Labs</span></span>
          </div>
        </div>

        {/* Search Bar - Big Rounded Pill */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
          <input 
            type="text" 
            placeholder="Search exploits, logs, or tutorials..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-neutral-500 focus:ring-1 focus:ring-cyan-500/20"
          />
          <Search className="absolute left-4 top-2.5 text-neutral-500 group-focus-within:text-cyan-500 transition-colors" size={18} />
          <div className="absolute right-2 top-1.5 bg-neutral-800/50 px-2 py-1 rounded-md text-xs text-neutral-400 border border-white/5 font-mono">
            ⌘ K
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 hover:border-cyan-500/50 transition-colors">
            <Zap size={14} />
            <span>Pro Access</span>
          </button>

          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-black animate-pulse"></span>
          </button>
          
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-[2px] cursor-pointer hover:scale-105 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.3)]">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User size={16} className="text-neutral-200" />
             </div>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR --- */}
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-20 hidden lg:flex flex-col items-center py-6 gap-8 border-r border-white/5 bg-[#020205]/40 backdrop-blur-md z-40">
        <SidebarIcon icon={<Flame size={24} />} active tooltip="Trending" />
        <SidebarIcon icon={<Terminal size={24} />} tooltip="Labs" />
        <SidebarIcon icon={<Activity size={24} />} tooltip="Analytics" />
        <SidebarIcon icon={<Lock size={24} />} tooltip="Vault" />
        <SidebarIcon icon={<Eye size={24} />} tooltip="Surveillance" />
        <div className="flex-1" />
        <SidebarIcon icon={<MoreVertical size={24} />} tooltip="Settings" />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black/80 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSidebarOpen(false)}>
        <div className={`absolute left-0 top-0 h-full w-64 bg-[#0a0a0a] border-r border-white/10 transform transition-transform duration-300 p-6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-8">
              <Shield size={24} className="text-cyan-500" />
              <span className="font-bold text-xl">Sentry<span className="text-cyan-500">Labs</span></span>
            </div>
            <div className="flex flex-col gap-4">
              {['Home', 'Trending', 'My Labs', 'Certifications', 'Settings'].map((item) => (
                <button key={item} className="text-left px-4 py-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition-colors">
                  {item}
                </button>
              ))}
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="pt-24 px-4 md:px-8 lg:pl-28 pb-10 max-w-[1600px] mx-auto">
        
        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide mask-fade no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`
                whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' 
                  : 'bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:border-white/20 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* HERO SECTION - Sentry Labs Banner */}
        <div className="relative w-full h-[400px] md:h-[320px] rounded-3xl overflow-hidden mb-12 group shadow-2xl shadow-cyan-900/10 border border-white/5">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-cyan-950 to-black z-0"></div>
            
            {/* Animated Grid Background (Pure CSS) */}
            <div className="absolute inset-0 z-0 opacity-20" 
                 style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* Glowing Orbs in Hero */}
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] z-0" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 z-10">
                <div className="inline-flex items-center gap-2 mb-4 self-start">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1">
                        <Zap size={12} /> New Module
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight max-w-3xl">
                    Advanced <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">Blue Teaming</span> Operations
                </h1>
                <p className="text-neutral-300 max-w-xl mb-8 text-lg md:text-xl font-light leading-relaxed">
                    Master the art of defensive cyber operations. Premium course on securing hardened enterprise networks and threat hunting.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                        <Play size={18} fill="black" /> Start Defense
                    </button>
                    <button className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300">
                        View Syllabus
                    </button>
                </div>
            </div>
        </div>

        {/* VIDEO GRID */}
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
               <Flame className="text-cyan-500 fill-cyan-500/20" /> 
               {activeCategory === 'All' ? 'Trending Vulnerabilities' : activeCategory}
            </h2>
            <button className="text-sm text-neutral-400 hover:text-white transition-colors hidden md:block">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {displayedVideos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-2xl ring-1 ring-white/5 group-hover:ring-cyan-500/50 transition-all duration-300 bg-neutral-900">
                {/* Gradient Placeholder for thumbnail */}
                <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnailGradient} opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out`} />
                
                {/* Icon Overlay (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                    {video.icon}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium border border-white/10">
                  {video.duration}
                </div>

                {/* Tag Badge */}
                <div className="absolute top-2 left-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border border-white/5 text-white/80">
                  {video.tag}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[1px]">
                   <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 transition-colors shadow-lg">
                       <Play size={24} fill="white" className="ml-1" />
                   </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex gap-3 items-start px-1">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex-shrink-0 border border-white/10 flex items-center justify-center text-xs font-bold text-neutral-500">
                   {video.author.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-snug text-neutral-100 group-hover:text-cyan-400 transition-colors line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <div className="text-sm text-neutral-400 flex flex-col">
                    <span className="hover:text-white transition-colors font-medium">{video.author}</span>
                    <span className="text-neutral-500 text-xs mt-1">{video.views} • {video.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Global CSS for scrollbar hiding if needed */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

// Subcomponent for Sidebar Icons
const SidebarIcon = ({ icon, active, tooltip }) => (
  <div className="relative group">
    <button className={`
      p-3.5 rounded-2xl transition-all duration-300 relative
      ${active 
          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
          : 'text-neutral-500 hover:bg-white/10 hover:text-white'}
    `}>
      {icon}
    </button>
    {/* Tooltip */}
    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {tooltip}
    </span>
  </div>
);

export default function App() {
  return <SentryDashboard />;
}