import { motion } from 'motion/react';
import { Wind, Shield, Settings, Zap, History, UserCheck } from 'lucide-react';

const services = [
  {
    title: 'Precision Installation',
    desc: 'Expert installation of Split, Window, and Central AC systems with optimized airflow planning.',
    icon: Wind
  },
  {
    title: 'Annual Maintenance (AMC)',
    desc: 'Worry-free maintenance packages to keep your systems running at peak efficiency year-round.',
    icon: Shield
  },
  {
    title: 'Smart Repair Solutions',
    desc: 'Quick diagnostics and genuine spare parts for all major air conditioner brands.',
    icon: Settings
  },
  {
    title: 'Energy Audits',
    desc: 'Professional consultation on reducing your power bills through efficient cooling strategies.',
    icon: Zap
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="bg-brand-dark py-32 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl font-extrabold tracking-tight mb-8">Expert <br /><span className="text-blue-300 font-serif italic">Solutions.</span></h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We provide end-to-earth cooling services and ceramic consultations. Our team of certified technicians and designers work together to ensure your vision becomes reality.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Wind size={600} className="translate-x-1/2 -translate-y-1/4" />
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: '#F9FAFB' }}
                className="bg-white p-16 group transition-colors"
              >
                <s.icon className="text-brand mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 italic font-serif">Trust the experts.</h2>
            <p className="text-blue-100 font-medium">Over 15 years of excellence in cooling and design.</p>
          </div>
          <div className="flex gap-16">
            <div className="text-center">
              <p className="text-5xl font-black mb-2">5k+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Clients served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black mb-2">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Years experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
