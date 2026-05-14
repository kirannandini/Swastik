import { motion } from 'motion/react';
import { ArrowRight, Wind, Palette, Shield, Zap, Star, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/src/assets/sanitary Images/gallery-1.jpg" 
            alt="Luxury bathroom design" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        
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
              Cool Comfort. <br />
              <span className="italic font-serif bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Deep Elegance.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              We bring together high-performance air conditioning technology and exquisite ceramic designs to create spaces that breathe and inspire.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/products"
                className="bg-gradient-to-r from-brand to-blue-600 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:from-brand-dark hover:to-blue-700 shadow-xl shadow-brand/20 transition-all duration-300 flex items-center justify-center group rounded-sm hover:scale-105 transform"
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Completed</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Premium Brands</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
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
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Outstanding service and beautiful ceramic tiles. The team helped us create our dream bathroom with expert guidance."</p>
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
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Professional AC installation and maintenance. Our office stays cool and comfortable year-round."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold mr-3">P</div>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">Business Owner</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Exceptional quality sanitaryware and tiles. The showroom has amazing options for every budget."</p>
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
            {/* AC Side */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-gray-100 shadow-lg p-12 lg:p-20 rounded-2xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand/20 transition-colors">
                  <Wind size={32} className="text-brand" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Advanced Cooling Systems</h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Experience precision temperature control with our silent, energy-efficient air conditioners from world-leading brands.
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-500" /> Inverter & Smart ACs</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-500" /> VRV/VRF Solutions</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-500" /> Expert Installation & AMC</li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.1em] text-brand border-b-2 border-brand/20 hover:border-brand transition-all pb-2 group-hover:text-brand-dark">
                  View AC Services <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Wind size={300} className="text-brand" />
              </div>
            </motion.div>

            {/* Ceramics Side */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden bg-gradient-to-br from-brand-dark to-blue-900 text-white p-12 lg:p-20 rounded-2xl shadow-xl shadow-brand-dark/10 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <Palette size={32} className="text-blue-300" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Ceramic & Sanitaryware</h2>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                  Transform your interiors with our curated collection of luxury tiles, high-end sanitaryware, and designer bathroom solutions.
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-blue-200 transition-colors group-hover:text-white">
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Premium Vitrified Tiles</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Italian Marble Finish</li>
                  <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-blue-300" /> Designer Bathroom Fittings</li>
                </ul>
                <Link to="/products" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.1em] text-blue-300 border-b-2 border-blue-300/20 hover:border-blue-300 transition-all pb-2 group-hover:text-white">
                  Shop Ceramics <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Palette size={300} className="text-blue-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 border-y border-gray-100 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-12">Authorized Partners & Premium Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">DAIKIN</span>
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">MITSI</span>
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">SOMANY</span>
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">KAJARIA</span>
             <span className="text-2xl font-black italic tracking-tighter text-gray-800">KOHLER</span>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6 text-brand">
                <Shield size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Quality Assurance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Every product in our showroom undergoes rigorous quality checks to ensure long-term durability and performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6 text-brand">
                <Zap size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Energy Expertise</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our experts help you select AC systems that maximize cooling while minimizing energy consumption and costs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6 text-brand">
                <Palette size={30} />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter text-black">Curation Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We source the latest designs from top manufacturers, ensuring your space reflects contemporary elegance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-brand via-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/sanitary Images/gallery-2.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
              Ready to Transform <br />
              <span className="font-serif italic">Your Space?</span>
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let our experts guide you through the perfect combination of cooling technology and elegant design for your home or business.
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
