import { useState } from 'react';
import { ArrowRight, HeartHandshake, Cake, Heart, Users, Wine, User, PartyPopper, Building2, Calendar, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const workshops = [
  { id: 1, name: 'Óleo', desc: 'Domina los empastes, veladuras, grisallas, y tiempos de secado de la técnica clásica.' },
  { id: 2, name: 'Acuarela', desc: 'Descubre la fluidez, transparencias, capas y técnicas húmedas para crear atmósferas envolventes.' },
  { id: 3, name: 'Acrílico', desc: 'Aprovecha su secado rápido y colores vibrantes en diferentes soportes (tela, madera, papel).' },
  { id: 4, name: 'Escultura', desc: 'Construye desde cero una pieza tridimensional, explorando texturas, volúmenes y espacio.' },
  { id: 5, name: 'Dibujo de Figura Humana', desc: 'Estudio de anatomía, proporción y movimiento.' },
  { id: 6, name: 'Cerámica en Barro', desc: 'Aprende a modelar con técnica de placas, pellizco y churros.' },
  { id: 7, name: 'Realismo al Carbón', desc: 'Logra la textura, el claroscuro y volúmenes realistas de diferentes objetos y la piel humana.' },
  { id: 8, name: 'Realismo en Prismacolor', desc: 'Aprende los principios de la mezcla óptica, saturación y realismo de esta técnica poco común.' },
  { id: 9, name: 'Grabado', desc: 'Adéntrate en el linóleo y punta seca experimentando con matrices, tintas y estampación.' },
];

const experiencias = [
  {
    id: 'cumple',
    icon: <Cake className="text-naranja" size={32} />,
    title: 'Pintura para cumpleaños (Adultos y niños)',
    desc: 'Celebra una ocasión especial creando una obra única junto a tus invitados en un ambiente creativo y divertido.',
    images: ['/Fotografia/Experiencias/cumple_ninos.png', '/Fotografia/Experiencias/cumple_adultos.png']
  },
  {
    id: 'paint-date',
    icon: <Heart className="text-naranja" size={32} />,
    title: 'Paint Date (Pintura en pareja)',
    desc: 'Disfruta de una cita diferente donde el arte se convierte en una forma de conectar, compartir y crear juntos.',
    images: ['/Fotografia/Experiencias/paint_date_1.png'],
    link: '/experiencia-romantica'
  },
  {
    id: 'paint-date-grupal',
    icon: <Users className="text-naranja" size={32} />,
    title: 'Paint Date Grupal',
    desc: 'Vive una experiencia artística con otras parejas, ideal para una salida diferente llena de creatividad y buenos momentos.',
    images: ['/Fotografia/Experiencias/paint_date_grupal.png']
  },
  {
    id: 'drink-draw',
    icon: <Wine className="text-naranja" size={32} />,
    title: 'Drink & Draw',
    desc: 'Relájate con una bebida mientras exploras tu creatividad a través del dibujo y la pintura en un ambiente social y acogedor.',
    images: ['/Fotografia/Experiencias/drink_draw.png']
  },
  {
    id: 'modelo',
    icon: <User className="text-naranja" size={32} />,
    title: 'Sesión con modelo al desnudo',
    desc: 'Desarrolla tus habilidades de observación y dibujo de figura humana trabajando con modelo en vivo.',
    images: ['/Fotografia/Experiencias/modelo.png']
  },
  {
    id: 'amigos',
    icon: <Palette className="text-naranja" size={32} />,
    title: 'Pintura entre amigos',
    desc: 'Comparte una experiencia creativa con tus amigos mientras cada uno realiza una pintura guiada y personalizada.',
    images: ['/Fotografia/Experiencias/pintura_amigos.png']
  },
  {
    id: 'privados',
    icon: <PartyPopper className="text-naranja" size={32} />,
    title: 'Eventos privados',
    desc: 'Organizamos experiencias artísticas para celebraciones, reuniones, despedidas, aniversarios y cualquier ocasión especial.',
    images: ['/Fotografia/Experiencias/privados_1.png', '/Fotografia/Experiencias/privados_2.png']
  },
  {
    id: 'team-building',
    icon: <Building2 className="text-naranja" size={32} />,
    title: 'Team Building Artístico',
    desc: 'Fortalece la comunicación y el trabajo en equipo mediante una actividad creativa diseñada para empresas y organizaciones.',
    images: ['/Fotografia/Experiencias/team_building.png']
  },
  {
    id: 'mensuales',
    icon: <Calendar className="text-naranja" size={32} />,
    title: 'Talleres mensuales',
    desc: 'Disfruta de sesiones especiales inspiradas en distintas técnicas, artistas o temáticas, en un ambiente relajado e inspirador.',
    images: ['/Fotografia/Experiencias/mensual_1.jpg', '/Fotografia/Experiencias/mensual_2.jpg']
  }
];

export function Workshops() {
  const [activeTab, setActiveTab] = useState<'talleres' | 'experiencias'>('talleres');

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
            Talleres y Experiencias
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Espacios diseñados para explorar tu creatividad, ya sea dominando una técnica o viviendo un momento inolvidable.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center mt-[-1.5rem] relative z-20 px-4 mb-16">
        <div className="bg-white rounded-none shadow-xl p-1 flex border border-noche/10">
          <button 
            onClick={() => setActiveTab('talleres')}
            className={`px-6 py-3 font-medium transition-colors ${activeTab === 'talleres' ? 'bg-noche text-white' : 'text-noche hover:bg-noche/5'}`}
          >
            Talleres Regulares
          </button>
          <button 
            onClick={() => setActiveTab('experiencias')}
            className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${activeTab === 'experiencias' ? 'bg-naranja text-noche' : 'text-noche hover:bg-noche/5'}`}
          >
            Experiencias Artísticas
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'talleres' && (
          <motion.div key="talleres" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {/* Grid */}
            <section className="py-4 px-4 max-w-6xl mx-auto">
              <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-6 border border-noche/10 shadow-sm max-w-max mx-auto">
                <div className="text-2xl font-display font-medium text-noche">$2,500 <span className="text-sm font-body text-text-muted">/ taller de 20 horas (sin material)</span></div>
                <div className="hidden sm:block w-px h-8 bg-noche/10"></div>
                <div className="text-sm font-medium text-text-muted">Horarios flexibles previa reserva</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.map((w, idx) => (
                  <motion.div 
                    key={w.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border border-noche/5 p-8 hover:shadow-xl hover:border-naranja/30 transition-all duration-300 group flex flex-col h-full"
                  >
                    <h3 className="font-display text-2xl text-noche mb-4 group-hover:text-naranja transition-colors">{w.name}</h3>
                    <p className="text-text-muted text-base leading-relaxed mb-8 flex-grow">{w.desc}</p>
                    <a href={"https://wa.me/525568892651?text=Hola,%20me%20interesa%20reservar%20el%20taller%20de%20" + encodeURIComponent(w.name)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-mono font-medium tracking-wider text-noche/40 group-hover:text-naranja transition-colors mt-auto pt-4 border-t border-noche/5">
                      RESERVAR <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 max-w-4xl mx-auto px-4 text-center">
              <a href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20reservar%20un%20taller" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-noche text-white font-medium hover:bg-noche-soft transition-colors text-lg">
                Reserva tu taller <ArrowRight size={20} />
              </a>
              <p className="mt-4 text-sm text-text-muted">Reservar con una semana de anticipación.</p>
            </section>
          </motion.div>
        )}

        {activeTab === 'experiencias' && (
          <motion.div key="experiencias" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <section className="py-4 px-4 max-w-5xl mx-auto">
              <div className="space-y-12">
                {experiencias.map((exp) => (
                  <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-noche/5 overflow-hidden shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                        <h3 className="font-display text-3xl text-noche mb-4 flex items-center gap-3">
                          {exp.icon}
                          {exp.title}
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed mb-8">
                          {exp.desc}
                        </p>
                        
                        {exp.link ? (
                          <a href={exp.link} className="inline-flex items-center gap-2 text-noche font-medium hover:text-naranja transition-colors mt-auto">
                            Ver más detalles <ArrowRight size={18} />
                          </a>
                        ) : (
                          <a href={"https://wa.me/525568892651?text=Hola,%20me%20interesa%20solicitar%20informaci%C3%B3n%20sobre%20" + encodeURIComponent(exp.title)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-noche font-medium hover:text-naranja transition-colors mt-auto">
                            Solicitar información <ArrowRight size={18} />
                          </a>
                        )}
                      </div>
                      <div className="md:w-1/2 bg-noche/5 p-6 min-h-[300px]">
                        <div className={`grid gap-4 h-full ${exp.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {exp.images.map((img, i) => (
                            <div key={i} className="relative overflow-hidden shadow-sm h-full w-full min-h-[250px]">
                              <img src={img} alt={exp.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA for Experiencias */}
              <section className="mt-24 text-center pb-12">
                <div className="inline-flex items-center justify-center p-4 bg-naranja/10 rounded-full mb-6 text-naranja">
                  <HeartHandshake size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4 text-noche">¿Tienes una idea especial en mente?</h3>
                <p className="text-text-muted mb-8 max-w-2xl mx-auto text-lg">Personalizamos la experiencia artística a tu medida. Cuéntanos qué te gustaría hacer y nosotros nos encargamos del resto.</p>
                <a href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20cotizar%20una%20experiencia%20art%C3%ADstica" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-naranja text-noche font-medium hover:bg-[#ff9d2a] transition-colors text-lg">
                  Cotizar Experiencia <ArrowRight size={20} />
                </a>
              </section>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
