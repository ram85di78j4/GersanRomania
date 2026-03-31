'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building2, User, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import GlowText from '@/components/ui/GlowText';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    budget: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement backend integration
    // Form data ready for backend submission
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form after successful submission
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      projectType: '',
      location: '',
      budget: '',
      details: '',
    });
    
    setIsSubmitting(false);
    alert('Mulțumim! Vă vom contacta în curând.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-black via-cyan-950/5 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">Hai să Discutăm</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Începe <GlowText color="cyan">Proiectul</GlowText>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discută proiectul tău cu echipa noastră de specialiști. Oferim consultanță tehnică completă
            și soluții personalizate pentru fiecare proiect. Răspuns în maximum 24 de ore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Locație</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Str. Inovației nr. 123<br />
                București, România<br />
                Sector 1, 010101
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Telefon</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                +40 21 123 4567<br />
                +40 722 123 456
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-pink-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Email</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                contact@luxeled.ro<br />
                proiecte@luxeled.ro
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4">Program</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Luni - Vineri</span>
                  <span className="text-cyan-400 font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Sâmbătă</span>
                  <span className="text-cyan-400 font-semibold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Duminică</span>
                  <span className="text-white/40">Închis</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Formular Cerere Proiect</h3>
                <p className="text-white/60 text-sm">Completează formularul și te vom contacta în cel mai scurt timp</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                    Nume Complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                        focusedField === 'name' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                      }`}
                      placeholder="Ion Popescu"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2 text-sm">
                    Companie
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                        focusedField === 'company' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                      }`}
                      placeholder="Compania SRL"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                    Telefon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                        focusedField === 'phone' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                      }`}
                      placeholder="+40 722 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                        focusedField === 'email' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                      }`}
                      placeholder="ion@compania.ro"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2 text-sm">
                    Tip Proiect *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('projectType')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'projectType' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="bg-black">Selectează tipul</option>
                    <option value="comercial" className="bg-black">Iluminat Comercial</option>
                    <option value="industrial" className="bg-black">Iluminat Industrial</option>
                    <option value="rezidential" className="bg-black">Iluminat Rezidențial</option>
                    <option value="led-rgb" className="bg-black">Benzi LED / RGB</option>
                    <option value="ev-charging" className="bg-black">Stații Încărcare EV</option>
                    <option value="automatizari" className="bg-black">Automatizări</option>
                    <option value="smart-home" className="bg-black">Case Inteligente</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-white font-medium mb-2 text-sm">
                    Localitate *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 ${
                      focusedField === 'location' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                    }`}
                    placeholder="București, Cluj, Timișoara..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-white font-medium mb-2 text-sm">
                  Buget Estimativ
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('budget')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                    focusedField === 'budget' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                  }`}
                >
                  <option value="" className="bg-black">Selectează bugetul</option>
                  <option value="sub-5000" className="bg-black">Sub 5.000 EUR</option>
                  <option value="5000-10000" className="bg-black">5.000 - 10.000 EUR</option>
                  <option value="10000-25000" className="bg-black">10.000 - 25.000 EUR</option>
                  <option value="25000-50000" className="bg-black">25.000 - 50.000 EUR</option>
                  <option value="peste-50000" className="bg-black">Peste 50.000 EUR</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="details" className="block text-white font-medium mb-2 text-sm">
                  Detalii Proiect *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  value={formData.details}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('details')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'details' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-white/10'
                  }`}
                  placeholder="Descrie-ne proiectul tău: suprafața, cerințe specifice, termen de livrare..."
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                glow 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}
                <Send className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-white/40 text-center mt-4">
                Prin trimiterea formularului, ești de acord cu prelucrarea datelor personale conform GDPR
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
