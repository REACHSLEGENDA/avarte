import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-crema-light min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-17%20at%209.55.01%20AM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/30 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            Contacto
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Ponte en contacto con el estudio para agendar una clase, reservar un taller o cotizar un evento privado.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="bg-white p-8 md:p-12 border border-noche/5 shadow-xl">
            <h3 className="font-display text-3xl text-noche mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input type="text" className="w-full border-b border-noche/20 p-2 bg-transparent focus:outline-none focus:border-naranja transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono (WhatsApp)</label>
                  <input type="tel" className="w-full border-b border-noche/20 p-2 bg-transparent focus:outline-none focus:border-naranja transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                <input type="email" className="w-full border-b border-noche/20 p-2 bg-transparent focus:outline-none focus:border-naranja transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Motivo</label>
                <select className="w-full border-b border-noche/20 p-2 bg-transparent focus:outline-none focus:border-naranja transition-colors text-noche">
                  <option>Información de Clases</option>
                  <option>Reservar Taller de Especialización</option>
                  <option>Cotizar Evento Grupal</option>
                  <option>Adquirir Obra de Galería</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea rows={4} className="w-full border-b border-noche/20 p-2 bg-transparent focus:outline-none focus:border-naranja transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 mt-4 bg-noche text-white font-medium hover:bg-naranja transition-colors flex items-center justify-center gap-2">
                Enviar Mensaje <ArrowRight size={18} />
              </button>
            </form>
          </div>
          
          {/* Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="font-display text-2xl text-noche mb-6 flex items-center gap-3">
                <MessageCircle className="text-teal" /> WhatsApp Directo
              </h3>
              <div className="space-y-4">
                <a href="https://wa.me/525568892651" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white border border-noche/5 hover:border-teal transition-colors group">
                  <div>
                    <div className="font-medium text-noche mb-1">WhatsApp del Estudio</div>
                    <div className="text-sm text-text-muted">55 6889 2651</div>
                  </div>
                  <ArrowRight size={18} className="text-noche/20 group-hover:text-teal transition-colors" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-2xl text-noche mb-6">Ubicación y Horarios</h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-vino shrink-0 mt-1" />
                  <span>
                    <a href="https://maps.app.goo.gl/swB7sDifqeNKpd878?g_st=iw" target="_blank" rel="noreferrer" className="hover:text-vino transition-colors">Tlalpan, CDMX</a>
                    <br/><span className="text-sm">(Da clic para abrir en Google Maps)</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-vino shrink-0" />
                  <span>contacto@avarteestudio.com</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-noche/10">
                <p className="font-medium text-noche mb-2">Horarios de Atención</p>
                <p className="text-sm text-text-muted">Lunes a Viernes: 10:00 - 19:00</p>
                <p className="text-sm text-text-muted">Sábados: 09:00 - 14:00</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-noche/10 flex gap-4">
              <a href="https://www.instagram.com/avarteestudio13" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-noche/10 rounded-full flex items-center justify-center text-noche hover:text-magenta hover:border-magenta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590510573087" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-noche/10 rounded-full flex items-center justify-center text-noche hover:text-azul hover:border-azul transition-colors font-bold font-display">
                f
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
