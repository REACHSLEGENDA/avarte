import { BrowserRouter, Routes, Route } from 'react-router';
import { PublicLayout } from './components/layout/PublicLayout';
import { AdminLayout } from './components/layout/AdminLayout';
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { Dashboard } from './pages/admin/Dashboard';

import { Classes } from './pages/public/Classes';
import { SummerCourse } from './pages/public/SummerCourse';
import { Workshops } from './pages/public/Workshops';
import { RomanticExperience } from './pages/public/RomanticExperience';
import { Gallery } from './pages/public/Gallery';
import { Blog } from './pages/public/Blog';
import { Videos } from './pages/public/Videos';
import { Contact } from './pages/public/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<About />} />
          <Route path="clases" element={<Classes />} />
          <Route path="curso-verano" element={<SummerCourse />} />
          <Route path="talleres" element={<Workshops />} />
          <Route path="experiencia-romantica" element={<RomanticExperience />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<div className="p-24 text-center">404 - Página no encontrada</div>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="alumnos" element={<div>Alumnos (En construcción)</div>} />
          <Route path="horarios" element={<div>Horarios (En construcción)</div>} />
          <Route path="talleres" element={<div>Talleres Admin (En construcción)</div>} />
          <Route path="galeria" element={<div>Galería Admin (En construcción)</div>} />
          <Route path="blog" element={<div>Blog Admin (En construcción)</div>} />
          <Route path="videos" element={<div>Videos Admin (En construcción)</div>} />
          <Route path="finanzas" element={<div>Finanzas (En construcción)</div>} />
          <Route path="configuracion" element={<div>Configuración (En construcción)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
