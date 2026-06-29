import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-noche overflow-hidden">
        {/* Placeholder image background */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.07.25%20PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/50 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/logo-blanco.png" 
            alt="AV Arte Estudio" 
            className="h-32 md:h-48 mb-8"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-medium text-3xl md:text-5xl text-crema leading-tight mb-6 max-w-2xl"
          >
            Un espacio para crear, aprender e inspirarte
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-crema-light/80 text-lg mb-10 max-w-xl"
          >
            Estudio de arte boutique en Coyoacán, fundado por artistas para despertar tu creatividad sin importar tu nivel.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/clases" className="px-8 py-4 bg-naranja text-noche font-medium text-sm hover:bg-[#ff9d2a] transition-colors flex items-center justify-center gap-2">
              Conoce nuestras clases <ArrowRight size={16} />
            </Link>
            <Link to="/experiencia-romantica" className="px-8 py-4 bg-transparent border border-crema/30 text-crema font-medium text-sm hover:bg-crema/10 transition-colors flex items-center justify-center">
              Reserva una experiencia
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-crema px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-noche mb-4">Para cada artista interior</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Diseñamos programas que se adaptan a tus objetivos, desde desarrollo técnico a largo plazo hasta experiencias creativas de una sola tarde.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PillarCard 
              title="Clases Regulares"
              desc="Formación progresiva en dibujo y pintura para niños y adultos."
              link="/clases"
              color="border-teal/20 hover:border-teal"
              textColor="text-teal"
            />
            <PillarCard 
              title="Talleres Especializados"
              desc="Sesiones de 20 horas enfocadas en dominar una técnica específica."
              link="/talleres"
              color="border-magenta/20 hover:border-magenta"
              textColor="text-magenta"
            />
            <PillarCard 
              title="Curso de Verano"
              desc="Un programa inmersivo de arte y tecnología para niños y jóvenes."
              link="/curso-verano"
              color="border-vino/20 hover:border-vino"
              textColor="text-vino"
            />
            <PillarCard 
              title="Experiencias Privadas"
              desc="Sesiones creativas para parejas y grupos con todo incluido."
              link="/experiencia-romantica"
              color="border-azul/20 hover:border-azul"
              textColor="text-azul"
            />
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-24 bg-crema-light px-4 border-y border-noche/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl text-noche mb-6">Conoce a las artistas</h2>
              <p className="text-text-muted text-lg mb-8">
                AV Arte Estudio nace de la visión compartida de crear un espacio donde la técnica rigurosa y la expresión libre convivan. No somos solo un taller, somos un estudio vivo.
              </p>
              
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-magenta/10 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="text-magenta" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-1">Vianey César Martínez</h3>
                    <p className="text-sm text-text-muted">Diseñadora, animadora digital y artista. Especialista en ilustración, modelado 3D y arte terapia.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-1">Aglael S. Valdivia Ibarra</h3>
                    <p className="text-sm text-text-muted">Artista plástica y docente. Especialista en técnicas pictóricas, gráfica tradicional y perspectiva de género.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/quienes-somos" className="inline-flex items-center gap-2 font-medium text-noche border-b border-noche pb-1 hover:text-naranja hover:border-naranja transition-colors">
                Leer manifiesto completo <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-noche/10 overflow-hidden">
                <img src="/Fotografia/Vianey Agla/DSC_5361.JPG" alt="Vianey" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="aspect-[3/4] bg-noche/10 overflow-hidden mt-12">
                <img src="/Fotografia/Vianey Agla/DSC_5343.JPG" alt="Aglael" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Summer Course Banner */}
      <section className="bg-vino text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Curso de Verano 2026</h2>
            <p className="text-white/80 max-w-lg mb-0 text-lg">
              Arte, reciclaje y tecnología para niños y jóvenes de 7 a 17 años. Del 27 de julio al 21 de agosto.
            </p>
          </div>
          <Link to="/curso-verano" className="px-8 py-4 bg-white text-vino font-medium text-sm hover:bg-crema transition-colors whitespace-nowrap">
            Ver detalles e inscripción
          </Link>
        </div>
      </section>
    </div>
  );
}

function PillarCard({ title, desc, link, color, textColor }: { title: string; desc: string; link: string; color: string; textColor: string }) {
  return (
    <Link to={link} className={`group block p-8 bg-white border border-noche/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${color}`}>
      <h3 className={`font-display text-2xl mb-3 ${textColor}`}>{title}</h3>
      <p className="text-text-muted text-sm mb-8 line-clamp-3">{desc}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-mono font-medium tracking-wider text-noche/40 group-hover:text-noche transition-colors">EXPLORAR</span>
        <ArrowRight size={16} className="text-noche/40 group-hover:text-noche transition-colors -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
