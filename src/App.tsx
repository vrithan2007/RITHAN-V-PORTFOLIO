import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { 
  Cpu, 
  Code, 
  Zap, 
  Radio, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Github, 
  Linkedin, 
  GraduationCap,
  Briefcase,
  ArrowUp,
  Download,
  Menu,
  X
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ModernHeroAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#0a0a1a] to-[#050510] opacity-100" />
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
          }}
        />
      ))}

      {/* Subtle Light Streaks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45"
          style={{
            width: Math.random() * 300 + 200 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            x: [-500, 500],
            y: [500, -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 7 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 overflow-hidden">
        {/* Animated Background Layer */}
        <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-md" />
        <motion.div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15), transparent)',
            backgroundSize: '200% 100%'
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold text-white overflow-hidden">
              <img src="/profile.jpg" alt="Rithan V" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = 'R'; }} />
            </div>
            <span className="text-xl font-bold font-display tracking-tighter uppercase">
              RITHAN V
            </span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(true);
            }}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden fixed inset-0 z-[60] bg-gray-950 flex flex-col"
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold text-white overflow-hidden">
              <img src="/profile.jpg" alt="Rithan V" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = 'R'; }} />
            </div>
            <span className="text-xl font-bold font-display tracking-tighter uppercase">
              RITHAN V
            </span>
          </div>
          <button 
            type="button"
            className="p-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
            }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-8 flex-grow">
          {['About', 'Education', 'Experience', 'Skills'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-purple-400 transition-colors py-4 text-xl font-medium border-b border-white/5"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Drawer Footer / Contact Button */}
        <div className="p-6 mt-auto border-t border-white/5">
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 text-center text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <ModernHeroAnimation />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Profile Avatar with Glow & Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 relative mb-10 group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl group-hover:bg-purple-500/50 transition-all duration-500" />
            
            {/* Pulsing Ring */}
            <motion.div 
              className="absolute -inset-4 border border-purple-500/20 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Avatar Container */}
            <div className="relative w-full h-full rounded-full bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden z-10">
              <img src="/profile.jpg" alt="Rithan V" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl font-bold text-gray-700">RV</span>'; }} />
            </div>
          </motion.div>

          {/* Text Reveal Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">Rithan V</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Electronics Engineering Specialist crafting efficient, intelligent systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Download CV <Download size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 glass-card text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 border border-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <h2 className="text-3xl font-bold font-display mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an ECE core student with a strong foundation in electronics system design, embedded systems, and digital circuits. I focus on applying engineering concepts to real-world solutions and continuously improving my technical skills. My passion lies in bridging the gap between hardware and software to create efficient, intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display mb-12 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Education
          </motion.h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            
            {/* Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-[.is-active]:border-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={18} className="text-purple-500" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">B.Tech – ECE</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">2024 – 2028</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Dhanalakshmi Srinivasan University (DSU), Trichy</p>
                <p className="text-gray-500 text-sm">Electronics and Communication Engineering</p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-[.is-active]:border-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} className="text-blue-500" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Higher Secondary</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">2012 – 2024</span>
                </div>
                <p className="text-gray-400 text-sm">SARU MHSS SATHYAMANGALAM</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display mb-12 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
            Technical Skills
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: "Analog & Digital Electronics", icon: <Zap className="text-yellow-400" /> },
              { name: "Embedded Systems", icon: <Cpu className="text-purple-400" /> },
              { name: "Digital Logic Design", icon: <Code className="text-blue-400" /> },
              { name: "Communication Systems", icon: <Radio className="text-green-400" /> },
              { name: "Signals & Systems", icon: <Radio className="text-pink-400" /> },
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-gray-800 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display mb-12 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Embedded Systems Project",
                desc: "A comprehensive system using microcontrollers to automate industrial tasks with real-time monitoring.",
                tags: ["C++", "Arduino", "Sensors"]
              },
              {
                title: "IoT Smart Device",
                desc: "Connected home automation solution allowing remote control via mobile app and voice commands.",
                tags: ["IoT", "ESP32", "MQTT"]
              },
              {
                title: "Digital Circuit Design",
                desc: "Complex logic circuit implementation for signal processing applications with high efficiency.",
                tags: ["Verilog", "FPGA", "LogicSim"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Cpu size={48} className="text-gray-600 group-hover:text-purple-500 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Let's Work Together</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <a href="tel:8122518009" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                  <div className="font-medium">+91 8122518009</div>
                </div>
              </a>

              <a href="mailto:vrithan2007@gmail.com" className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="font-medium truncate">vrithan2007@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:vrithan2007@gmail.com" 
            aria-label="Email"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://wa.me/918122518009" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
            className="text-gray-500 hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
          <a 
            href="https://t.me/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Telegram"
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a 
            href="https://instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="text-gray-500 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://facebook.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © 2026 Rithan V. All rights reserved.
        </p>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8, pointerEvents: showBackToTop ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
