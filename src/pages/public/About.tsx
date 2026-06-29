import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageGallery } from '../../components/ui/ImageGallery';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="bg-crema min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.07.43%20PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            Quiénes Somos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Un estudio creado por mujeres artistas, para formar artistas libres, críticos y sensibles.
          </motion.p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 px-4 border-y border-noche/10 bg-white">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-noche/80 leading-relaxed font-body">
          <p>
            En AV Arte Estudio creemos que el arte no es un don reservado para unos pocos, sino un lenguaje que todos podemos aprender a hablar. Fundamos este espacio con una convicción clara: la técnica rigurosa y la expresión libre no están peleadas; de hecho, una nutre a la otra.
          </p>
          <p>
            Nuestro enfoque es profundamente humano y personalizado. Nos alejamos de las metodologías rígidas para ofrecer un acompañamiento que entiende los procesos individuales, fomentando el pensamiento crítico, la observación aguda y una mirada reflexiva con perspectiva de género.
          </p>
          <p className="text-xl font-display text-magenta text-center py-8">
            "No enseñamos a pintar cuadros bonitos, enseñamos a pensar visualmente, a resolver problemas plásticos y a encontrar una voz propia."
          </p>
        </div>
      </section>

      {/* Artists Profiles */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        {/* Vianey */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-5/12 aspect-[4/5] bg-noche/5 relative overflow-hidden">
            <img src="/Fotografia/Vianey Agla/DSC_5361.JPG" alt="Vianey César Martínez" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-7/12">
            <div className="inline-flex items-center justify-center p-3 bg-magenta/10 rounded-full mb-6 text-magenta">
              <Sparkles size={24} />
            </div>
            <h2 className="font-display text-4xl text-noche mb-2">Vianey César Martínez</h2>
            <p className="text-magenta font-medium text-lg mb-6">Diseñadora, animadora digital y artista. Directora y Fundadora.</p>
            
            <div className="space-y-4 text-text-muted mb-8">
              <p>Formación: Escuela Profesional de Dibujo (Artista Plástico, 2016), UNITEC (Lic. en Diseño, Animación y Arte Digital, 2020), Diplomado en Arte Terapia (Danzaterapia México, 2026).</p>
              <p>Con una trayectoria que abarca desde la docencia en Encaminarte (2023-2026) hasta la ilustración editorial en Francia ("Journal D'une Accro Á L'ayurveda", 2020), Vianey integra el mundo digital con la plástica tradicional.</p>
              <p>Ha expuesto en el Museo Regional de Puebla, Art Toys México, Casa de Cultura Sergio Pitol y la Embajada de Suiza.</p>
            </div>
            
            <div className="pt-6 border-t border-noche/10">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-noche mb-3">Dominio de Software</h4>
              <div className="flex flex-wrap gap-2">
                {['Illustrator', 'Photoshop', 'After Effects', 'Blender', 'Z-Brush'].map(sw => (
                  <span key={sw} className="px-3 py-1 bg-crema border border-noche/10 text-xs rounded-full">{sw}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aglael */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-5/12 aspect-[4/5] bg-noche/5 relative overflow-hidden">
            <img src="/Fotografia/Vianey Agla/DSC_5343.JPG" alt="Aglael S. Valdivia Ibarra" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-7/12">
            <div className="inline-flex items-center justify-center p-3 bg-teal/10 rounded-full mb-6 text-teal">
              <Sparkles size={24} />
            </div>
            <h2 className="font-display text-4xl text-noche mb-2">Aglael S. Valdivia Ibarra</h2>
            <p className="text-teal font-medium text-lg mb-6">Artista plástica y docente. Fundadora y Directora.</p>
            
            <div className="space-y-4 text-text-muted mb-8">
              <p>Especialista en técnicas pictóricas, teoría del color y composición, Aglael enfoca su docencia en el desarrollo técnico, conceptual y creativo de sus estudiantes, promoviendo un pensamiento crítico y libertad expresiva.</p>
              <p>Su trabajo tiene una fuerte mirada reflexiva con perspectiva de género, abarcando la investigación iconográfica e histórica del arte.</p>
            </div>
            
            <div className="pt-6 border-t border-noche/10">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-noche mb-3">Técnicas y Habilidades</h4>
              <div className="flex flex-wrap gap-2">
                {['Óleo y Acrílico', 'Acuarela y Pastel', 'Grabado (Linóleo/Metal)', 'Pigmentos Naturales', 'Encuadernación', 'Gestión de Exposiciones'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-crema border border-noche/10 text-xs rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location teaser */}
      <section className="bg-noche text-crema py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl mb-6">El Estudio</h2>
            <p className="text-lg text-crema/80 mb-10 max-w-2xl mx-auto">
              Nuestro espacio físico en el corazón de Tlalpan está diseñado para ser un refugio creativo. Amplio, iluminado y equipado con todos los materiales y herramientas profesionales.
            </p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-crema text-noche font-medium text-sm hover:bg-white transition-colors">
              Visítanos <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="mt-12">
            <ImageGallery images={[
              '/Fotografia/estudio/DSC_5838.JPG',
              '/Fotografia/estudio/DSC_5841.JPG',
              '/Fotografia/estudio/DSC_5843.JPG',
              '/Fotografia/estudio/DSC_5844.JPG',
              '/Fotografia/estudio/DSC_5846.JPG',
              '/Fotografia/estudio/DSC_5849.JPG',
              '/Fotografia/estudio/DSC_5850.JPG',
              '/Fotografia/estudio/DSC_5866.JPG'
            ]} columns={4} />
          </div>
        </div>
      </section>
    </div>
  );
}
