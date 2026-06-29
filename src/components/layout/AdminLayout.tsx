import { Outlet, Link } from 'react-router';
import { LayoutDashboard, Users, Calendar, Palette, PenTool, Video, DollarSign, Settings, LogOut } from 'lucide-react';

export function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-crema-light text-noche font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-noche text-crema-light flex flex-col shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-crema-light/10">
          <Link to="/admin" className="flex items-center gap-3">
            <img src="/logo-blanco.png" alt="AV Arte Estudio" className="h-8" />
            <span className="font-display font-semibold text-lg tracking-tight text-white">Estudio Admin</span>
          </Link>
        </div>
        
        <div className="flex-grow py-6 overflow-y-auto">
          <nav className="px-4 space-y-1">
            <NavItem to="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem to="/admin/alumnos" icon={<Users size={20} />} label="Alumnos" />
            <NavItem to="/admin/horarios" icon={<Calendar size={20} />} label="Horarios" />
            <NavItem to="/admin/talleres" icon={<PenTool size={20} />} label="Talleres" />
            <NavItem to="/admin/galeria" icon={<Palette size={20} />} label="Galería" />
            <NavItem to="/admin/blog" icon={<PenTool size={20} />} label="Blog" />
            <NavItem to="/admin/videos" icon={<Video size={20} />} label="Videos" />
            <NavItem to="/admin/finanzas" icon={<DollarSign size={20} />} label="Finanzas" />
          </nav>
        </div>

        <div className="p-4 border-t border-crema-light/10">
          <nav className="space-y-1">
            <NavItem to="/admin/configuracion" icon={<Settings size={20} />} label="Configuración" />
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-crema-light/70 hover:text-white hover:bg-crema-light/5 rounded-md transition-colors text-left">
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-noche/10 flex items-center px-8 shrink-0">
          <h1 className="font-display font-semibold text-xl text-noche">
            Panel de Administración
          </h1>
        </header>
        <div className="flex-grow p-8 overflow-y-auto bg-crema-light/50">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-crema-light/70 hover:text-white hover:bg-crema-light/5 rounded-md transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
