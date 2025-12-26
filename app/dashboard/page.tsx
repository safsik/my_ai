'use client'

import React, { useState, useEffect, useRef } from 'react';
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
  Globe,
  Bot,
  X,
  Send,
  MessageSquare,
  Sparkles,
  Database, // Added for Big Data
  Binary    // Added for Quantum/Code
} from 'lucide-react';

const SentryDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false); // State for AI Panel
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
    "All", "Quantum Sec", "Big Data Intel", "Penetration Testing", "Red Teaming", "Zero-Day Analysis", "Cryptography"
  ];

  const videos = [
    {
      id: 101,
      title: "Post-Quantum Cryptography: Surviving Shor's Algorithm",
      author: "Quantum Ops",
      views: "2.1M views",
      time: "1 hour ago",
      duration: "45:12",
      thumbnailGradient: "from-indigo-900 to-purple-900",
      icon: <Cpu className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Quantum"
    },
    {
      id: 102,
      title: "Ingesting 50PB of Threat Logs: Big Data Architecture",
      author: "Data Eng. Lead",
      views: "890K views",
      time: "3 hours ago",
      duration: "28:45",
      thumbnailGradient: "from-emerald-900 to-cyan-900",
      icon: <Database className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Big Data"
    },
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
      icon: <Binary className="text-white/90 drop-shadow-md" size={32} />,
      tag: "Low Level"
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
    : videos.filter(v => Math.random() > 0.5); 

  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden relative">
      
      {/* --- AMBIENT BACKGROUND (The Blue Ember Effect) --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-800/20 rounded-full blur-[140px] animate-pulse duration-[5000ms]" />
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
            placeholder="Search quantum logs, hash threats, or tutorials..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-neutral-500 focus:ring-1 focus:ring-cyan-500/20"
          />
          <Search className="absolute left-4 top-2.5 text-neutral-500 group-focus-within:text-cyan-500 transition-colors" size={18} />
          <div className="absolute right-2 top-1.5 bg-neutral-800/50 px-2 py-1 rounded-md text-xs text-neutral-400 border border-white/5 font-mono">
            ⌘ K
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsAiOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-pointer"
          >
            <Sparkles size={14} />
            <span>Ask Q-Core</span>
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
      <aside className="fixed left-0 top-16 bottom-0 w-20 hidden lg:flex flex-col items-center py-6 gap-8 border-r border-white/5 bg-[#020205]/40 backdrop-blur-md z-40">
        <SidebarIcon icon={<Flame size={24} />} active tooltip="Trending" />
        <SidebarIcon icon={<Database size={24} />} tooltip="Data Lakes" />
        <SidebarIcon icon={<Cpu size={24} />} tooltip="Quantum Vault" />
        <SidebarIcon icon={<Terminal size={24} />} tooltip="Labs" />
        <SidebarIcon icon={<Eye size={24} />} tooltip="Surveillance" />
        <div className="flex-1" />
        <SidebarIcon icon={<Bot size={24} />} tooltip="Sentry Q-AI" onClick={() => setIsAiOpen(true)} />
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
              {['Home', 'Quantum Vault', 'Data Lakes', 'Certifications', 'Settings'].map((item) => (
                <button key={item} className="text-left px-4 py-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition-colors">
                  {item}
                </button>
              ))}
              <button onClick={() => { setIsSidebarOpen(false); setIsAiOpen(true); }} className="text-left px-4 py-3 rounded-xl bg-cyan-900/20 text-cyan-400 border border-cyan-500/20 mt-4 flex items-center gap-2">
                 <Bot size={18} /> Open Q-Core AI
              </button>
            </div>
        </div>
      </div>

      {/* --- SENTRY AI COMPONENT --- */}
      <SentryAIChat isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

      {/* --- AI FLOATING ACTION BUTTON (Visible when closed) --- */}
      <div 
        onClick={() => setIsAiOpen(true)}
        className={`fixed bottom-8 right-8 z-40 cursor-pointer transition-all duration-500 transform ${isAiOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100 hover:scale-110'}`}
      >
        <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-white/20">
             <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping"></div>
             <Bot size={28} className="text-white relative z-10" />
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
                        <Zap size={12} /> Quantum Integrated
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight max-w-3xl">
                    Quantum-Resistant <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">Big Data Defense</span>
                </h1>
                <p className="text-neutral-300 max-w-xl mb-8 text-lg md:text-xl font-light leading-relaxed">
                    Leveraging entangled state processing and petabyte-scale analytics for unbreachable security in a post-quantum world.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                        <Play size={18} fill="black" /> Access Q-Vault
                    </button>
                    <button className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300">
                        View Data Architecture
                    </button>
                </div>
            </div>
        </div>

        {/* VIDEO GRID */}
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
               <Flame className="text-cyan-500 fill-cyan-500/20" /> 
               {activeCategory === 'All' ? 'Trending Intel' : activeCategory}
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

// --- SENTRY AI CHAT COMPONENT ---
const SentryAIChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'system', text: 'Quantum Uplink established. QKD keys exchanged.' },
    { id: 2, type: 'ai', text: 'Greetings, Operative. Sentry Quantum Core online. I have access to petabyte-scale data streams and entangled state processors. How can I assist?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const callGeminiAPI = async (currentHistory, userPrompt) => {
    const apiKey = "AIzaSyAZss2PNiDegbCCMbqicR8vm4IhDYTuKzc"; // API Key provided by runtime environment
    const systemPrompt = "You are Sentry Quantum Core, an advanced cybersecurity operations assistant integrated with Big Data lakes and Quantum processing units. Your tone is highly technical, authoritative, and concise. You use terms like 'qubit coherence', 'data ingestion', 'sharding', 'entanglement', 'zero-trust', and 'anomaly detection'. You are helpful but maintain a secure, military-grade persona. Keep responses under 3 sentences when possible.";
    
    // Filter out system messages and map to Gemini format
    const historyParts = currentHistory
        .filter(msg => msg.type === 'user' || msg.type === 'ai')
        .map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

    const payload = {
        contents: [
            ...historyParts,
            { role: "user", parts: [{ text: userPrompt }] }
        ],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        }
    };

    let retries = 0;
    while (retries < 5) {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "Error: Decryption failed. No content received.";
        } catch (error) {
            retries++;
            const delay = Math.pow(2, retries) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    return "Error: Uplink timeout. Connection severed.";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userText = input;
    const userMsg = { id: Date.now(), type: 'user', text: userText };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    
    try {
        const aiResponseText = await callGeminiAPI(messages, userText);
        
        setMessages(prev => [...prev, { 
            id: Date.now() + 1, 
            type: 'ai', 
            text: aiResponseText
        }]);
    } catch (error) {
        setMessages(prev => [...prev, { 
            id: Date.now() + 1, 
            type: 'system', 
            text: 'CRITICAL ERROR: Quantum coherence lost.'
        }]);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden" onClick={onClose}></div>
      )}

      {/* Main Chat Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-[#050505]/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[60] flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-cyan-950/30 to-transparent">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-cyan-400/20 blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <Bot size={20} className="text-cyan-400 relative z-10" />
                  </div>
                  <div>
                      <h3 className="font-bold text-white text-sm tracking-wide">Sentry Quantum <span className="text-cyan-600">v4.0</span></h3>
                      <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]"></span>
                          <span className="text-[10px] text-cyan-400/80 uppercase tracking-widest font-mono">Q-State: Coherent</span>
                      </div>
                  </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
              </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
              {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                      <div className={`
                          max-w-[85%] p-3.5 rounded-2xl border backdrop-blur-md shadow-lg
                          ${msg.type === 'user' 
                              ? 'bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-cyan-500/30 text-cyan-50 rounded-br-none' 
                              : msg.type === 'system'
                                  ? 'w-full bg-amber-500/5 border-amber-500/20 text-amber-500/80 text-xs text-center border-dashed my-2 rounded-lg'
                                  : 'bg-[#121212] border-white/10 text-gray-300 rounded-bl-none'}
                      `}>
                          {msg.text}
                      </div>
                  </div>
              ))}
              
              {isTyping && (
                 <div className="flex justify-start">
                    <div className="bg-[#121212] border border-white/10 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-0"></span>
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150"></span>
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-300"></span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-lg">
              <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                  <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Execute command or ask query..."
                      className="relative w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm focus:outline-none focus:border-cyan-500/50 text-white placeholder-gray-600 font-mono transition-colors"
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim()}
                    className="absolute right-2 top-2 p-1.5 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
                  >
                      <Send size={18} />
                  </button>
              </div>
              <div className="text-[10px] text-gray-600 mt-2 text-center font-mono">
                  Sentry AI generated responses may vary. Verify intel independently.
              </div>
          </form>
      </div>
    </>
  );
};

// Subcomponent for Sidebar Icons
const SidebarIcon = ({ icon, active, tooltip, onClick }) => (
  <div className="relative group">
    <button 
      onClick={onClick}
      className={`
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