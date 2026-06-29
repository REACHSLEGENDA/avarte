import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export function Videos() {
  return (
    <div className="bg-noche text-crema min-h-screen pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 border-b border-crema/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            Atelier en Video
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema-light/80 max-w-2xl mx-auto font-light"
          >
            Aprende técnicas puntuales y secretos del estudio en formato corto. 
          </motion.p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-crema-light/10 relative overflow-hidden border border-crema/10 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-noche/80 via-noche/20 to-transparent z-10" />
                {/* Image Placeholder */}
                <img src={`https://images.unsplash.com/photo-1544627836-822bfe460010?q=80&w=800&auto=format&fit=crop&random=${i}`} alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
                
                <PlayCircle size={48} className="text-white z-20 group-hover:scale-110 transition-transform shadow-2xl" strokeWidth={1} />
                
                <div className="absolute bottom-3 right-3 z-20 bg-noche/80 px-2 py-1 text-xs font-mono backdrop-blur-sm border border-white/10">
                  0{Math.floor(Math.random() * 4) + 1}:{Math.floor(Math.random() * 40) + 10}
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <span className="text-xs font-mono text-teal border border-teal/30 px-2 py-0.5">ACRÍLICO</span>
                <span className="text-xs font-mono text-crema/50 border border-crema/10 px-2 py-0.5">PRINCIPIANTE</span>
              </div>
              <h3 className="font-display text-xl text-white mb-2 group-hover:text-teal transition-colors">Técnica de pincel seco para texturas</h3>
              <p className="text-sm text-crema/60 line-clamp-2">Una demostración rápida de cómo lograr texturas rugosas usando un mínimo de pintura y pinceles de cerda dura.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
