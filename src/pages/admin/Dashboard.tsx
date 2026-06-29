export function Dashboard() {
  return (
    <div>
      <h2 className="font-display text-3xl mb-8 text-noche">Resumen General</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Alumnos Activos" value="42" change="+3 este mes" />
        <StatCard title="Ingresos (Mes)" value="$68,500" change="+12% vs anterior" />
        <StatCard title="Ocupación" value="85%" change="Estable" />
        <StatCard title="Obras Disponibles" value="18" change="2 vendidas este mes" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-noche/5 p-6 rounded-lg shadow-sm">
          <h3 className="font-display text-xl mb-4">Ingresos por Servicio</h3>
          <div className="h-64 flex items-center justify-center bg-crema-light/30 border border-dashed border-noche/10 rounded">
            <span className="text-text-muted text-sm">Gráfica (Recharts) se implementará aquí</span>
          </div>
        </div>
        
        <div className="bg-white border border-noche/5 p-6 rounded-lg shadow-sm">
          <h3 className="font-display text-xl mb-4">Próximos Eventos</h3>
          <ul className="space-y-4">
            <EventItem date="Hoy, 16:00" title="Clase Niños (Pintura)" />
            <EventItem date="Mañana, 10:00" title="Experiencia Romántica" />
            <EventItem date="Sábado, 09:00" title="Taller de Grabado" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="bg-white border border-noche/5 p-6 rounded-lg shadow-sm">
      <h4 className="text-sm text-text-muted mb-2">{title}</h4>
      <div className="text-3xl font-display text-noche mb-1">{value}</div>
      <div className="text-xs font-medium text-teal">{change}</div>
    </div>
  );
}

function EventItem({ date, title }: { date: string; title: string }) {
  return (
    <li className="flex gap-4 items-start border-b border-noche/5 pb-3 last:border-0 last:pb-0">
      <div className="text-xs font-mono text-text-muted w-24 shrink-0 pt-1">{date}</div>
      <div className="font-medium text-sm text-noche">{title}</div>
    </li>
  );
}
