import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PublicLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-body bg-crema text-noche">
      <header className="sticky top-0 z-50 bg-crema/90 backdrop-blur-sm border-b border-noche/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img src="/logo-negro.png" alt="AV Arte Estudio" className="h-12" />
            <span className="font-display font-semibold text-xl tracking-tight hidden xl:block">AV Arte Estudio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium">
            <Link to="/quienes-somos" className="hover:text-naranja transition-colors">Quiénes Somos</Link>
            <Link to="/clases" className="hover:text-naranja transition-colors">Clases</Link>
            <Link to="/talleres" className="hover:text-naranja transition-colors">Talleres</Link>
            <Link to="/galeria" className="hover:text-naranja transition-colors">Galería</Link>
            <Link to="/contacto" className="hover:text-naranja transition-colors">Contacto</Link>
          </nav>
          <div className="flex items-center gap-4 relative z-50">
            <Link to="/curso-verano" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 bg-vino text-white font-medium text-sm hover:bg-vino/90 transition-colors">
              Curso de Verano
            </Link>
            <button 
              className="md:hidden p-2 text-noche"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 z-40 bg-crema bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl font-medium border-t border-noche/10 md:hidden h-[calc(100vh-5rem)] overflow-y-auto pb-20"
          >
            <Link to="/" className="hover:text-naranja transition-colors">Inicio</Link>
            <Link to="/quienes-somos" className="hover:text-naranja transition-colors">Quiénes Somos</Link>
            <Link to="/clases" className="hover:text-naranja transition-colors">Clases</Link>
            <Link to="/talleres" className="hover:text-naranja transition-colors">Talleres</Link>
            <Link to="/galeria" className="hover:text-naranja transition-colors">Galería</Link>
            <Link to="/contacto" className="hover:text-naranja transition-colors">Contacto</Link>
            <Link to="/curso-verano" className="mt-4 px-8 py-4 bg-vino text-white font-medium hover:bg-vino/90 transition-colors">
              Curso de Verano
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-noche text-crema-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo-blanco.png" alt="AV Arte Estudio" className="h-16 mb-6" />
            <p className="text-crema-light/80 max-w-sm mb-6">
              Un espacio donde la creatividad, la imaginación y la expresión se convierten en herramientas para crecer, aprender y conectar. Estudio de arte en Tlalpan, CDMX.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/avarteestudio13" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61590510573087" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors">Facebook</a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Servicios</h4>
            <ul className="space-y-3 text-sm text-crema-light/80">
              <li><Link to="/clases" className="hover:text-naranja transition-colors">Clases Regulares</Link></li>
              <li><Link to="/talleres" className="hover:text-naranja transition-colors">Talleres de Especialización</Link></li>
              <li><Link to="/curso-verano" className="hover:text-naranja transition-colors">Curso de Verano</Link></li>
              <li><Link to="/experiencia-romantica" className="hover:text-naranja transition-colors">Experiencias Artísticas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-crema-light/80 break-words">
              <li><a href="https://maps.app.goo.gl/swB7sDifqeNKpd878?g_st=iw" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors block">Plaza las hadas Calz de las Brujas 303, Coapa, Rinconada de las Hadas, Tlalpan, 14390 CDMX.</a></li>
              <li>contacto@avarteestudio.com</li>
              <li>WhatsApp: <a href="https://wa.me/525568892651" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors">55 6889 2651</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-crema-light/10 text-xs text-crema-light/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} AV Arte Estudio. Todos los derechos reservados.</p>
          <Link to="/admin" className="hover:text-white transition-colors">Acceso Artistas</Link>
        </div>
      </footer>
    </div>
  );
}
