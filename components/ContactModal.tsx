
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simuliere API Aufruf
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        onClose();
        setFormState('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-black/5"
          >
            {/* Close Button Top Right */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black/40 hover:text-black hover:bg-zinc-200 transition-all z-10"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <header className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4FF6B] bg-black px-3 py-1 rounded-full inline-block mb-4">
                  Kontakt
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
                  Nachricht <br />
                  <span className="text-black/20">schreiben.</span>
                </h2>
              </header>

              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-[#D4FF6B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4FF6B]/20">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">Gesendet!</h3>
                  <p className="text-black/40 font-medium">Wir melden uns in Kürze bei dir.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Dein Name"
                        className="w-full px-6 py-4 bg-zinc-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4FF6B] transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">E-Mail</label>
                      <input 
                        required
                        type="email" 
                        placeholder="hallo@beispiel.de"
                        className="w-full px-6 py-4 bg-zinc-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4FF6B] transition-all font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-4">Nachricht</label>
                    <textarea 
                      required
                      placeholder="Wie können wir dir helfen?"
                      rows={4}
                      className="w-full px-6 py-4 bg-zinc-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4FF6B] transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex flex-col md:flex-row gap-3">
                    <button 
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="flex-1 py-4 md:py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D4FF6B] hover:text-black transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3 group"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </button>
                    <button 
                      type="button"
                      onClick={onClose}
                      className="py-4 md:py-5 px-8 bg-zinc-100 text-black/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all"
                    >
                      Abbrechen
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
