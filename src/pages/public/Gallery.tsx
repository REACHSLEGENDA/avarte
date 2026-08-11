import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ArrowRight, MessageCircle } from 'lucide-react';

// Catálogo de la galería
const ARTWORKS = [
  { id: 1, title: 'Tlahuelpuchi', artist: 'Aglael Valdivia', technique: 'Óleo sobre pino', year: 2023, price: 10000, width: 46, height: 82, status: 'disponible', image: '/Fotografia/Aglael_Clean/1.png', category: 'Óleo' },
  { id: 2, title: 'Solaría', artist: 'Aglael Valdivia', technique: 'Acrílico sobre tela', year: 2024, price: 7000, width: 50, height: 80, status: 'disponible', image: '/Fotografia/Aglael_Clean/2.png', category: 'Acrílico' },
  { id: 3, title: 'Ofelia sobre el Tapiz', artist: 'Aglael Valdivia', technique: 'Óleo sobre madera', year: 2025, price: 10000, width: 66, height: 40, status: 'disponible', image: '/Fotografia/Aglael_Clean/3.png', category: 'Óleo' },
  { id: 4, title: 'Kappa, yokai japones', artist: 'Aglael Valdivia', technique: 'Tintas sobre papel amate con hoja de oro', year: 2025, price: 3000, width: 'N/A', height: 'N/A', status: 'disponible', image: '/Fotografia/Aglael_Clean/4.png', category: 'Técnica Mixta' },
  { id: 5, title: 'TLNS', artist: 'Aglael Valdivia', technique: 'Óleo sobre tela', year: 2021, price: 0, printPrice: 100, width: 30, height: 30, status: 'solo print', image: '/Fotografia/Aglael_Clean/5.png', category: 'Óleo' },
  { id: 6, title: 'Ballenas', artist: 'Aglael Valdivia', technique: 'Acuarela', year: 2025, price: 1200, width: 21, height: 30, status: 'disponible', image: '/Fotografia/Aglael_Clean/6.png', category: 'Acuarela' },
  { id: 8, title: 'La fuerza del corazón', artist: 'Aglael Valdivia', technique: 'Escultura de resina y plastilina epóxica', year: 2024, price: 7000, width: 20, height: 35, status: 'disponible', image: '/Fotografia/Aglael_Clean/10.png', category: 'Escultura' },
  { id: 9, title: 'Niña', artist: 'Aglael Valdivia', technique: 'Carboncillo sobre fabriano', year: 2022, price: 4000, width: 29, height: 35, status: 'disponible', image: '/Fotografia/Aglael_Clean/7.png', category: 'Carboncillo' },
  { id: 10, title: 'Hombre', artist: 'Aglael Valdivia', technique: 'Carboncillo sobre fabriano', year: 2022, price: 4000, width: 29, height: 42, status: 'disponible', image: '/Fotografia/Aglael_Clean/8.png', category: 'Carboncillo' },
  { id: 11, title: 'Mi Sagitaria', artist: 'Aglael Valdivia', technique: 'Tinta chica con hoja de plata', year: 2024, price: 0, printPrice: 100, width: 21, height: 30, status: 'solo print', image: '/Fotografia/Aglael_Clean/9.png', category: 'Técnica Mixta' },
  { id: 12, title: 'Iridisente', artist: 'Aglael Valdivia', technique: 'Acrílico sobre papel', year: 2022, price: 1500, width: 30.5, height: 23, status: 'disponible', image: '/Fotografia/Aglael_Clean/11.png', category: 'Acrílico' },
  { id: 13, title: 'Reproducción', artist: 'Aglael Valdivia', technique: 'Punta seca 2/50', year: 2019, price: 700, width: 24, height: 18, status: 'disponible', image: '/Fotografia/Aglael_Clean/12.png', category: 'Grabado' },
  { id: 14, title: 'Sin título', artist: 'Aglael Valdivia', technique: 'Óleo sobre lienzo', year: 2021, price: 0, printPrice: 100, width: 60, height: 80, status: 'solo print', image: '/Fotografia/Aglael_Clean/13.png', category: 'Óleo' },
  { id: 15, title: 'IT', artist: 'Aglael Valdivia', technique: 'Libro intervenido', year: 2022, price: 1500, width: 'N/A', height: 'N/A', status: 'disponible', image: '/Fotografia/Aglael_Clean/14.png', category: 'Libro de Artista' },
  { id: 16, title: 'Street fairy', artist: 'Aglael Valdivia', technique: 'Linograbado 1/50', year: 2025, price: 80, width: 10, height: 15, status: 'disponible', image: '/Fotografia/Aglael_Clean/15.png', category: 'Grabado' },
  { id: 17, title: 'Vida', artist: 'Aglael Valdivia', technique: 'Linograbado 1/50', year: 2020, price: 80, width: 10, height: 10, status: 'disponible', image: '/Fotografia/Aglael_Clean/16.png', category: 'Grabado' },
  { id: 18, title: 'Axolotl', artist: 'Aglael Valdivia', technique: 'Linograbado 1/20', year: 2019, price: 300, width: 20, height: 30, status: 'disponible', image: '/Fotografia/Aglael_Clean/18.png', category: 'Grabado' },
  { id: 19, title: 'Pachamama', artist: 'Aglael Valdivia', technique: 'Linograbado 1/20', year: 2019, price: 300, width: 20, height: 30, status: 'disponible', image: '/Fotografia/Aglael_Clean/17.png', category: 'Grabado' },
  { id: 20, title: 'El faro', artist: 'Aglael Valdivia', technique: 'Agua tinta y agua fuerte, sobre cobre 1/25', year: 2019, price: 600, width: 25, height: 18, status: 'disponible', image: '/Fotografia/Aglael_Clean/19.png', category: 'Grabado' },
  { id: 21, title: 'La venganza de la reina Ana', artist: 'Aglael Valdivia', technique: 'Agua fuerte y Aguatinta 1/25', year: 2019, price: 600, width: 25, height: 18, status: 'disponible', image: '/Fotografia/Aglael_Clean/20.png', category: 'Grabado' },
  { id: 22, title: 'Guerrera Maya', artist: 'Aglael Valdivia', technique: 'Óleo sobre lienzo', year: 'En proceso', price: 0, width: 50, height: 70, status: 'no disponible', image: '/Fotografia/Aglael_Clean/21.png', category: 'Óleo' },
  { id: 23, title: 'Replica barroca', artist: 'Aglael Valdivia', technique: 'Óleo sobre lienzo', year: 2020, price: 4000, width: 30, height: 40, status: 'disponible', image: '/Fotografia/Aglael_Clean/22.png', category: 'Óleo' },
  { id: 24, title: 'El ángel caído (Réplica Cabanel)', artist: 'Vianey César', technique: 'Óleo sobre madera', year: 2023, price: 3800, width: 32.5, height: 26.5, status: 'disponible', image: '/Fotografia/Catalogo Obra/Cavanel1.png', category: 'Óleo' },
  { id: 25, title: 'Memento Vitae (Recuerda la vida)', artist: 'Vianey César', technique: 'Óleo sobre lienzo', year: 2023, price: 6000, width: 50, height: 40, status: 'disponible', image: '/Fotografia/Catalogo Obra/Memento Vitae.png', category: 'Óleo' },
  { id: 26, title: 'Desesperación', artist: 'Vianey César', technique: 'Carbón sobre lienzo', year: 2024, price: 7500, width: 50, height: 40, status: 'disponible', image: '/Fotografia/Catalogo Obra/Desesperacion.png', category: 'Carboncillo' },
  { id: 27, title: 'La Mujer Roja', artist: 'Vianey César', technique: 'Acrílico sobre lienzo', year: 2019, price: 9000, width: 70, height: 50, status: 'disponible', image: '/Fotografia/Catalogo Obra/La Mujer Roja.png', category: 'Acrílico' },
  { id: 28, title: 'El camino a Mictlán', artist: 'Vianey César', technique: 'Óleo sobre lienzo', year: 2019, price: 9000, width: 80, height: 60, status: 'disponible', image: '/Fotografia/Catalogo Obra/El camino al Mictlan.png', category: 'Óleo' },
  { id: 29, title: 'Entre besos y deseos', artist: 'Vianey César', technique: 'Digital con hoja de oro', year: 2025, price: 4000, width: 'N/A', height: 'N/A', status: 'disponible', image: '/Fotografia/Catalogo Obra/Entre besos y deseos.png', category: 'Técnica Mixta' },
  { id: 30, title: 'Noviembre (Réplica Racrufi)', artist: 'Vianey César', technique: 'Óleo sobre lienzo', year: 2019, price: 4500, width: 40, height: 50, status: 'disponible', image: '/Fotografia/Catalogo Obra/Noviembre.png', category: 'Óleo' },
  { id: 31, title: 'Psicosis', artist: 'Vianey César', technique: 'Acrílico sobre madera', year: 2024, price: 4000, width: 40, height: 56, status: 'disponible', image: '/Fotografia/Catalogo Obra/Psicosis.png', category: 'Acrílico' },
  { id: 32, title: 'Bestiario Quilin', artist: 'Vianey César', technique: 'Chapopote con Papel Amate e incrustación de oro', year: 2025, price: 5000, width: 40, height: 50, status: 'disponible', image: '/Fotografia/Catalogo Obra/Bestiario Quilin.png', category: 'Técnica Mixta' },
];

export function Gallery() {
  const [filterArtist, setFilterArtist] = useState<string>('Todos');
  const [filterStatus, setFilterStatus] = useState<string>('Todos');
  const [selectedArtwork, setSelectedArtwork] = useState<typeof ARTWORKS[0] | null>(null);
  const [purchaseFormat, setPurchaseFormat] = useState<'original' | 'print'>('original');

  const filteredArtworks = ARTWORKS.filter(art => {
    if (filterArtist !== 'Todos' && !art.artist.includes(filterArtist)) return false;
    if (filterStatus !== 'Todos' && art.status !== filterStatus.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="bg-crema-light min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden border-b border-noche/5">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-16%20at%2011.07.52%20PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/50 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div>
            <h1 className="font-display text-5xl text-white mb-4">Colección Original</h1>
            <p className="text-crema/90 max-w-xl text-lg">
              Explora y adquiere obras originales de Vianey César y Aglael Valdivia. Cada pieza es única e incluye certificado de autenticidad.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 border border-white/20 rounded-md">
              <Filter size={16} className="text-white" />
              <select 
                className="bg-transparent text-sm text-white focus:outline-none [&>option]:text-noche cursor-pointer"
                value={filterArtist}
                onChange={(e) => setFilterArtist(e.target.value)}
              >
                <option value="Todos">Ambas Artistas</option>
                <option value="Vianey">Vianey César</option>
                <option value="Aglael">Aglael Valdivia</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 border border-white/20 rounded-md">
              <select 
                className="bg-transparent text-sm text-white focus:outline-none [&>option]:text-noche cursor-pointer"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="Todos">Disponibilidad</option>
                <option value="disponible">Disponibles</option>
                <option value="reservada">Reservadas</option>
                <option value="vendida">Vendidas</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid (CSS-based approximations for now) */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArtworks.map((art) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={art.id} 
                className="relative group bg-white border border-noche/10 shadow-md rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedArtwork(art)}
              >
                <div className="relative overflow-hidden w-full">
                  <img src={art.image} alt={art.title} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Status Badges */}
                  {art.status !== 'disponible' && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-mono font-semibold tracking-wider text-white shadow-sm rounded-full ${art.status === 'vendida' || art.status === 'no disponible' ? 'bg-noche' : art.status === 'reservada' ? 'bg-vino' : 'bg-teal'}`}>
                        {art.status.toUpperCase()}
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-noche/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Ver Detalles <ArrowRight size={16} /></span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display text-xl text-noche mb-1 leading-tight">{art.title}</h3>
                  <div className="text-sm text-text-muted mb-4">{art.artist}, {art.year}</div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-noche/10">
                    <div className="text-xs text-text-muted max-w-[50%] truncate pr-2" title={art.technique}>{art.technique}</div>
                    {art.status === 'disponible' ? (
                      <div className="font-display font-semibold text-lg text-noche whitespace-nowrap">${art.price.toLocaleString()} MXN</div>
                    ) : (
                      <div className="font-display font-medium text-lg text-text-muted/60 whitespace-nowrap">
                        {art.status === 'solo print' ? `$${art.printPrice?.toLocaleString()} (Print)` : 'No Disp.'}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredArtworks.length === 0 && (
          <div className="text-center py-24 text-text-muted">
            No se encontraron obras con los filtros seleccionados.
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noche/95 p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            <div 
              className="relative w-full max-w-6xl max-h-full bg-white flex flex-col lg:flex-row overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-noche hover:bg-crema transition-colors"
                onClick={() => setSelectedArtwork(null)}
              >
                <X size={20} />
              </button>
              
              <div className="w-full lg:w-2/3 bg-noche-soft flex items-center justify-center p-8 max-h-[50vh] lg:max-h-none overflow-hidden">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title} 
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl" 
                />
              </div>
              
              <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col overflow-y-auto">
                <div className="inline-block px-3 py-1 bg-crema-light text-noche/60 font-mono text-xs font-semibold tracking-wider mb-6 w-max">
                  {selectedArtwork.artist.toUpperCase()}
                </div>
                
                <h2 className="font-display text-4xl text-noche mb-2">{selectedArtwork.title}</h2>
                <div className="text-lg text-text-muted mb-8">{selectedArtwork.year}</div>
                
                <div className="space-y-4 text-sm text-noche/80 mb-6 pb-6 border-b border-noche/10">
                  <div className="flex justify-between">
                    <span className="font-medium text-text-muted">Técnica</span>
                    <span>{selectedArtwork.technique}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-text-muted">Dimensiones</span>
                    <span>{selectedArtwork.width} × {selectedArtwork.height} {selectedArtwork.width !== 'N/A' && 'cm'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-text-muted">Categoría</span>
                    <span>{selectedArtwork.category}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <span className="font-medium text-text-muted mb-2">Formato de compra</span>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedArtwork.status !== 'solo print' && selectedArtwork.status !== 'no disponible' && (
                      <button 
                        onClick={() => setPurchaseFormat('original')}
                        className={`p-3 border text-center transition-colors ${purchaseFormat === 'original' ? 'border-noche bg-noche text-white' : 'border-noche/20 hover:border-noche/50 text-noche'}`}
                      >
                        <div className="font-display font-medium">Original</div>
                        <div className="text-sm opacity-80">${selectedArtwork.price.toLocaleString()} MXN</div>
                      </button>
                    )}
                    {selectedArtwork.status !== 'no disponible' && (
                      <button 
                        onClick={() => setPurchaseFormat('print')}
                        className={`p-3 border text-center transition-colors flex flex-col items-center justify-center ${purchaseFormat === 'print' ? 'border-noche bg-noche text-white' : 'border-noche/20 hover:border-noche/50 text-noche'}`}
                      >
                        <div className="font-display font-medium">Print Fine Art</div>
                        <div className="text-sm opacity-80">$100 MXN (A4)</div>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/525568892651?text=Hola,%20me%20interesa%20adquirir%20la%20obra%20"${selectedArtwork.title}"%20en%20formato%20${purchaseFormat.toUpperCase()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-green-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={18} />
                    Solicitar por WhatsApp
                  </a>
                  <p className="text-xs text-text-muted mt-4 text-center">Contacta con el estudio para organizar pago y envío directo, sin comisiones.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
