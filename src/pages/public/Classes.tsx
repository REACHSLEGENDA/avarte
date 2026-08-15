import { Check } from 'lucide-react';
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
          <div className="flex flex-col h-full bg-white p-8 md:p-12 border border-noche/5 shadow-xl">
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
              <FeatureItem text="4 horas a la semana, sesiones de dos horas" />
              <FeatureItem text="Fundamentos: Observación, proporción, claroscuro, composición" />
              <FeatureItem text="Técnicas: Grafito, carbón, gis pastel, acrílico, acuarela, tinta, óleo y medios mixtos." />
            </ul>

            <div className="mb-10">
                <ImageGallery images={[
                  '/Fotografia/Clase adultos/adulto1.png',
                  '/Fotografia/Clase adultos/adulto2.png',
                  '/Fotografia/Clase adultos/adulto3.JPG',
                  '/Fotografia/Clase adultos/adulto4.JPG'
                ]} columns={2} />
            </div>
            
            <a href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20agendar%20una%20clase%20muestra%20para%20Adultos" target="_blank" rel="noreferrer" className="mt-auto w-full block text-center py-4 bg-noche text-white font-medium hover:bg-noche-soft transition-colors">
              Agenda una clase muestra
            </a>
          </div>

          {/* Niños */}
          <div className="flex flex-col h-full bg-white p-8 md:p-12 border border-noche/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-naranja/10 rounded-bl-full -z-10" />
            <div className="inline-block px-3 py-1 bg-naranja/10 text-naranja font-mono text-xs font-semibold tracking-wider mb-6">
              DE 5 A 17 AÑOS
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
                  '/Fotografia/Clase ninos/FOTO1.png',
                  '/Fotografia/Clase ninos/FOTO2.png',
                  '/Fotografia/Clase ninos/FOTO3.png',
                  '/Fotografia/Clase ninos/FOTO4.png'
                ]} columns={2} />
            </div>
            
            <a href="https://wa.me/525568892651?text=Hola,%20me%20interesa%20agendar%20una%20clase%20muestra%20para%20Niños%20y%20Jóvenes" target="_blank" rel="noreferrer" className="mt-auto w-full block text-center py-4 bg-naranja text-noche font-medium hover:bg-[#ff9d2a] transition-colors">
              Agenda una clase muestra
            </a>
          </div>

        </div>
      </section>

      {/* Program Details Teaser */}
      <section className="px-4 max-w-4xl mx-auto text-center mt-12">
        <h3 className="font-display text-3xl text-noche mb-6">Metodología del Estudio</h3>
        <p className="text-lg text-text-muted mb-8 leading-relaxed">
          Nuestras clases no siguen un modelo de "copiar y pegar". Entendemos que cada persona tiene una forma distinta de aprender y crear, por eso nos basamos en una atención individualizada, el alumno avanza a su propio ritmo con un plan de estudios que garantiza el aprendizaje de la técnica mientras descubre qué quiere decir a través de ella.
        </p>
        <p className="text-lg text-text-muted mb-8 leading-relaxed">
          Fomentamos un ambiente de apoyo, donde el diálogo y el intercambio de ideas son fundamentales. Aquí no solo desarrollarás habilidades técnicas, sino también un pensamiento reflexivo, observador y crítico que te permitirá encontrar tu propia voz.
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
