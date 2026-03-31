'use client';

import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Acasă', href: '#hero' },
  { name: 'Soluții', href: '#services' },
  { name: 'Proiecte', href: '#projects' },
  { name: 'Tehnologii', href: '#technologies' },
  { name: 'EV Charging', href: '#ev-charging' },
  { name: 'Știri', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-cyan-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-purple-400' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Zap className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" fill="currentColor" />
                  <div className="absolute inset-0 blur-xl bg-cyan-400/40 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-baseline space-x-2.5">
                    <span className="text-3xl font-black text-white">
                      Gersan
                    </span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Romania
                    </span>
                  </div>
                  <div className="text-[10px] text-cyan-400/60 font-semibold tracking-[0.15em] uppercase mt-1">Iluminat LED Premium</div>
                </div>
              </div>
              
              <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                Proiectare și implementare de sisteme integrate pentru iluminat arhitectural, automatizare inteligentă și infrastructură de încărcare EV. Soluții complete de la concept la execuție pentru spații comerciale, industriale și rezidențiale.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-bold mb-6 text-lg">Navigație</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="group flex items-center text-white/60 hover:text-white transition-colors text-sm"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-400" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Adresă</div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      Str. Inovației nr. 123<br />
                      București, România
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Telefon</div>
                    <div className="text-white/70 text-sm">+40 21 123 4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Email</div>
                    <div className="text-white/70 text-sm">contact@luxeled.ro</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm"
            >
              © 2026 LuxeLED. Toate drepturile rezervate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-xs text-white/40"
            >
              <a href="#" className="hover:text-white/70 transition-colors">Politica de Confidențialitate</a>
              <span>•</span>
              <a href="#" className="hover:text-white/70 transition-colors">Termeni și Condiții</a>
              <span>•</span>
              <a href="#" className="hover:text-white/70 transition-colors">GDPR</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
