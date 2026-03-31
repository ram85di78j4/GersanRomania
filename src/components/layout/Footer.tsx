'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT_DATA, createMailtoLink, createTelLink, formatEmail, formatPhone } from '@/lib/contact';

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
];

export default function Footer() {
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '', emailHref: '#', phoneHref: '#' });

  useEffect(() => {
    // Decode contact info on client side
    setContactInfo({
      email: formatEmail(CONTACT_DATA.email),
      phone: formatPhone(CONTACT_DATA.phone),
      emailHref: createMailtoLink(CONTACT_DATA.email),
      phoneHref: createTelLink(CONTACT_DATA.phone),
    });
  }, []);

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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 py-12 sm:py-14 md:py-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5 sm:mb-6">
                <div className="relative">
                  <Zap className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" fill="currentColor" />
                  <div className="absolute inset-0 blur-xl bg-cyan-400/40 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-baseline space-x-2 sm:space-x-2.5 md:space-x-3">
                    <span className="text-2xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                      GERSAN
                    </span>
                    <span className="text-xl sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      ROMANIA
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-cyan-400/70 font-bold tracking-[0.2em] uppercase mt-0.5 sm:mt-1 ml-0.5">Soluții Integrate LED & EV</div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-5 sm:mb-6 max-w-md">
                Partenerul tău de încredere pentru soluții integrate de iluminat LED, automatizare inteligentă și infrastructură de încărcare EV. Proiectare profesională, execuție impecabilă, suport dedicat.
              </p>

              <div className="flex space-x-2.5 sm:space-x-3">
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
                      className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
                    >
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
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
              <h3 className="text-white font-bold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg">Navigație</h3>
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
              <h3 className="text-white font-bold mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg">Contact</h3>
              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div className="flex items-start space-x-2.5 sm:space-x-3 group">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Sediu Central</div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      București, România
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 sm:space-x-3 group">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Telefon</div>
                    <a href={contactInfo.phoneHref} className="text-white/70 hover:text-purple-400 transition-colors text-sm block">
                      {contactInfo.phone || 'Se încarcă...'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 sm:space-x-3 group">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-1">Email</div>
                    <a href={contactInfo.emailHref} className="text-white/70 hover:text-pink-400 transition-colors text-sm block">
                      {contactInfo.email || 'Se încarcă...'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 sm:py-7 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm"
            >
              © 2026 GERSAN ROMANIA. Toate drepturile rezervate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-white/40"
            >
              <a href="#" className="hover:text-white/70 transition-colors whitespace-nowrap">Politica de Confidențialitate</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white/70 transition-colors whitespace-nowrap">Termeni și Condiții</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white/70 transition-colors whitespace-nowrap">GDPR</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
