import { Clock, Calendar, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function SummerCourse() {
  return (
    <div className="bg-crema min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 bg-vino text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-naranja/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-white/10 text-crema-light font-mono text-sm tracking-wider mb-8 border border-white/20">
            27 DE JULIO AL 21 DE AGOSTO, 2026
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl mb-6 leading-tight"
          >
            Curso de Verano:<br/>Arte y Tecnología
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 font-light"
          >
            Un programa inmersivo donde la creatividad se encuentra con el reciclaje y la electrónica básica. Para mentes inquietas de 7 a 17 años.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="bg-white text-vino px-6 py-4 flex items-center justify-center gap-4 text-xl font-display w-full sm:w-auto font-medium">
              <span>Costo Total:</span>
              <span className="text-3xl">$2,500</span>
            </div>
            <a href="#inscripcion" className="px-8 py-4 md:py-5 bg-naranja text-noche font-medium hover:bg-[#ff9d2a] transition-colors w-full sm:w-auto text-center">
              Inscribirme Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-4 bg-white border-y border-noche/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-noche mb-4">Los Proyectos de este Año</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Durante las semanas del curso, los alumnos desarrollarán dos proyectos mayores que se llevarán a casa, combinando diversas disciplinas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-crema p-10 border border-noche/5">
              <span className="text-naranja font-mono font-bold tracking-widest text-sm mb-4 block">ACTIVIDAD 01</span>
              <h3 className="font-display text-3xl text-noche mb-4">Escultura Fantástica de Criaturas Marinas</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Construcción tridimensional para fomentar la observación y la creatividad a través de volúmenes complejos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-noche/80"><Check size={16} className="text-naranja" /> Materiales: limpiapipas, gis pastel, pintura fotoluminiscente.</li>
                <li className="flex items-center gap-2 text-noche/80"><Check size={16} className="text-naranja" /> Conceptos: anatomía fantástica, volumen, texturas.</li>
                <li className="flex items-center gap-2 font-medium text-noche mt-4 bg-white p-3 border border-noche/10"><Check size={16} className="text-vino" /> Resultado: Pieza escultórica que brilla en la oscuridad.</li>
              </ul>
            </div>
            
            <div className="bg-crema p-10 border border-noche/5">
              <span className="text-naranja font-mono font-bold tracking-widest text-sm mb-4 block">ACTIVIDAD 02</span>
              <h3 className="font-display text-3xl text-noche mb-4">Cuadro Tecnológico con Iluminación LED</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Una obra bidimensional que cobra vida. Arte + Tecnología + Sustentabilidad en un solo proyecto.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-noche/80"><Check size={16} className="text-naranja" /> Materiales: elementos reciclados, acrílicos, circuito básico LED.</li>
                <li className="flex items-center gap-2 text-noche/80"><Check size={16} className="text-naranja" /> Conceptos: relieve, teoría del color, electrónica básica.</li>
                <li className="flex items-center gap-2 font-medium text-noche mt-4 bg-white p-3 border border-noche/10"><Check size={16} className="text-vino" /> Resultado: Cuadro interactivo con sistema de luz.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Form */}
      <section id="inscripcion" className="py-24 px-4 bg-noche text-crema-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl text-white mb-6">Detalles y Horarios</h2>
            <p className="text-crema-light/70 mb-10 text-lg">
              El curso requiere una asistencia de 6 horas a la semana. Puedes elegir el bloque de días y horario que mejor se adapte a ti. El cupo es estrictamente limitado para garantizar atención personalizada.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 font-mono tracking-wider text-naranja mb-4">
                  <Calendar size={18} /> LUNES, MIÉRCOLES Y VIERNES
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <TimeBlock time="10:00 - 12:00" />
                  <TimeBlock time="12:30 - 14:30" />
                  <TimeBlock time="16:00 - 18:00" />
                </div>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 font-mono tracking-wider text-naranja mb-4">
                  <Calendar size={18} /> MARTES Y JUEVES
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <TimeBlock time="11:00 - 14:00" />
                  <TimeBlock time="16:00 - 19:00" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-noche p-8 md:p-10 shadow-2xl">
            <h3 className="font-display text-3xl mb-2">Solicitar Cupo</h3>
            <p className="text-text-muted mb-8">Llena el formulario para solicitar tu cupo y nos pondremos en contacto contigo por WhatsApp.</p>
            
            {/* Formulario Placeholder */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre del tutor</label>
                  <input type="text" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre del alumno</label>
                  <input type="text" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Edad del alumno</label>
                  <input type="number" min="7" max="17" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono (WhatsApp)</label>
                  <input type="tel" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                <input type="email" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Horario preferido</label>
                <select className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-naranja">
                  <option>L-M-V 10:00 - 12:00</option>
                  <option>L-M-V 12:30 - 14:30</option>
                  <option>L-M-V 16:00 - 18:00</option>
                  <option>M-J 11:00 - 14:00</option>
                  <option>M-J 16:00 - 19:00</option>
                </select>
              </div>
              <a 
                href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20pedir%20cupo%20para%20el%20Curso%20de%20Verano" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-4 mt-6 bg-green-600 text-white font-medium text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Pedir Cupo
              </a>
              <p className="text-xs text-center text-text-muted mt-4">La inscripción y método de pago se coordinan de manera directa. No incluye materiales (se entregará lista al confirmar).</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimeBlock({ time }: { time: string }) {
  return (
    <div className="border border-crema-light/20 p-3 flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 transition-colors">
      <Clock size={14} className="text-white/50" />
      <span>{time}</span>
    </div>
  );
}
