import { ArrowRight, Check, Palette, Brush, HeartHandshake } from 'lucide-react';
import { ImageGallery } from '../../components/ui/ImageGallery';
import { motion } from 'framer-motion';

export function Classes() {
  return (
    <div className="bg-crema min-h-screen pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.02.45%20PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/40 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl mb-6 text-white"
          >
            Clases Regulares
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Programas progresivos de dibujo y pintura diseñados para construir una base sólida y desarrollar tu propio lenguaje visual.
          </motion.p>
        </div>
      </section>

      {/* Pricing / Options */}
      <section className="py-24 px-4 max-w-6xl mx-auto -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Adultos */}
          <div className="bg-white p-8 md:p-12 border border-noche/5 shadow-xl">
            <div className="inline-block px-3 py-1 bg-teal/10 text-teal font-mono text-xs font-semibold tracking-wider mb-6">
              18 AÑOS EN ADELANTE
            </div>
            <h2 className="font-display text-4xl text-noche mb-2">Adultos</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-display font-medium text-noche">$2,000</span>
              <span className="text-text-muted">/ mes (sin material)</span>
            </div>
            
            <p className="text-text-muted mb-8 h-12">
              Programa completo de 2 años abarcando desde fundamentos del dibujo hasta técnicas avanzadas.
            </p>
            
            <ul className="space-y-4 mb-10">
              <FeatureItem text="4 horas por semana (sesiones de 2h)" />
              <FeatureItem text="Horarios: L-V 10am-2pm o 4pm-7pm | Sáb 9am-2pm" />
              <FeatureItem text="Fundamentos: observación, proporción, volumen, perspectiva" />
              <FeatureItem text="Técnicas: grafito, carbón, acuarela, tinta, gis pastel, etc." />
            </ul>

            <div className="mb-10">
                <ImageGallery images={[
                  '/Fotografia/Clase adultos/DSC_5131.JPG',
                  '/Fotografia/Clase adultos/DSC_5132.JPG',
                  '/Fotografia/Clase adultos/DSC_5142.JPG',
                  '/Fotografia/Clase adultos/DSC_5190.JPG'
                ]} columns={2} />
            </div>
            
            <a href="/contacto" className="w-full block text-center py-4 bg-noche text-white font-medium hover:bg-noche-soft transition-colors">
              Agenda una clase muestra
            </a>
          </div>

          {/* Niños */}
          <div className="bg-white p-8 md:p-12 border border-noche/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-naranja/10 rounded-bl-full -z-10" />
            <div className="inline-block px-3 py-1 bg-naranja/10 text-naranja font-mono text-xs font-semibold tracking-wider mb-6">
              HASTA 17 AÑOS
            </div>
            <h2 className="font-display text-4xl text-noche mb-2">Niños y Jóvenes</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-display font-medium text-noche">$1,500</span>
              <span className="text-text-muted">/ mes (sin material)</span>
            </div>
            
            <p className="text-text-muted mb-8 h-12">
              Programa de 1 año enfocado en exploración sensorial, motricidad y expresión artística libre.
            </p>
            
            <ul className="space-y-4 mb-10">
              <FeatureItem text="4 horas por semana (1 clase dibujo 2h + 1 pintura 2h)" />
              <FeatureItem text="Horarios: L-V 4pm-7pm | Sáb 9am-1pm" />
              <FeatureItem text="Programa: dibujo, pintura, color, texturas y materiales creativos" />
              <FeatureItem text="Beneficios: concentración, motricidad fina, confianza y expresión" />
            </ul>

            <div className="mb-10">
                <ImageGallery images={[
                  '/Fotografia/Clase ninos/DSC_5387.JPG',
                  '/Fotografia/Clase ninos/DSC_5390.JPG',
                  '/Fotografia/Clase ninos/DSC_5393.JPG',
                  '/Fotografia/Clase ninos/DSC_5400.JPG'
                ]} columns={2} />
            </div>
            
            <a href="/contacto" className="w-full block text-center py-4 bg-naranja text-noche font-medium hover:bg-[#ff9d2a] transition-colors">
              Inscribe a tu hijo/a
            </a>
          </div>

        </div>
      </section>

      {/* Program Details Teaser */}
      <section className="px-4 max-w-4xl mx-auto text-center mt-12">
        <h3 className="font-display text-3xl text-noche mb-6">Metodología del Estudio</h3>
        <p className="text-lg text-text-muted mb-8 leading-relaxed">
          Nuestras clases no siguen un modelo de "copiar y pegar". Cada alumno avanza a su propio ritmo con un plan de estudios que garantiza el aprendizaje de la técnica mientras descubre qué quiere decir a través de ella. Se requiere compromiso, constancia y ganas de explorar.
        </p>
      </section>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-noche/5 p-1 rounded-full shrink-0 text-noche">
        <Check size={14} strokeWidth={3} />
      </div>
      <span className="text-noche/80 leading-snug">{text}</span>
    </li>
  );
}
