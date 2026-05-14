import { motion } from 'motion/react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Inverter Series V3', category: 'AC', img: 'https://images.unsplash.com/photo-1631548231168-30113a35fd69?q=80&w=800' },
  { id: 2, name: 'Sanitary 1', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery-1.jpg', import.meta.url).href },
  { id: 3, name: 'Sanitary 2', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery-2.jpg', import.meta.url).href },
  { id: 4, name: 'Sanitary 3', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery-3.jpg', import.meta.url).href },
  { id: 5, name: 'Sanitary 5', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery-5.jpg', import.meta.url).href },
  { id: 6, name: 'Sanitary 6', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery6.png', import.meta.url).href },
  { id: 7, name: 'Sanitary 7', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery7.png', import.meta.url).href },
  { id: 8, name: 'Sanitary 8', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery8.png', import.meta.url).href },
  { id: 9, name: 'Sanitary 9', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery9.png', import.meta.url).href },
  { id: 10, name: 'Sanitary 10', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery10.png', import.meta.url).href },
  { id: 11, name: 'Sanitary 11', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery11.png', import.meta.url).href },
  { id: 12, name: 'Sanitary 12', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery12.png', import.meta.url).href },
  { id: 13, name: 'Sanitary 13', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery13.png', import.meta.url).href },
  { id: 14, name: 'Sanitary 14', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery14.png', import.meta.url).href },
  { id: 15, name: 'Sanitary 15', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery15.png', import.meta.url).href },
  { id: 16, name: 'Sanitary 16', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery16.png', import.meta.url).href },
  { id: 17, name: 'Sanitary 17', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery17.png', import.meta.url).href },
  { id: 18, name: 'Sanitary 18', category: 'Sanitary', img: new URL('../assets/sanitary Images/gallery18.png', import.meta.url).href },
];

const categories = ['All', 'AC', 'Sanitary'];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Our Collections</h1>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm border ${
                  activeTab === cat 
                  ? 'bg-brand border-brand text-white' 
                  : 'bg-white border-gray-200 text-gray-400 hover:border-brand hover:text-brand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((prod) => (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={prod.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 rounded-sm relative border border-gray-100">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-gray-900 px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
