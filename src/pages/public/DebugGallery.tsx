const IMAGES = [
  '1.png', '10.png', '11-1.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '2.png', '20.png', '21.png', '22.png', '23.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'
];

export function DebugGallery() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8 text-noche">Revisión de Imágenes de Aglael</h1>
      <p className="mb-8">Por favor, revisa esta lista y dime qué archivo corresponde a qué obra para poder corregir el catálogo.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {IMAGES.map(img => (
          <div key={img} className="border p-4 flex flex-col items-center">
            <img 
              src={`/Fotografia/Catalogo Obra/${img}`} 
              alt={img} 
              className="max-h-64 object-contain mb-4 border border-gray-200"
            />
            <span className="font-mono text-lg font-bold bg-gray-100 px-2 py-1">{img}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
