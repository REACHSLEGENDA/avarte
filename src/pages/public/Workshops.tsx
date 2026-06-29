import { ArrowRight, Clock, MapPin, Calendar, CheckCircle, HeartHandshake } from 'lucide-react';
import { ImageGallery } from '../../components/ui/ImageGallery';
import { motion } from 'framer-motion';

const workshops = [
  { id: 1, name: 'Acuarela', desc: 'Explora la fluidez, transparencias y técnicas húmedas.' },
  { id: 2, name: 'Óleo', desc: 'Domina los empastes, veladuras y tiempos de secado de la técnica clásica.' },
  { id: 3, name: 'Acrílico', desc: 'Versatilidad, secado rápido y colores vibrantes en diferentes soportes.' },
  { id: 4, name: 'Dibujo Anatómico', desc: 'Estudio de la figura humana, proporción, musculatura y movimiento.' },
  { id: 5, name: 'Escultura', desc: 'Trabajo tridimensional explorando volúmenes y espacio.' },
  { id: 6, name: 'Cerámica en Barro', desc: 'Técnicas de modelado, texturas y preparación para quema.' },
  { id: 7, name: 'Cerámica Secado al Aire', desc: 'Modelado escultórico sin necesidad de horno.' },
  { id: 8, name: 'Grabado', desc: 'Linóleo y punta seca, experimentando con matrices y estampación.' },
  { id: 9, name: 'Técnicas al Carbón', desc: 'Claroscuro intenso, texturas y expresividad monocromática.' },
  { id: 10, name: 'Prismacolor', desc: 'Mezcla óptica, saturación y realismo con lápices de color.' },
];

export function Workshops() {
  return (
    <div className="bg-crema-light min-h-screen pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-17%20at%209.54.32%20AM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-noche/80 via-noche/40 to-noche/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl mb-6 text-white"
          >
            Talleres de Especialización
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Inmersiones de 20 horas enfocadas en dominar una técnica específica o explorar un medio nuevo. Flexibilidad total en horarios.
          </motion.p>
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 border border-white/20 shadow-xl">
            <div className="text-2xl font-display font-medium text-white">$2,500 <span className="text-sm font-body text-crema/70">/ taller (sin material)</span></div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-sm font-medium text-crema/90">Horarios flexibles previa reserva</div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {workshops.map((w, idx) => (
            <motion.div 
              key={w.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-noche/5 p-6 hover:shadow-xl hover:border-naranja/30 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <h3 className="font-display text-2xl text-noche mb-3 group-hover:text-naranja transition-colors">{w.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">{w.desc}</p>
              <div className="flex items-center justify-between text-xs font-mono font-medium tracking-wider text-noche/40 mt-auto pt-4 border-t border-noche/5">
                <span>VER DETALLES</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-naranja" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experiencia Romántica Banner */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-vino text-white">
          <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.02.45%20PM.jpeg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-vino/90 to-transparent" />
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-4xl mb-4">Experiencia Romántica</h3>
              <p className="text-crema/90 text-lg mb-6">
                Una velada íntima creando arte en pareja. El plan perfecto para aniversarios, citas o propuestas especiales.
              </p>
              <a href="/experiencia-romantica" className="inline-flex items-center gap-2 bg-white text-noche px-6 py-3 font-medium hover:bg-crema transition-colors">
                Descubrir Experiencia <ArrowRight size={18} />
              </a>
            </div>
            <div className="hidden md:block">
              {/* Decorative circle or element */}
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
                <HeartHandshake size={48} className="text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-8 max-w-4xl mx-auto px-4 text-center">
        <a href="/contacto" className="inline-flex items-center gap-2 px-10 py-5 bg-noche text-white font-medium hover:bg-noche-soft transition-colors text-lg">
          Reservar un taller regular <ArrowRight size={20} />
        </a>
        <p className="mt-4 text-sm text-text-muted">Reserva tus horas con mínimo 1 día de anticipación.</p>
      </section>
    </div>
  );
}
