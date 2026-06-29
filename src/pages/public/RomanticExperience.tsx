import { motion } from 'framer-motion';
import { Heart, Wine, Palette, MessageCircle } from 'lucide-react';

export function RomanticExperience() {
  return (
    <div className="bg-crema min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.02.45%20PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-vino/90 via-vino/50 to-noche/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 text-crema"
          >
            <Heart size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl mb-6 text-white"
          >
            Experiencia Romántica
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Una velada íntima creando arte en pareja. El plan perfecto para aniversarios, citas o propuestas especiales.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl text-noche mb-8">¿Qué incluye la experiencia?</h2>
            
            <div className="space-y-6">
              <IncludeItem 
                icon={<Wine />} 
                title="Brindis Romántico" 
                desc="Botella de vino y decoración especial en un espacio privado (flores, pétalos, globos)." 
              />
              <IncludeItem 
                icon={<Palette />} 
                title="Material Completo" 
                desc="2 bastidores (22x28 cm), pinturas y herramientas. Técnicas a elegir: Acrílico, Gis Pastel o Acuarela." 
              />
              <IncludeItem 
                icon={<Heart />} 
                title="Atención Personalizada" 
                desc="3 horas de sesión guiada por una artista profesional en exclusiva para ustedes dos." 
              />
            </div>
            
            <div className="mt-12 bg-white p-8 border border-noche/10">
              <div className="text-3xl font-display text-noche mb-2">$2,000 <span className="text-base font-body text-text-muted">por pareja</span></div>
              <p className="text-sm text-text-muted">Se requiere reservar con al menos 48 horas de anticipación.</p>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 shadow-2xl">
            <h3 className="font-display text-3xl mb-6">Solicitar Reserva</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input type="text" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-vino" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input type="tel" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-vino" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fecha Deseada</label>
                  <input type="date" className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-vino" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Motivo Especial (Opcional)</label>
                <input type="text" placeholder="Aniversario, cumpleaños..." className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-vino" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Técnica preferida</label>
                <select className="w-full border border-noche/20 p-3 bg-crema/20 focus:outline-none focus:border-vino">
                  <option>Acrílico</option>
                  <option>Gis Pastel</option>
                  <option>Acuarela</option>
                  <option>Por definir</option>
                </select>
              </div>
              <a href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20reservar%20una%20Experiencia%20Rom%C3%A1ntica" target="_blank" rel="noreferrer" className="w-full py-4 mt-4 bg-green-600 text-white font-medium text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={20} /> Solicitar por WhatsApp
              </a>
              <p className="text-xs text-center text-text-muted mt-2">La reserva se confirma y coordina directamente con el estudio.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function IncludeItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-vino border border-vino/10 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-display text-xl text-noche mb-1">{title}</h4>
        <p className="text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
