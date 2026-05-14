import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="bg-gray-50 pt-10 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full">
        <main className="grid grid-cols-12 gap-0 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden min-h-[700px]">
          
          {/* Left Sidebar: Contact Details (col-span-4) */}
          <div className="col-span-12 lg:col-span-4 bg-white border-r border-gray-100 p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-500 text-sm mb-12 leading-relaxed">
                Visit our showroom for high-end ceramics and premium air conditioning solutions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-brand">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Our Showroom</h4>
                    <p className="text-sm text-gray-800 leading-snug font-medium">
                      600, No#600/35-35, Aurobindo Marg, Jayanagar 5th Block, Bangalore-560041, Karnataka<br/>
                      Near Raghavendra Swamy Temple 
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/pcnLG1SjXWHe3MwW8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-brand hover:text-brand-dark font-semibold mt-1 inline-block transition-colors"
                    >
                      📍 View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-brand">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-sm text-gray-800 font-medium">+91 9108315736</p>
                    <p className="text-sm text-gray-800 font-medium">+91 9108315736</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-brand">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-sm text-gray-800 font-medium">info@swastikac.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-brand">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hours</h4>
                    <p className="text-sm text-gray-800 font-medium">Mon - Sat: 10:00 AM - 08:30 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Area: Previews & Form (col-span-8) */}
          <div className="col-span-12 lg:col-span-8 p-6 lg:p-12 bg-slate-50 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              
              {/* Interactive Form Card */}
              <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-sans">Drop a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                      <Send size={20} />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Message Sent Successfully!</p>
                    <button onClick={() => setFormStatus('idle')} className="text-xs text-brand font-bold uppercase tracking-widest">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <input 
                      required
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full p-3 bg-gray-50 border border-gray-200 text-sm outline-none focus:border-brand transition-colors"
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 bg-gray-50 border border-gray-200 text-sm outline-none focus:border-brand transition-colors"
                    />
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 text-sm outline-none focus:border-brand text-gray-500 cursor-pointer">
                      <option>Select Interest</option>
                      <option>Tiles & Ceramics</option>
                      <option>Air Conditioning</option>
                      <option>Bath Fittings</option>
                    </select>
                    <textarea 
                      required
                      placeholder="Message" 
                      className="w-full flex-1 p-3 bg-gray-50 border border-gray-200 text-sm outline-none focus:border-brand resize-none transition-colors min-h-[150px]"
                    ></textarea>
                    <button 
                      disabled={formStatus === 'sending'}
                      className="w-full bg-gray-900 text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-brand transition-colors disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Category Previews */}
              <div className="flex flex-col space-y-8 h-full">
                <div className="relative flex-1 rounded-sm overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1621600411666-47447274ccd5?q=80&w=800" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    alt="Ceramics"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-end p-6 text-white translate-y-0 group-hover:bg-brand-dark/80 transition-all">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80 mb-1">Interior Solutions</span>
                    <h4 className="text-lg font-extrabold uppercase tracking-tight">Exclusive Ceramics</h4>
                    <p className="text-[11px] opacity-70 mt-1 leading-relaxed">Imported Italian tiles and designer bathroom ceramics.</p>
                  </div>
                </div>
                
                <div className="relative flex-1 rounded-sm overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1631548231168-30113a35fd69?q=80&w=800" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    alt="AC Units"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gray-900/70 flex flex-col justify-end p-6 text-white translate-y-0 group-hover:bg-gray-800/80 transition-all">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80 mb-1">Climate Comfort</span>
                    <h4 className="text-lg font-extrabold uppercase tracking-tight">Industrial Cooling</h4>
                    <p className="text-[11px] opacity-70 mt-1 leading-relaxed">Authorized dealers for high-efficiency VRF and split AC systems.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ArrowRight({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      className={className} 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
