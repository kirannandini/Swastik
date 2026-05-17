import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const products = [
  { id: 5, name: 'Sanitary 4', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0051.jpg', import.meta.url).href },
  { id: 6, name: 'Sanitary 5', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0059.jpg', import.meta.url).href },
  { id: 7, name: 'Sanitary 6', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0150.jpg', import.meta.url).href },
  { id: 8, name: 'Sanitary 7', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0167.jpg', import.meta.url).href },
  { id: 9, name: 'Sanitary 8', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0182.jpg', import.meta.url).href },
  { id: 10, name: 'Sanitary 9', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0207.jpg', import.meta.url).href },
  { id: 11, name: 'Sanitary 10', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0213.jpg', import.meta.url).href },
  { id: 12, name: 'Sanitary 11', category: 'Sanitary', img: new URL('../assets/sanitary Images/GROHE PRICE CATALOG 2026 -FEB (7)_page-0246.jpg', import.meta.url).href },
  { id: 13, name: 'Sanitary 12', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0001.jpg', import.meta.url).href },
  { id: 16, name: 'Sanitary 15', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0010.jpg', import.meta.url).href },
  { id: 17, name: 'Sanitary 16', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0012.jpg', import.meta.url).href },
  { id: 18, name: 'Sanitary 17', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0014.jpg', import.meta.url).href },
  { id: 19, name: 'Sanitary 18', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0015.jpg', import.meta.url).href },
  { id: 20, name: 'Sanitary 19', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0017.jpg', import.meta.url).href },
  { id: 21, name: 'Sanitary 20', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0020.jpg', import.meta.url).href },
  { id: 22, name: 'Sanitary 21', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0022.jpg', import.meta.url).href },
  { id: 23, name: 'Sanitary 22', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0024.jpg', import.meta.url).href },
  { id: 24, name: 'Sanitary 23', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0064.jpg', import.meta.url).href },
  { id: 27, name: 'Sanitary 26', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0283.jpg', import.meta.url).href },
  { id: 28, name: 'Sanitary 27', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0298.jpg', import.meta.url).href },
  { id: 29, name: 'Sanitary 28', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0302.jpg', import.meta.url).href },
  { id: 30, name: 'Sanitary 29', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0306.jpg', import.meta.url).href },
  { id: 32, name: 'Sanitary 31', category: 'Sanitary', img: new URL('../assets/sanitary Images/Retail Book 2025_Print_09May25A_Whatsapp (1)_page-0314.jpg', import.meta.url).href },
];

const categories = ['All','Sanitary'];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filtered.map((prod) => (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={prod.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(prod.img)}
            >
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-3 rounded-sm relative border border-gray-100">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-gray-900 px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black p-6"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Selected product" className="w-full h-auto max-h-[90vh] object-contain rounded-sm shadow-xl" />
                <div className="text-right mt-3">
                  <button onClick={() => setSelectedImage(null)} className="bg-white text-gray-900 px-4 py-2 rounded-sm font-bold">Close</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
