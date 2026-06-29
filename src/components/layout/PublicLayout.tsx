import { Outlet, Link } from 'react-router';
import { Menu } from 'lucide-react';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-crema text-noche">
      <header className="sticky top-0 z-50 bg-crema/90 backdrop-blur-sm border-b border-noche/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-negro.png" alt="AV Arte Estudio" className="h-12" />
            <span className="font-display font-semibold text-xl tracking-tight hidden sm:block">AV Arte Estudio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/quienes-somos" className="hover:text-naranja transition-colors">Quiénes Somos</Link>
            <Link to="/clases" className="hover:text-naranja transition-colors">Clases</Link>
            <Link to="/talleres" className="hover:text-naranja transition-colors">Talleres</Link>
            <Link to="/galeria" className="hover:text-naranja transition-colors">Galería</Link>
            <Link to="/contacto" className="hover:text-naranja transition-colors">Contacto</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/curso-verano" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 bg-vino text-white font-medium text-sm hover:bg-vino/90 transition-colors">
              Curso de Verano
            </Link>
            <button className="md:hidden p-2 text-noche">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-noche text-crema-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo-blanco.png" alt="AV Arte Estudio" className="h-16 mb-6" />
            <p className="text-crema-light/80 max-w-sm mb-6">
              Un espacio para crear, aprender e inspirarte. Estudio de arte boutique en Coyoacán, CDMX.
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
              <li><Link to="/experiencia-romantica" className="hover:text-naranja transition-colors">Experiencia Romántica</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-crema-light/80">
              <li><a href="https://maps.app.goo.gl/swB7sDifqeNKpd878?g_st=iw" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors">Tlalpan, CDMX</a></li>
              <li>contacto@avarteestudio.com</li>
              <li>WhatsApp: <a href="https://wa.me/525568892651" target="_blank" rel="noreferrer" className="hover:text-naranja transition-colors">55 6889 2651</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-crema-light/10 text-xs text-crema-light/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AV Arte Estudio. Todos los derechos reservados.</p>
          <Link to="/admin" className="hover:text-white transition-colors">Acceso Artistas</Link>
        </div>
      </footer>
    </div>
  );
}
