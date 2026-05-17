import { motion } from 'motion/react';
import { ArrowRight, Wind, Palette, Shield, Zap, Star, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage = new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0182.jpg', import.meta.url).href;
const ctaBgImage = new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0059.jpg', import.meta.url).href;

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/70 via-fuchsia-900/60 to-orange-500/30 mix-blend-multiply"></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-6 block bg-brand/10 px-4 py-2 rounded-full w-fit"
            >
              Redefining Modern Living
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-8xl font-light text-white leading-[0.95] tracking-tight mb-8"
            >
              Premium Ceramics. <br />
              <span className="italic font-serif bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Elegant Bathrooms.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Transform your spaces with luxury sanitaryware and designer bathroom fittings from world-renowned brands like Grohe and Kohler.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/products"
                className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:from-pink-500 hover:to-indigo-500 shadow-xl shadow-fuchsia-200 transition-all duration-300 flex items-center justify-center group rounded-sm hover:scale-105 transform"
              >
                Explore Collections <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white/30 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center hover:scale-105 transform"
              >
                Consult an Expert
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Bathroom Feature */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-xs uppercase tracking-[0.35em] font-bold">Modern Bathroom</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Inspiration for Stylish Bathroom Interiors</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Discover contemporary bathroom styling with premium fittings, elegant fixtures, and a refined modern palette designed to elevate every residential space.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-violet-50 p-6 shadow-lg">
                  <p className="text-sm font-semibold text-violet-700">Luxury finishes</p>
                </div>
                <div className="rounded-3xl bg-fuchsia-50 p-6 shadow-lg">
                  <p className="text-sm font-semibold text-fuchsia-700">Designer faucets</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/40">
              <img
                src={heroImage}
                alt="Stylish modern bathroom interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center rounded-3xl p-8 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 shadow-2xl border border-white/60"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Completed</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center rounded-3xl p-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 shadow-2xl border border-white/60"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center rounded-3xl p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 shadow-2xl border border-white/60"
            >
              <div className="text-sm text-gray-600 uppercase tracking-wider">Premium Brands</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center rounded-3xl p-8 bg-gradient-to-br from-green-50 via-lime-50 to-teal-50 shadow-2xl border border-white/60"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Customer Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Trusted by homeowners and businesses for exceptional service and premium products.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8 rounded-3xl shadow-2xl border border-transparent"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Outstanding service and quality bathroom fittings. The team helped us create our dream bathroom with expert guidance."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                <div>
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Homeowner</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100 p-8 rounded-3xl shadow-2xl border border-transparent"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Amazing selection of bathroom fittings. The showroom design is stunning and the team provided excellent recommendations."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold mr-3">P</div>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">Interior Designer</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-lime-50 via-yellow-50 to-orange-50 p-8 rounded-3xl shadow-2xl border border-transparent"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Exceptional quality sanitaryware and bathroom fittings. The showroom has amazing options for every budget."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                <div>
                  <div className="font-semibold text-gray-900">Amit Patel</div>
                  <div className="text-sm text-gray-600">Interior Designer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bathroom Fittings */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden bg-gradient-to-br from-brand-dark to-blue-900 text-white p-12 lg:p-20 rounded-2xl shadow-xl shadow-brand-dark/10 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <Award size={32} className="text-blue-300" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Luxury Bathroom Fittings</h2>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                  Experience luxury with our premium sanitaryware, faucets, and accessories from Grohe, Kohler, and other world-class brands.
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-blue-200 transition-colors group-hover:text-white">
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Grohe Premium Faucets</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Kohler Sanitaryware</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Designer Bathroom Accessories</li>
                </ul>
                <Link to="/products" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.1em] text-blue-300 border-b-2 border-blue-300/20 hover:border-blue-300 transition-all pb-2 group-hover:text-white">
                  Shop Fittings <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Award size={300} className="text-blue-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 border-y border-gray-100 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">GROHE</span>
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">KOHLER</span>
                          <span className="text-2xl font-black italic tracking-tighter text-gray-800">vitrA</span>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand shadow-lg">
                <Shield size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Quality Assurance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Every product in our showroom undergoes rigorous quality checks to ensure long-term durability and performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand shadow-lg">
                <Palette size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Design Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our expert consultants help you select bathroom fittings that perfectly match your style, budget, and vision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand shadow-lg">
                <Palette size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Curation Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We source the latest designs from top manufacturers, ensuring your space reflects contemporary elegance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-fuchsia-700 via-purple-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${ctaBgImage})` }}></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
              Ready to Design <br />
              <span className="font-serif italic">Your Dream Bathroom?</span>
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let our experts guide you through premium bathroom fittings and sanitaryware to create your perfect sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-brand px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-blue-50 shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105 transform"
              >
                Get Free Consultation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
              <Link 
                to="/products"
                className="border-2 border-white/30 text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover:scale-105 transform"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
