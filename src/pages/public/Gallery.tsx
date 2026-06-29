import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ArrowRight, MessageCircle } from 'lucide-react';

// Mock data para la galería
const ARTWORKS = [
  { id: 1, title: 'Memoria en Azul', artist: 'Vianey César', technique: 'Óleo sobre lienzo', year: 2025, price: 15000, printPrice: 1500, width: 80, height: 100, status: 'disponible', image: '/Fotografia/Catalogo Obra/DSC_5269.JPG', category: 'Óleo' },
  { id: 2, title: 'Formas Orgánicas', artist: 'Aglael Valdivia', technique: 'Acuarela', year: 2026, price: 4500, printPrice: 1200, width: 30, height: 40, status: 'disponible', image: '/Fotografia/Catalogo Obra/DSC_5272.JPG', category: 'Acuarela' },
  { id: 3, title: 'Deconstrucción I', artist: 'Vianey César', technique: 'Acrílico', year: 2024, price: 8000, printPrice: 1500, width: 60, height: 60, status: 'disponible', image: '/Fotografia/Catalogo Obra/DSC_5411.JPG', category: 'Acrílico' },
  { id: 4, title: 'Retrato de la Tierra', artist: 'Aglael Valdivia', technique: 'Pigmentos naturales', year: 2025, price: 12000, printPrice: 1800, width: 70, height: 90, status: 'disponible', image: '/Fotografia/Catalogo Obra/_5212.JPG', category: 'Técnica Mixta' },
  { id: 5, title: 'Grabado Nocturno', artist: 'Aglael Valdivia', technique: 'Linóleo', year: 2026, price: 2500, printPrice: 800, width: 25, height: 25, status: 'disponible', image: '/Fotografia/Catalogo Obra/_5254.JPG', category: 'Grabado' },
  { id: 6, title: 'Estudio de Luz', artist: 'Vianey César', technique: 'Gis Pastel', year: 2025, price: 3800, printPrice: 1200, width: 40, height: 50, status: 'disponible', image: '/Fotografia/Catalogo Obra/DSC_5486.JPG', category: 'Pastel' },
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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredArtworks.map((art) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={art.id} 
                className="break-inside-avoid relative group bg-white border border-noche/5 cursor-pointer"
                onClick={() => setSelectedArtwork(art)}
              >
                <div className="relative overflow-hidden">
                  <img src={art.image} alt={art.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Status Badges */}
                  {art.status !== 'disponible' && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-mono font-semibold tracking-wider text-white ${art.status === 'vendida' ? 'bg-noche' : 'bg-vino'}`}>
                        {art.status.toUpperCase()}
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-noche/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2">Ver Detalles <ArrowRight size={16} /></span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-display text-xl text-noche mb-1">{art.title}</h3>
                  <div className="text-sm text-text-muted mb-3">{art.artist}, {art.year}</div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-noche/5">
                    <div className="text-xs text-text-muted">{art.technique}</div>
                    {art.status === 'disponible' ? (
                      <div className="font-display font-medium text-lg text-noche">${art.price.toLocaleString()} MXN</div>
                    ) : (
                      <div className="font-display font-medium text-lg text-text-muted/50">${art.price.toLocaleString()} MXN</div>
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
                    <span>{selectedArtwork.width} × {selectedArtwork.height} cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-text-muted">Categoría</span>
                    <span>{selectedArtwork.category}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <span className="font-medium text-text-muted mb-2">Formato de compra</span>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPurchaseFormat('original')}
                      className={`p-3 border text-center transition-colors ${purchaseFormat === 'original' ? 'border-noche bg-noche text-white' : 'border-noche/20 hover:border-noche/50 text-noche'}`}
                    >
                      <div className="font-display font-medium">Original</div>
                      <div className="text-sm opacity-80">${selectedArtwork.price.toLocaleString()} MXN</div>
                    </button>
                    <button 
                      onClick={() => setPurchaseFormat('print')}
                      className={`p-3 border text-center transition-colors ${purchaseFormat === 'print' ? 'border-noche bg-noche text-white' : 'border-noche/20 hover:border-noche/50 text-noche'}`}
                    >
                      <div className="font-display font-medium">Print Fine Art</div>
                      <div className="text-sm opacity-80">${selectedArtwork.printPrice ? selectedArtwork.printPrice.toLocaleString() : '1,500'} MXN</div>
                    </button>
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
